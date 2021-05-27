export const ACTION_SET_FROM = "SET_FROM";
export const ACTION_SET_TO = "SET_TO";
export const ACTION_SET_IS_CITY_SELECTOR_VISIBLE = "SET_IS_CITY_SELECTOR_VISIBLE";

export function setFrom(from) {
    return {
        type: ACTION_SET_FROM,
        value: from
    }
}

export function setTo(to) {
    return {
        type: ACTION_SET_TO,
        value: to
    }
}

// export const isCitySelectorVisible = (value) => ({
//     type: ACTION_SET_IS_CITY_SELECTOR_VISIBLE,
//     value
// })

export const showCitySelectorAction = (value) => ({
    type: ACTION_SET_IS_CITY_SELECTOR_VISIBLE,
    value
})