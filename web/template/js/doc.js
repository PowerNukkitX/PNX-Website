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

/*
 * 侧边栏折叠
 */
const collapseBC = new BroadcastChannel("collapse-broadcast");

function sideBarCollapse() {
    for (const ele of document.getElementsByClassName("category-folder")) {
        const nextEle = getNextNearEle(ele);
        if (nextEle == null || nextEle.nodeName !== "OL") continue;
        const collapseData = localStorage.getItem("sidebar-collapsed-" + ele.innerText);
        if (collapseData === null) localStorage.setItem("sidebar-collapsed-" + ele.innerText, "false");
        const collapsed = collapseData === "true";
        if (collapsed) {
            nextEle.classList.remove("mdui-hidden");
        } else {
            nextEle.classList.add("mdui-hidden");
        }
        const expandEle = document.createRange().createContextualFragment(`<i class="mdui-icon material-icons category-expander" onclick="checkExpand(this, true)">expand_${collapsed ? "less" : "more"}</i>`);
        ele.appendChild(expandEle);
    }
}

function checkExpand(self, recursion) {
    const ele = getPrevNearEle(self);
    let collapsed = localStorage.getItem("sidebar-collapsed-" + ele.innerText) === "true";
    if (!recursion) collapsed = !collapsed;
    if (!collapsed) {
        getNextNearEle(self.parentNode).classList.remove("mdui-hidden");
        self.innerHTML = "expand_less";
    } else {
        getNextNearEle(self.parentNode).classList.add("mdui-hidden");
        self.innerHTML = "expand_more";
    }
    if (recursion) {
        localStorage.setItem("sidebar-collapsed-" + ele.innerText, String(!collapsed));
        collapseBC.postMessage({
            source: String(window.location.href),
            title: ele.innerText
        });
    }
}

// 跨页同步折叠
collapseBC.onmessage = (event) => {
    for (const ele of document.getElementsByClassName("category-expander")) {
        if (getPrevNearEle(ele).innerText === event.data.title) {
            setTimeout(function () {
                checkExpand(ele, false);
            }, 10);
            break;
        }
    }
};

/*
 * 跨页同步侧边栏滚动
 */
const scrollBC = new BroadcastChannel("sidebar-scroll-broadcast");
function startSyncSideBarScroll() {
    const scrollEle = document.getElementById("catalogue-drawer");
    scrollEle.addEventListener("wheel", () => {
        scrollBC.postMessage({
            source: String(window.location.href),
            scrollTop: scrollEle.scrollTop
        });
    });

    scrollBC.onmessage = (event) => {
        scrollEle.scrollTop = event.data.scrollTop;
    }
}


/**
 * 获取相邻的下一个Node
 * @param ele {Node}
 * @return {Node|null}
 */
function getNextNearEle(ele) {
    let nearEle = ele.nextSibling
    while (nearEle) {
        if (nearEle.nodeType === 1) {
            return nearEle;
        } else {
            nearEle = nearEle.nextSibling;
        }
        if (!nearEle) {
            break;
        }
    }
    return null;
}

/**
 * 获取相邻的上一个Node
 * @param ele {Node}
 * @return {Node|null}
 */
function getPrevNearEle(ele) {
    let nearEle = ele.previousSibling
    while (nearEle) {
        if (nearEle.nodeType === 1) {
            return nearEle;
        } else {
            nearEle = nearEle.previousSibling;
        }
        if (!nearEle) {
            break;
        }
    }
    return null;
}

window.addEventListener("load", () => {
    checkLanguage();
    sideBarCollapse();
    startSyncSideBarScroll();
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
