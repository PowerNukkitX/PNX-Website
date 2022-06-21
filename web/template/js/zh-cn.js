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

const langSearchParameters = {
    facetFilters: ['language:zh']
}

const algoliaTranslations = {
    button: {
        buttonText: '搜索',
        buttonAriaLabel: '搜索',
    },
    modal: {
        searchBox: {
            resetButtonTitle: '清空',
            resetButtonAriaLabel: '清空',
            cancelButtonText: '退出',
            cancelButtonAriaLabel: '退出',
        },
        startScreen: {
            recentSearchesTitle: '最近搜索',
            noRecentSearchesText: '暂无搜索记录',
            saveRecentSearchButtonTitle: '保存此次搜索',
            removeRecentSearchButtonTitle: '删除这条搜索记录',
            favoriteSearchesTitle: '收藏',
            removeFavoriteSearchButtonTitle: '将此搜索从收藏中删除',
        },
        errorScreen: {
            titleText: '获取搜素结果失败',
            helpText: '请检查您的网络连接，然后重试。',
        },
        footer: {
            selectText: '跳转',
            selectKeyAriaLabel: '回车',
            navigateText: '导航',
            navigateUpKeyAriaLabel: '↑',
            navigateDownKeyAriaLabel: '↓',
            closeText: '关闭',
            closeKeyAriaLabel: 'Esc',
            searchByText: '搜索引擎：',
        },
        noResultsScreen: {
            noResultsText: 'PNX文档中无内容关于',
            suggestedQueryText: '尝试搜索',
            reportMissingResultsText: '确信结果存在但搜不到？',
            reportMissingResultsLinkText: '反馈给我们',
        },
    },
};

const algoliaPlaceholder = "在PNX文档中搜索"