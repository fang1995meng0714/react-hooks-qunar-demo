import {ACTION_SET_IS_CITY_SELECTOR_VISIBLE, ACTION_SET_SELECT_CITY} from "./actions";

export default (state, action) => {
    if(action.type === ACTION_SET_IS_CITY_SELECTOR_VISIBLE) {
        return {...state, isCitySelectorVisible: action.value, currentSelectingLeftCity: action.currentSelectingLeftCity || false}
    }

    if(action.type === ACTION_SET_SELECT_CITY) {
        return state;
    }

    return state;
}
