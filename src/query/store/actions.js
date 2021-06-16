export const ORDER_DEPART = 1;
export const ORDER_DURATION = 2;
export const ACTION_SET_FROM = "ACTION_SET_FROM";
export const ACTION_SET_TO = "ACTION_SET_TO";
export const ACTION_SET_DEPART_DATE = 'SET_DEPART_DATE';
export const ACTION_SET_ORDER_TYPE = 'SET_ORDER_TYPE';
export const ACTION_SET_TRAIN_LIST = 'SET_TRAIN_LIST';
export const ACTION_SET_HIGH_SPEED = 'SET_HIGH_SPEED';

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