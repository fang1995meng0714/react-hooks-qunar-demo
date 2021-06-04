import {
    ACTION_SET_IS_CITY_SELECTOR_VISIBLE,
    ACTION_SET_SELECT_CITY, 
    CHANGEFROMTO,
    GET_CITY_DATA,
    ACTION_SET_IS_DATE_SELECTOR_VISIBLE,
    ACTION_SET_DEPART_DATE,
    SET_HIGH_SPEED
} from "./actions";

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

    if(action.type === GET_CITY_DATA) {
        let newState = JSON.parse(JSON.stringify(state));
        newState.cityData = action.value;
    
        return newState;
    }

    if(action.type === ACTION_SET_IS_DATE_SELECTOR_VISIBLE) {
        let newState = JSON.parse(JSON.stringify(state));
        newState.isDateSelectorVisible = action.value;
    
        return newState; 
    }

    if(action.type === ACTION_SET_DEPART_DATE) {
        let newState = JSON.parse(JSON.stringify(state));
        newState.departDate = action.value;
        newState.isDateSelectorVisible = false;
    
        return newState; 
    }

    if(action.type === SET_HIGH_SPEED) {
        let newState = JSON.parse(JSON.stringify(state));
        let temp = state.highSpeed;
        newState.highSpeed = !temp;
    
        return newState; 
    }

    return state;
}
