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
    "link.source-code": "Source Code"
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
    "link.source-code": "源代码"
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