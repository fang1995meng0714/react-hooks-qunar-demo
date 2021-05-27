import {ACTION_SET_IS_CITY_SELECTOR_VISIBLE} from "./actions";

export default (state, action) => {
    if(action.type === ACTION_SET_IS_CITY_SELECTOR_VISIBLE) {
        return {...state, isCitySelectorVisible: action.value}
    }

    return state;
}

// export default {
//     from(state = "北京", action) {
//         return state;
//     },
//     to(state = "上海", action) {
//         return state;
//     }
// }