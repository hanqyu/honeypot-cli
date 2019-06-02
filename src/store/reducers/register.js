import { SET_INPUT_DATA, SET_BUTTON_STATUS } from '../actions/actionTypes';

const initialState = {
    inputData: {},
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_INPUT_DATA:
            return { ...state, inputData: action.inputData };
        case SET_BUTTON_STATUS:
            return { ...state, buttonStatus: action.buttonStatus };
        default:
            return state;
    }
};

export default reducer;