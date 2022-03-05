// noinspection JSUnresolvedFunction,JSUnresolvedVariable,DuplicatedCode

function wip() {
    mdui.snackbar(translate("wip.main"), {
        buttonText: translate("wip.ok")
    })
}

function switchTheme() {
    const clazz = document.body.classList;
    if (clazz.contains("mdui-theme-layout-dark")) {
        clazz.remove("mdui-theme-layout-dark");
        mdui.snackbar(translate("more-menu.switch-to-day"), {
            buttonText: translate("more-menu.ok")
        })
    } else {
        clazz.add("mdui-theme-layout-dark");
        mdui.snackbar(translate("more-menu.switch-to-night"), {
            buttonText: translate("more-menu.ok")
        })
    }
}

function checkLanguage() {
    const languageId = (window.language || navigator.language || navigator.browserLanguage).toLowerCase();
    if(document.documentElement.lang !== languageId) {
        let tipMessage;
        if(window.languageLinks[languageId]) {
            switch (languageId) {
                case "zh-cn":
                    tipMessage = "这篇文档有简体中文版";
                    break;
                case "en-us":
                    tipMessage = "There's an English version.";
                    break;
            }
            document.getElementById("switch-language-tip-box").classList.remove("mdui-hidden");
            const aEle = document.getElementById("switch-language-tip-text");
            aEle.innerText = tipMessage;
            //aEle.setAttribute("href", window.languageLinks[languageId]);
        }
    }
}

checkLanguage();