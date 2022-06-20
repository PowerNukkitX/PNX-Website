// noinspection JSUnresolvedFunction,JSUnresolvedVariable,DuplicatedCode

const chn = {
    "wip.main": "Developing...",
    "wip.ok": "OK",
    "more-menu.switch-theme": "Switch theme",
    "more-menu.switch-to-day": "Switched to day theme",
    "more-menu.switch-to-night": "Switched to night theme",
    "more-menu.ok": "OK",
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
    facetFilters: ['language:en']
}

const algoliaTranslations = {}

const algoliaPlaceholder = "Search in PNX docs"