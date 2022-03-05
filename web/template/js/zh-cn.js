// noinspection JSUnresolvedFunction,JSUnresolvedVariable,DuplicatedCode

function wip() {
    mdui.snackbar("此功能正在开发中", {
        buttonText: "确认"
    })
}

function switchTheme() {
    const clazz = document.body.classList;
    if (clazz.contains("mdui-theme-layout-dark")) {
        clazz.remove("mdui-theme-layout-dark");
        mdui.snackbar("已切换为白天主题", {
            buttonText: "确认"
        })
    } else {
        clazz.add("mdui-theme-layout-dark");
        mdui.snackbar("已经切换为夜间主题", {
            buttonText: "确认"
        })
    }
}