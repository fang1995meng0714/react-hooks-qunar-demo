import {
    ORDER_DEPART,
    ACTION_SET_FROM,
    ACTION_SET_TO,
    ACTION_SET_DEPART_DATE,
    ACTION_SET_ORDER_TYPE,
    ACTION_SET_TRAIN_LIST,
    ACTION_SET_HIGH_SPEED,
    ACTION_SET_ONLY_TICKETS,
    ACTION_SET_TICKET_TYPES,
    ACTION_SET_TRAIN_TYPES,
    ACTION_SET_CHECKED_TICKET_TYPES,
    ACTION_SET_DEPART_STATIONS,
    ACTION_SET_ARRIVE_STATIONS
} from "./actions";

export default {
    from(state = null, action) {
        const {type, value} = action
        if(type === ACTION_SET_FROM) {
            return value
        }
        return state;
    },
    to(state = null, action) {
        const {type, value} = action
        if(type === ACTION_SET_TO) {
            return value
        }
        return state;
    },
    departDate(state=new Date(),action) {
        const {type, value} = action;
        if(type === ACTION_SET_DEPART_DATE) {
            return value
        }
        return state;
    },
    trainList(state=[], action) {
        const {type, value} = action;
        if(type === ACTION_SET_TRAIN_LIST) {
            return value;
        }
        return state;
    },
    orderType(state = ORDER_DEPART, action) {
        const {type, value} = action;

        if(type === ACTION_SET_ORDER_TYPE) {
            return value;
        }
        return state;
    },
    highSpeed(state=false, action) {
        const {type, value} = action;
        
        if(type === ACTION_SET_HIGH_SPEED) {
            return value;
        }
        return state;
    },
    onlyTickets(state=false, action) {
        const {type, value} = action;
        
        if(type === ACTION_SET_ONLY_TICKETS) {
            return value;
        }
        return state; 
    },
    ticketTypes(state=[], action) {
        const {type, value} = action;
        
        if(type === ACTION_SET_TICKET_TYPES) {
            return value;
        }
        return state; 
    },
    trainTypes(state=[], action) {
        const {type, value} = action;
        
        if(type === ACTION_SET_TRAIN_TYPES) {
            return value;
        }
        return state;
    },
    checkedTicketTypes(state = {}, action) {
        const {type, value} = action;

        if(type === ACTION_SET_CHECKED_TICKET_TYPES) {
            return value;
        }

        return state;
    },
    checkedTrainTypes(state = {}, action) {
        return state;
    },
    departStations(state = [], action) {
        const {type, value} = action;

        if(type === ACTION_SET_DEPART_STATIONS) {
            return value;
        }

        return state;
    },
    arriveStations(state = [], action) {
        const {type, value} = action;

        if(type === ACTION_SET_ARRIVE_STATIONS) {
            return value;
        }

        return state;
    },
    checkedDepartStations(state = {}, action) {
        return state;
    },
    checkedArriveStations(state = {}, action) {
        return state;
    },
    departTimeStart(state = 0, action) {
        return state;
    },
    departTimeEnd(state = 24, action) {
        return state;
    },
    arriveTimeStart(state = 0, action) {
        return state;
    },
    arriveTimeEnd(state = 0, action) {
        return state;
    },
}