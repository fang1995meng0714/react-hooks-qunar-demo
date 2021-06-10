import {
    ACTION_SET_FROM,
    ACTION_SET_TO,
    ACTION_SET_DEPART_DATE
} from "./actions";

export default {
    from(state = null, action) {
        let {type, value} = action
        if(type === ACTION_SET_FROM) {
            return value
        }
        return state;
    },
    to(state = null, action) {
        let {type, value} = action
        if(type === ACTION_SET_TO) {
            return value
        }
        return state;
    },
    departDate(state=new Date(),action) {
        let {type, value} = action;
        if(type === ACTION_SET_DEPART_DATE) {
            return value
        }
        return state;
    }
}