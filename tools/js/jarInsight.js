const baseJavaDts = `declare type byte = number;
declare type char = number;
declare type short = number;
declare type int = number;
declare type long = number;
declare type float = number;
declare type double = number;

declare namespace java.lang {
    declare type Object = globalThis.Object;
}

declare namespace java.util {
    declare type List<T> = globalThis.Array<T>;
    declare type Set<T> = globalThis.Set<T>;
    declare type Map<K, V> = globalThis.Map<K, V>;
}
`;

const classFileContentElement = document.querySelector('#classFileAsDTS > pre');

function handleFileSelect(e) {
    const file = e.target.files[0];
    const reader = new FileReader();
    const classReader = new JavaClassTools.JavaClassFileReader();
    const textDecoder = new TextDecoder();

    function analyseClass(data) {
        console.time('read class');
        const classFile = classReader.read(data);
        console.timeEnd('read class');

        classFileContentElement.innerText = '';

        const classFullName = textDecoder.decode(new Uint8Array(classFile.constant_pool[classFile.constant_pool[classFile.this_class].name_index].bytes)).replace(/\//g, ".");
        const superFullName = textDecoder.decode(new Uint8Array(classFile.constant_pool[classFile.constant_pool[classFile.super_class].name_index].bytes)).replace(/\//g, ".");
        const classSimpleName = classFullName.substring(classFullName.lastIndexOf(".") + 1);
        const classPackageName = classFullName.substring(0, classFullName.lastIndexOf("."));
        const isInterface = (classFile.access_flags & JavaClassTools.Modifier.INTERFACE.valueOf()) !== 0;

        let classInterfaces = "";
        for (const each of classFile.interfaces) {
            const interfaceName = textDecoder.decode(new Uint8Array(classFile.constant_pool[classFile.constant_pool[each].name_index].bytes)).replace(/\//g, ".");
            classInterfaces += (", " + interfaceName);
        }
        classInterfaces = classInterfaces.replace(", ", "") + " ";

        let superInfo;
        if (isInterface) {
            if (classInterfaces.trim().length === 0) {
                superInfo = "";
            } else {
                superInfo = "extends " + classInterfaces;
            }
        } else {
            superInfo = `extends ${superFullName}${classFile.interfaces_count === 0 ? "" : " implements "}${classInterfaces}`;
        }

        const dts = `
declare namespace ${classPackageName} {
    declare ${isInterface ? "interface" : "class"} ${classSimpleName} ${superInfo}{
%content%
    }
}

declare module "${classPackageName}.${classSimpleName}" {
    declare ${isInterface ? "type" : "const"} ${classSimpleName} = ${classPackageName}.${classSimpleName};
}`;
        let dtsContent = "";

        function appendMembersToListElement(memberList, type) {
            memberList.forEach(function (entry) {
                const nameCpEntry = classFile.constant_pool[entry.name_index];
                const descriptorCpEntry = classFile.constant_pool[entry.descriptor_index];
                const isStatic = (entry.access_flags & JavaClassTools.Modifier.STATIC.valueOf()) !== 0;
                const isPublic = (entry.access_flags & JavaClassTools.Modifier.PUBLIC.valueOf()) !== 0;

                let name = textDecoder.decode(new Uint8Array(nameCpEntry.bytes));
                let descriptor = textDecoder.decode(new Uint8Array(descriptorCpEntry.bytes));

                if ("field" === type) {
                    if (isStatic) {
                        name = "static " + name;
                    }
                    if (isPublic) {
                        name = "public " + name;
                    }
                    let transformed = false;
                    for (const each of entry.attributes) {
                        if (each.signature_index) {
                            descriptor = javaSigToTypescriptType(textDecoder.decode(new Uint8Array(classFile.constant_pool[each.signature_index].bytes)));
                            transformed = true;
                            break;
                        }
                    }
                    if (!transformed) {
                        descriptor = javaSigToTypescriptType(descriptor);
                    }
                    dtsContent += ("        " + name + ": " + descriptor + "\n");
                } else if ("method" === type) {
                    if (name === "<init>") {
                        name = "constructor";
                    } else if (name === "<clinit>") {
                        return;
                    }
                    if (isStatic) {
                        name = "static " + name;
                    }
                    if (isPublic) {
                        name = "public " + name;
                    }
                    for (const each of entry.attributes) {
                        if (each.signature_index) {
                            descriptor = textDecoder.decode(new Uint8Array(classFile.constant_pool[each.signature_index].bytes));
                            break;
                        }
                    }
                    const result = parseJavaMethodSignature(descriptor);
                    const localNameMap = new Map();
                    for (const each of entry.attributes) {
                        if (each.attributes) {
                            for (const attr of each.attributes) {
                                if (attr.local_variable_table) {
                                    for (const local of attr.local_variable_table.sort((a, b) => a.index - b.index)) {
                                        let localName = textDecoder.decode(new Uint8Array(classFile.constant_pool[local.name_index].bytes));
                                        if (localName === "var" || localName === "function" || localName === "let" || localName === "const") {
                                            localName = "__" + localName + "__";
                                        }
                                        localNameMap.set(local.index, localName);
                                    }
                                }
                            }
                        }
                    }
                    let bd = "(";
                    for (let i = 0, len = result.argumentTypes.length; i < len; i++) {
                        if (i !== 0) {
                            bd += ", "
                        }
                        const localName = localNameMap.get(i + (isStatic ? 0 : 1));
                        bd += (localName ? localName : ("var" + i));
                        bd += ": ";
                        bd += result.argumentTypes[i];
                    }
                    bd += "): ";
                    bd += result.returnType;
                    dtsContent += ("        " + name + bd + "\n")
                }
            });
        }

        appendMembersToListElement(classFile.methods, "method");
        appendMembersToListElement(classFile.fields, "field");

        return {
            dts: dts.replace("%content%", dtsContent),
            methodCount: classFile.methods_count,
            fieldCount: classFile.fields_count
        }
    }

    window.currentFileName = file.name;

    if (file.name.endsWith(".class")) {
        reader.onload = e => {
            const result = analyseClass(e.target.result);
            document.getElementById('output').style.display = 'block';
            document.getElementById('classSum').innerText = "1";
            document.getElementById('methodSum').innerText = result.methodCount;
            document.getElementById('fieldSum').innerText = result.fieldCount;
            classFileContentElement.innerText = result.dts;
        }
        reader.readAsArrayBuffer(file);
    } else if (file.name.endsWith(".jar") || file.name.endsWith(".jmod")) {
        let classSum = 0;
        let methodSum = 0;
        let fieldSum = 0;
        JSZip.loadAsync(file).then(zip => {
            document.getElementById('output').style.display = 'block';
            window.allDts = [];
            zip.forEach((relativePath, zipEntry) => {
                console.log(zipEntry);
                if (zipEntry.dir) {
                    return;
                }
                if (!zipEntry.name.endsWith(".class")) {
                    return;
                }
                zip.file(zipEntry.name).async("arrayBuffer").then(data => {
                    const result = analyseClass(data);
                    allDts.push(result.dts);
                    classSum++;
                    methodSum += result.methodCount;
                    fieldSum += result.fieldCount;
                    if (classFileContentElement.style.display !== "none") {
                        classFileContentElement.innerText = allDts.join("\n");
                    }
                    document.getElementById('classSum').innerText = "" + classSum;
                    document.getElementById('methodSum').innerText = "" + methodSum;
                    document.getElementById('fieldSum').innerText = "" + fieldSum;
                }, e => console.warn(e));
            })
        })
    } else {
        alert("请选择class字节码文件或jar代码包文件！")
    }
}

document.getElementById('showDTSBtn').addEventListener('click', () => {
    classFileContentElement.style.display =
        classFileContentElement.style.display === 'block' ? 'none' : 'block';
    if (classFileContentElement.style.display !== "none") {
        classFileContentElement.innerText = baseJavaDts + allDts.join("\n");
    }
});

document.getElementById('saveDTSBtn').addEventListener('click', () => {
    console.log("SAVE")
    const name = currentFileName.substring(0, currentFileName.lastIndexOf(".")) + ".d.ts";
    const blob = new Blob([baseJavaDts + allDts.join("\n")], {type: "text/plain;charset=utf-8"});
    saveAs(blob, name);
})

document.getElementById('input').addEventListener('change', handleFileSelect, false);

function parseJavaMethodSignature(signature) {
    const result = parseJavaSignature(signature);
    return {
        argumentTypes: result.slice(0, result.length - 1),
        returnType: result[result.length - 1]
    }
}

function javaSigToTypescriptType(sigEntry) {
    return parseJavaSignature(sigEntry)[0];
}

function parseJavaSignature(signature) {
    const SIG_REGEX = /(\[*L[^;]+?<(\+?[^;]+?;)+?(>;)+)|(\[*L[^<>;]+?;)|(\[*[VZBCSIJFD])/g
    const types = [];
    let sigEntry;
    let time = 0;
    for (let result = SIG_REGEX.exec(signature); result !== null; result = SIG_REGEX.exec(signature)) {
        if (++time > 100) {
            break;
        }
        if ((sigEntry = result[1])) { // 带有泛型的类
            // 先取出泛型部分
            const dimensionInfo = arrayDimension(sigEntry);
            sigEntry = dimensionInfo.type;
            const index = sigEntry.indexOf("<");
            const genericType = sigEntry.substring(index + 1, sigEntry.lastIndexOf(">"));
            const classType = sigEntry.substring(0, index);
            let out = classType.substring(1, classType.length).replace(/\//g, ".") + "<";
            const parseResult = parseJavaSignature(genericType);
            for (let i = 0; i < parseResult.length; i++) {
                if (i !== 0) {
                    out += ", ";
                }
                out += parseResult[i];
            }
            out += ">";
            types.push(out + "[]".repeat(dimensionInfo.dimension));
        } else if ((sigEntry = result[4])) { // 无泛型的普通类
            const dimensionInfo = arrayDimension(sigEntry);
            sigEntry = dimensionInfo.type;
            switch (sigEntry) {
                case "Ljava/lang/String;":
                    sigEntry = "?string;";
                    break;
                case "Ljava/lang/Long;":
                    sigEntry = "?long;";
                    break;
                case "Ljava/lang/Boolean;":
                    sigEntry = "?boolean;";
                    break;
                case "Ljava/lang/Void;":
                    sigEntry = "?void;";
                    break;
                case "Ljava/lang/Byte;":
                    sigEntry = "?byte;";
                    break;
                case "Ljava/lang/Character;":
                    sigEntry = "?char;";
                    break;
                case "Ljava/lang/Integer;":
                    sigEntry = "?int;";
                    break;
                case "Ljava/lang/Float;":
                    sigEntry = "?float;";
                    break;
                case "Ljava/lang/Double;":
                    sigEntry = "?double;";
                    break;
            }
            types.push(sigEntry.substring(1, sigEntry.length - 1).replace(/\//g, ".") + "[]".repeat(dimensionInfo.dimension));
        } else if ((sigEntry = result[5])) { // 原始类型或void
            const dimensionInfo = arrayDimension(sigEntry);
            sigEntry = dimensionInfo.type;
            switch (sigEntry) {
                case "V":
                    types.push("void" + "[]".repeat(dimensionInfo.dimension));
                    break;
                case "Z":
                    types.push("boolean" + "[]".repeat(dimensionInfo.dimension));
                    break;
                case "B":
                    types.push("byte" + "[]".repeat(dimensionInfo.dimension));
                    break;
                case "C":
                    types.push("char" + "[]".repeat(dimensionInfo.dimension));
                    break;
                case "S":
                    types.push("short" + "[]".repeat(dimensionInfo.dimension));
                    break;
                case "I":
                    types.push("int" + "[]".repeat(dimensionInfo.dimension));
                    break;
                case "J":
                    types.push("long" + "[]".repeat(dimensionInfo.dimension));
                    break;
                case "F":
                    types.push("float" + "[]".repeat(dimensionInfo.dimension));
                    break;
                case "D":
                    types.push("double" + "[]".repeat(dimensionInfo.dimension));
                    break;
            }
        }
    }
    if (types.length === 0) {
        types.push("any");
    }
    return types;
}

function arrayDimension(sigEntry) {
    for (let i = 0; i < sigEntry.length; i++) {
        const char = sigEntry.charAt(i);
        if (char !== "[") {
            return {
                dimension: i,
                type: sigEntry.substring(i)
            }
        }
    }
}