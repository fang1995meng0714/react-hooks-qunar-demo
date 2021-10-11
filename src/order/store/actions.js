export const ACTION_SET_TRAIN_NUMBER = 'SET_TRAIN_NUMBER';

export function setTrainNumber(trainNumber) {
    return {
        type: ACTION_SET_TRAIN_NUMBER,
        payload: trainNumber
    }
}