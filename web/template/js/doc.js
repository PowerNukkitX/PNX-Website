// noinspection JSUnresolvedFunction,JSUnresolvedVariable,DuplicatedCode

function wip() {
    mdui.snackbar(translate("wip.main"), {
        buttonText: translate("wip.ok")
    })
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

function checkLanguage() {
    let languageId = (window.language || navigator.language || navigator.browserLanguage).toLowerCase();
    const currentLanguageId = document.documentElement.lang;
    if (currentLanguageId !== languageId) {
        let tipMessage;
        let back = false;
        switch (languageId) {
            case "zh-cn":
                tipMessage = "这篇文档有简体中文版";
                break;
            case "en-us":
                tipMessage = "There's an English version.";
                break;
            default:
                tipMessage = "Maybe you want the English version.";
                back = true;
                break;
        }
        if (back) {
            if (window.languageLinks["en-us"]) {
                languageId = "en-us";
            } else {
                return;
            }
        }
        document.getElementById("switch-language-tip-box").classList.remove("mdui-hidden");
        const aEle = document.getElementById("switch-language-tip-text");
        aEle.innerText = tipMessage;
        aEle.setAttribute("href", window.location.href.replace(currentLanguageId, languageId)
            .replace(window.languageLinks[currentLanguageId].replace(".md", ".html"), window.languageLinks[languageId]).replace(".md", ".html"));

    }
}

function defaultCheckTheme() {
    const flag = window.localStorage.getItem("dark-theme");
    if (flag && flag === "true") {
        switchTheme(true);
    }
}

window.addEventListener("load", () => {
    checkLanguage();
    docsearch({
        container: document.getElementById("docsearch"),
        appId: 'OFCZA0B2HT',
        indexName: 'pnx_doc',
        apiKey: 'dd150e9149e9cb03cfbcee5629eca3a9',
        searchParameters: langSearchParameters,
        translations: algoliaTranslations,
        placeholder: algoliaPlaceholder
    });
})

defaultCheckTheme();
