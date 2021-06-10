export const CITY_NAME = "CITY_NAME";

export const cityNameAction = (value) => {
    return ({
        type: CITY_NAME,
        value: value,
    })
}