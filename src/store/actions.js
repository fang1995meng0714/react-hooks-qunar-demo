export const ACTION_SET_IS_CITY_SELECTOR_VISIBLE = "SET_IS_CITY_SELECTOR_VISIBLE";
export const ACTION_SET_SELECT_CITY = "ACTION_SET_SELECT_CITY";
export const showCitySelectorAction = (value) => {
    return ({
        type: ACTION_SET_IS_CITY_SELECTOR_VISIBLE,
        value: true,
        currentSelectingLeftCity: value
    })
}

export const hideCitySelectorAction = (value) => ({
    type: ACTION_SET_IS_CITY_SELECTOR_VISIBLE,
    value: false
})

export const setSelectedCityAction = (city) => ({
    type: ACTION_SET_SELECT_CITY,
    value: city
})