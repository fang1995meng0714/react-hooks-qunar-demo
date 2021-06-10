export const ACTION_SET_FROM = "ACTION_SET_FROM";
export const ACTION_SET_TO = "ACTION_SET_TO";

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