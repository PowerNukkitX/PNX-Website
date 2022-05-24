// noinspection JSUnresolvedFunction,JSUnresolvedVariable,DuplicatedCode

const languageId = (window.language || navigator.language || navigator.browserLanguage).toLowerCase();
const $ = mdui.$;
const eng = {
    "wip.main": "Coming soon...",
    "wip.ok": "OK",
    "more-menu.switch-theme": "Switch theme",
    "more-menu.document": "PNX docs",
    "more-menu.switch-to-day": "Switched to day theme",
    "more-menu.switch-to-night": "Switched to night theme",
    "more-menu.ok": "OK"
}
const chn = {
    "wip.main": "此功能正在开发中",
    "wip.ok": "确认",
    "more-menu.switch-theme": "切换主题",
    "more-menu.document": "PNX文档",
    "more-menu.switch-to-day": "已切换至日间主题",
    "more-menu.switch-to-night": "已切换至夜间主题",
    "more-menu.ok": "确认"
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
})

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