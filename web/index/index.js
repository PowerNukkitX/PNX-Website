// noinspection JSUnresolvedFunction,JSUnresolvedVariable,DuplicatedCode

let languageId = (window.language || navigator.language || navigator.browserLanguage).toLowerCase();
const $ = mdui.$;
const logoDesAmount = 9;
const eng = {
    "wip.main": "Coming soon...",
    "wip.ok": "OK",
    "more-menu.switch-theme": "Switch theme",
    "more-menu.document": "PNX docs",
    "more-menu.switch-to-day": "Switched to day theme",
    "more-menu.switch-to-night": "Switched to night theme",
    "more-menu.ok": "OK",
    "logo-des-mcbe-server": "MCBE server software",
    "logo-des-0": "High-performance, feature-rich, fully open source ",
    "logo-des-1": "Multi-core parallel computing ",
    "logo-des-2": "Vanilla commands and command blocks supported ",
    "logo-des-3": "JS plugin engine within ",
    "logo-des-4": "Java17 & ES13 based",
    "logo-des-5": "0% Microsoft/mojang code ",
    "logo-des-6": "Redstone supported ",
    "logo-des-7": "384-height worlds ",
    "logo-des-8": "Multi-world supported ",
    "logo-des-9": "Epic world generator within ",
    "link.source-code": "Source Code",
    "text.why-choose-pnx": "Why choose PNX?",
    "text.servers-choice": "Many servers' choice",
    "text.servers": "servers",
    "text.running-pnx": "are running PNX",
    "text.on-github": "on Github",

    "text.high-performance": "High performance",
    "text.high-performance.description": "Multi-core parallel computing + Graal JIT",
    "text.high-performance.content": "The parallel processing capability of PNX enables it to make full use of multi-core CPU. You don't need to pursue high CPU frequency, and you can enjoy the huge performance improvement brought by multi-core CPU. At the same time, we use the world's leading graaljit compiler to dynamically convert java code into high-quality machine code most suitable for your CPU, so that Java code has high performance comparable to C++.",

    "text.more-feature": "Vanilla features",
    "text.more-feature.description": "All blocks, items, recipes, etc.",
    "text.more-feature.content": "PNX supports more vanilla features, including but not limited to all blocks, items, recipes, redstone, vanilla commands, water-logged blocks, etc. PNX is committed to providing a better survival mode game experience.",

    "text.and-more": "And more...",
    "text.and-more.description": "More advantages are waiting you to explore.",
    "text.and-more.content": "PNX has countless other advantages, waiting to meet you in the process of using it."
}
const chn = {
    "wip.main": "此功能正在开发中",
    "wip.ok": "确认",
    "more-menu.switch-theme": "切换主题",
    "more-menu.document": "PNX文档",
    "more-menu.switch-to-day": "已切换至日间主题",
    "more-menu.switch-to-night": "已切换至夜间主题",
    "more-menu.ok": "确认",
    "logo-des-mcbe-server": "的MCBE服务端",
    "logo-des-0": "高性能、富特性、全开源",
    "logo-des-1": "多核并行计算",
    "logo-des-2": "支持原版命令和命令方块",
    "logo-des-3": "自带JS插件引擎",
    "logo-des-4": "基于Java17和ES13",
    "logo-des-5": "0%来自微软/mojang代码",
    "logo-des-6": "支持原版红石电路",
    "logo-des-7": "拥有384格全新世界",
    "logo-des-8": "支持单端多世界",
    "logo-des-9": "能够生成壁纸级史诗地形",
    "link.source-code": "源代码",
    "text.why-choose-pnx": "为什么选择PNX？",
    "text.servers-choice": "众多服务器的共同选择",
    "text.servers": "台服务器",
    "text.running-pnx": "此刻正在运行PNX",
    "text.on-github": "在Github平台上",

    "text.high-performance": "高性能",
    "text.high-performance.description": "多核并行计算 + Graal即时编译器",
    "text.high-performance.content": "PNX的并行处理能力使得其能够更充分地利用多核CPU，您无需追求CPU高主频，可以享受多核心CPU带来的巨大性能提升。同时，我们引入世界领先的GraalJIT编译器，将java代码动态转换为最适合您的CPU的高质量机器码，让java代码拥有堪比C++的高性能。",

    "text.more-feature": "更多原版特性",
    "text.more-feature.description": "高版本方块、物品、合成等应有尽有",
    "text.more-feature.content": "PNX支持更多原版特性，包括但不限于所有原版方块、物品及其合成，红石电路，原版命令，含水方块等。PNX致力于提供更好的生存游戏体验。",

    "text.massive-plugins":"海量插件",
    "text.massive-plugins.description":"数千插件，任您选用",
    "text.massive-plugins.content":"PNX在添加众多原版特性的同时仍保留了较好的插件兼容性，能够直接运行基于NukkitX和PowerNukkit编写的Java插件。此外，PNX还基于内置的JS引擎实现了LiteLoader的JSAPI，这使得LLSE插件经过少许更改即可运行在PNX上。",

    "text.vanilla-command":"原版命令",
    "text.vanilla-command.description":"支持原版命令和命令方块",
    "text.vanilla-command.content":"PNX允许您在游戏中使用原版命令和命令方块，绝大多数原版命令和mcfunction文件都可以在pnx上使用。您可以使用命令方块快捷地自定义您的服务器。",

    "text.js-engine":"JS插件",
    "text.js-engine.description":"基于ES13标准和ESM的现代化JS插件",
    "text.js-engine.content":"您可以使用JS快速编写基于PNX的插件。基于ES13标准和ESM的JS插件引擎使得您可以快速稳定地构建大型插件，同时保留良好的跨插件交互性，JS插件可以与其他JS或Java插件无缝交互，与Java代码一道被融合编译，打破语言边界，获取超高性能。",

    "text.and-more": "还有更多...",
    "text.and-more.description": "更多优点等待您探索",
    "text.and-more.content": "PNX还有其他数不胜数的优点，等待着在您在使用的过程中与您邂逅。"
}

