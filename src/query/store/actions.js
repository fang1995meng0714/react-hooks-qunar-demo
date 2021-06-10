export const ACTION_SET_FROM = "ACTION_SET_FROM";
export const ACTION_SET_TO = "ACTION_SET_TO";
export const ACTION_SET_DEPART_DATE = 'SET_DEPART_DATE';

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