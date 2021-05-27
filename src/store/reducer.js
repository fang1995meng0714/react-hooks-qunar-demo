import {ACTION_SET_IS_CITY_SELECTOR_VISIBLE, ACTION_SET_SELECT_CITY, CHANGEFROMTO} from "./actions";

export default (state, action) => {
    if(action.type === ACTION_SET_IS_CITY_SELECTOR_VISIBLE) {
        return {...state, isCitySelectorVisible: action.value, currentSelectingLeftCity: action.currentSelectingLeftCity || false}
    }

    if(action.type === ACTION_SET_SELECT_CITY) {
        let newState = JSON.parse(JSON.stringify(state));
        if(newState.currentSelectingLeftCity) {
            newState.from = action.value
        } else {
            newState.to = action.value
        }
        newState.isCitySelectorVisible = false;
        return newState;
    }

    if(action.type === CHANGEFROMTO) {
        const {from, to} = state;
        const obj = {from: to, to: from};
        return Object.assign({}, state, obj)
    }

    return state;
}
