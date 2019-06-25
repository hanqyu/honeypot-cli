import { SET_VIEWING_QUESTION } from '../actions/actionTypes';

const initialState = {
    question: {},
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_VIEWING_QUESTION:
            return { ...state, question: action.question };
        default:
            return state;
    }
};

export default reducer;