function switchTheme(noNotice) {
    const clazz = document.body.classList;
    if (clazz.contains("mdui-theme-layout-dark")) {
        clazz.remove("mdui-theme-layout-dark", "mdui-theme-primary-light-blue", "mdui-theme-accent-light-blue");
        clazz.add("mdui-theme-primary-indigo", "mdui-theme-accent-indigo");
        if (!noNotice) {
            mdui.snackbar(translate("more-menu.switch-to-day"), {
                buttonText: translate("more-menu.ok")
            });
        }
        window.localStorage.setItem("dark-theme", "false");
    } else {
        clazz.remove("mdui-theme-primary-indigo", "mdui-theme-accent-indigo");
        clazz.add("mdui-theme-layout-dark", "mdui-theme-primary-light-blue", "mdui-theme-accent-light-blue");
        if (!noNotice) {
            mdui.snackbar(translate("more-menu.switch-to-night"), {
                buttonText: translate("more-menu.ok")
            })
        }
        window.localStorage.setItem("dark-theme", "true");
    }
}

function defaultCheckTheme() {
    const flag = window.localStorage.getItem("dark-theme");
    if (flag && flag === "true") {
        switchTheme(true);
    }
}

defaultCheckTheme();
$('[translate=yes]').each((index, value) => {
    $(value).text(translate($(value).text()))
});

(function renderLogoDes() {
    const ele = document.getElementById('logo-dyn-description');

    function displayNextLogoDes(index, delay) {
        setTimeout(index => {
            const allDelay = retype(ele, translate("logo-des-" + index), 80);
            displayNextLogoDes(index + 1 > logoDesAmount ? 0 : index + 1, allDelay);
        }, delay + 2000, index);
    }

    displayNextLogoDes(0, 0);
})();


/**
 *
 * @param key {string}
 * @return {string}
 */
function translate(key) {
    if (languageId === "zh-cn") {
        return chn[key];
    }
    return eng[key];
}

/**
 * 模拟打字效果
 * @param component {HTMLElement}
 * @param str {string}
 * @param delay {number} ms
 * @return {number} 消耗时间
 */
function retype(component, str, delay) {
    for (let i = 0, len = component.innerText.length; i <= len; i++) {
        setTimeout((len, str) => {
            component.innerText = str.substring(0, len);
        }, delay * i, len - i, component.innerText);
    }
    for (let i = 0, len = str.length; i <= len; i++) {
        setTimeout((len, str) => {
            component.innerText = str.substring(0, len);
        }, delay * (i + component.innerText.length + 1), i, str);
    }
    return (component.innerText.length + str.length + 1) * delay;
}

/**
 * 发送get请求
 * @param url {string}
 * @return {Promise<unknown>}
 */
function get(url) {
    return new Promise(function (resolve, reject) {
        const req = new XMLHttpRequest();
        req.open('GET', url);
        req.onload = function () {
            if (req.status === 200) {
                resolve(req.response);
            } else {
                reject(Error(req.statusText));
            }
        };
        req.onerror = function () {
            reject(Error("Network Error"));
        };
        req.send();
    });
}

async function refreshPNXServers(callback) {
    const response = await get("https://bstats.org/api/v1/plugins/10277/charts/nukkit_version/data");
    const data = JSON.parse(response);
    let count = 0;
    for (const each of data) {
        if (each.name.indexOf("PNX") !== -1) {
            count += each.y;
        }
    }
    if (callback) {
        callback(count);
    }
}

refreshPNXServers(count => document.getElementById("pnx-server-count").innerText = count).then(() => {});
get("https://api.powernukkitx.cn/get-github-star").then(response => document.getElementById("pnx-star-count").innerText = response);