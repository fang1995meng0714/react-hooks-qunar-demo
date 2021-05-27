export const ACTION_SET_IS_CITY_SELECTOR_VISIBLE = "SET_IS_CITY_SELECTOR_VISIBLE";
export const ACTION_SET_SELECT_CITY = "ACTION_SET_SELECT_CITY";
export const CHANGEFROMTO = "CHANGEFROMTO";

export const showCitySelectorAction = (value) => {
    return ({
        type: ACTION_SET_IS_CITY_SELECTOR_VISIBLE,
        value: true,
        currentSelectingLeftCity: value
    })
}

export const hideCitySelectorAction = () => ({
    type: ACTION_SET_IS_CITY_SELECTOR_VISIBLE,
    value: false
})

export const setSelectedCityAction = (city) => ({
    type: ACTION_SET_SELECT_CITY,
    value: city
})

export const changeFromToAction = () => {
    return ({
        type: CHANGEFROMTO
    })
}