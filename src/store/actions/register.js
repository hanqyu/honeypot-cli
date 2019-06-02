import { SET_INPUT_DATA, SET_BUTTON_STATUS } from './actionTypes';

export const setInputData = inputData => {
    return {
        type: SET_INPUT_DATA,
        inputData
    };
}

export const setButtonStatus = buttonStatus => {
    return {
        type: SET_BUTTON_STATUS,
        buttonStatus
    }
}