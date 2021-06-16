import {
    ORDER_DEPART,
    ACTION_SET_FROM,
    ACTION_SET_TO,
    ACTION_SET_DEPART_DATE,
    ACTION_SET_ORDER_TYPE,
    ACTION_SET_TRAIN_LIST,
    ACTION_SET_HIGH_SPEED
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
    },
    trainList(state=[], action) {
        let {type, value} = action;
        if(type === ACTION_SET_TRAIN_LIST) {
            return value;
        }
        return state;
    },
    orderType(state = ORDER_DEPART, action) {
        let {type, value} = action;

        if(type === ACTION_SET_ORDER_TYPE) {
            return value;
        }
        return state;
    },
    highSpeed(state=false, action) {
        let {type, value} = action;
        
        if(type === ACTION_SET_HIGH_SPEED) {
            return value;
        }
        return state;
    }
}