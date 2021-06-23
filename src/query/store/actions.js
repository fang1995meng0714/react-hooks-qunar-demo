export const ORDER_DEPART = 1;
export const ORDER_DURATION = 2;
export const ACTION_SET_FROM = "ACTION_SET_FROM";
export const ACTION_SET_TO = "ACTION_SET_TO";
export const ACTION_SET_DEPART_DATE = 'SET_DEPART_DATE';
export const ACTION_SET_ORDER_TYPE = 'SET_ORDER_TYPE';
export const ACTION_SET_TRAIN_LIST = 'SET_TRAIN_LIST';
export const ACTION_SET_HIGH_SPEED = 'SET_HIGH_SPEED';
export const ACTION_SET_ONLY_TICKETS = 'SET_ONLY_TICKETS';
export const ACTION_SET_TICKET_TYPES = 'SET_TICKET_TYPES';
export const ACTION_SET_TRAIN_TYPES = 'SET_TRAIN_TYPES';
export const ACTION_SET_CHECKED_TRAIN_TYPES = 'SET_CHECKED_TRAIN_TYPES';
export const ACTION_SET_CHECKED_TICKET_TYPES = 'SET_CHECKED_TICKET_TYPES';
export const ACTION_SET_DEPART_STATIONS = 'SET_DEPART_STATIONS';
export const ACTION_SET_ARRIVE_STATIONS = 'SET_ARRIVE_STATIONS';
export const ACTION_SET_DEPART_TIME_START = 'SET_DEPART_TIME_START';
export const ACTION_SET_ARRIVE_TIME_START = 'SET_ARRIVE_TIME_START';
export const ACTION_SET_ARRIVE_TIME_END = 'SET_ARRIVE_TIME_END';
export const ACTION_SET_DEPART_TIME_END = 'SET_DEPART_TIME_END';
export const ACTION_SET_CHECKED_DEPART_STATIONS = 'SET_CHECKED_DEPART_STATIONS';
export const ACTION_SET_CHECKED_ARRIVE_STATIONS = 'SET_CHECKED_ARRIVE_STATIONS';

export function setFrom(from) {
    return {
        type: ACTION_SET_FROM,
        value: from
    }
}
export function setTo(to) {
    return {
        type: ACTION_SET_TO,
        value: to
    }
}
export function setDepartDate(departDate) {
    return {
        type: ACTION_SET_DEPART_DATE,
        value: departDate
    }
}

export function setTrainList(trainList) {
    return {
        type: ACTION_SET_TRAIN_LIST,
        value:trainList
    }
}

export function toggleOrderType() {
    return (dispatch, getState) => {
        const {orderType} = getState();
        if(orderType === ORDER_DEPART) {
            dispatch({
                type: ACTION_SET_ORDER_TYPE,
                value: ORDER_DURATION
            })
        } else {
            dispatch({
                type: ACTION_SET_ORDER_TYPE,
                value: ORDER_DEPART,
            })
        }
    }
}

export function setHighSpeed(highSpeed) {
    return {
        type: ACTION_SET_HIGH_SPEED,
        value: highSpeed
    }
}

export function toggleHighSpeed() {
    return (dispatch, getState) => {
        const {highSpeed} = getState();

        dispatch(setHighSpeed(!highSpeed));
    }
}

export function toggleOnlyTickets() {
    return (dispatch, getState) => {
        const {onlyTickets} = getState();

        dispatch({
            type: ACTION_SET_ONLY_TICKETS,
            value: !onlyTickets
        })
    }
}

export function setTicketTypes(ticketTypes) {
    return {
        type: ACTION_SET_TICKET_TYPES,
        value: ticketTypes
    }
}

export function setTrainTypes(trainTypes) {
    return {
        type: ACTION_SET_TRAIN_TYPES,
        value: trainTypes,
    };
}

export function setCheckedTicketTypes(checkedTicketTypes) {
    return {
        type: ACTION_SET_CHECKED_TICKET_TYPES,
        value: checkedTicketTypes,
    };
}

export function setCheckedTrainTypes(checkedTrainTypes) {
    return {
        type: ACTION_SET_CHECKED_TRAIN_TYPES,
        value: checkedTrainTypes,
    }
}

export function setDepartStations(departStations) {
    return {
        type: ACTION_SET_DEPART_STATIONS,
        value: departStations,
    };
}

export function setArriveStations(arriveStations) {
    return {
        type: ACTION_SET_ARRIVE_STATIONS,
        value: arriveStations,
    };
}

export function setDepartTimeStart(departTimeStart) {
    return {
        type: ACTION_SET_DEPART_TIME_START,
        value: departTimeStart,
    };
}

export function setArriveTimeStart(arriveTimeStart) {
    return {
        type: ACTION_SET_ARRIVE_TIME_START,
        value: arriveTimeStart,
    };
}

export function setArriveTimeEnd(arriveTimeEnd) {
    return {
        type: ACTION_SET_ARRIVE_TIME_END,
        value: arriveTimeEnd,
    };
}

export function setDepartTimeEnd(departTimeEnd) {
    return {
        type: ACTION_SET_DEPART_TIME_END,
        value: departTimeEnd,
    };
}

export function setCheckedDepartStations(checkedDepartStations) {
    return {
        type: ACTION_SET_CHECKED_DEPART_STATIONS,
        value: checkedDepartStations,
    };
}

export function setCheckedArriveStations(checkedArriveStations) {
    return {
        type: ACTION_SET_CHECKED_ARRIVE_STATIONS,
        value: checkedArriveStations,
    };
}