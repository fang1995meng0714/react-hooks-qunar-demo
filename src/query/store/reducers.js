import {
    CITY_NAME
} from "./actions";

export default {
    from(state = null, action) {
        console.log(state)
        return state;
    },

    to(state = null, action) {
        console.log(state)
        return state;
    }
}