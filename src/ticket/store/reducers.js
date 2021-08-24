import { 
    ACTION_SET_DEPART_DATE,
    ACTION_SET_ARRIVE_DATE,
    ACTION_SET_TRAIN_NUMBER,
    ACTION_SET_DEPART_TIME_STR,
    ACTION_SET_ARRIVE_TIME_STR,
    ACTION_SET_DEPART_STATION,
    ACTION_SET_ARRIVE_STATION,
    ACTION_SET_DURATION_STR 
} from "./actions";

export default {
    departDate(state=Date.now(), action) {
        const {type, payload} = action;
        if(type === ACTION_SET_DEPART_DATE) {
            return payload;
        }
        return state;
    },
    arriveDate(state=Date.now(), action) {
        const {type, payload} = action;
        if(type === ACTION_SET_ARRIVE_DATE) {
            return payload;
        }
        return state;
    },
    departTimeStr(state="", action) {
        const { type, payload } = action;
        switch (type) {
            case ACTION_SET_DEPART_TIME_STR:
                return payload;
            default:
        }

        return state;
    },
    arriveTimeStr(state="", action) {
        const { type, payload } = action;
        switch (type) {
            case ACTION_SET_ARRIVE_TIME_STR:
                return payload;
            default:
        }

        return state;
    },
    departStation(state="", action) {
        const { type, payload } = action;
        switch (type) {
            case ACTION_SET_DEPART_STATION:
                return payload;
            default:
        }

        return state;
    },
    trainNumber(state=null, action) {
        const {type, payload} = action;
        if(type === ACTION_SET_TRAIN_NUMBER) {
            return payload;
        }

        return state;
    },
    arriveStation(state="",action) {
        const { type, payload } = action;
        switch (type) {
            case ACTION_SET_ARRIVE_STATION:
                return payload;
            default:
        }

        return state;
    },
    durationStr(state = null, action) {
        const { type, payload } = action;
        switch (type) {
            case ACTION_SET_DURATION_STR:
                return payload;
            default:
        }

        return state;
    },
}