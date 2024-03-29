import axios from 'axios';
export const ACTION_SET_IS_CITY_SELECTOR_VISIBLE = "SET_IS_CITY_SELECTOR_VISIBLE";
export const ACTION_SET_SELECT_CITY = "ACTION_SET_SELECT_CITY";
export const CHANGEFROMTO = "CHANGEFROMTO";
export const GET_CITY_DATA = "GET_CITY_DATA";
export const ACTION_SET_IS_DATE_SELECTOR_VISIBLE = "ACTION_SET_IS_DATE_SELECTOR_VISIBLE";
export const ACTION_SET_DEPART_DATE = "ACTION_SET_DEPART_DATE";
export const SET_HIGH_SPEED = 'SET_HIGH_SPEED';

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

export const fetchCityDataAction = () => {
    return (dispatch) => {
        axios.get("/rest/cities")
            .then((res) => {
                const cityData = res.data.data;
                const action = {
                    type: GET_CITY_DATA,
                    value: cityData
                }
                dispatch(action)
            })
    }
}

export const showDateSelectorAction = () => {
    return ({
        type: ACTION_SET_IS_DATE_SELECTOR_VISIBLE,
        value: true
    })
}

export const hideDateSelectorAction = () => {
    return ({
        type: ACTION_SET_IS_DATE_SELECTOR_VISIBLE,
        value: false
    })
}

export const setDepartDateAction = (day) => {
    return ({
        type: ACTION_SET_DEPART_DATE,
        value: day
    })
}

export const setHighSpeedAction = () => {
    return ({
        type: SET_HIGH_SPEED
    })
}