// noinspection JSUnresolvedFunction,JSUnresolvedVariable,DuplicatedCode

const chn = {
    "wip.main": "此功能正在开发中",
    "wip.ok": "确认",
    "more-menu.switch-theme": "切换主题",
    "more-menu.switch-to-day": "已切换至日间主题",
    "more-menu.switch-to-night": "已切换至夜间主题",
    "more-menu.ok": "确认",
}

/**
 *
 * @param key {string}
 * @return {string}
 */
function translate(key) {
    return chn[key];
}