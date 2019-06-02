import { SAVE_TOKEN, REMOVE_TOKEN, LOADING, ERROR, SET_USER_ID, SET_USER_NAME } from '../actions/actionTypes';

const initialState = {
    accessToken: '',
    userId: '',
    userName: '',
    loading: true,
    error: null
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SAVE_TOKEN:
            return { ...state, accessToken: action.accessToken };
        case REMOVE_TOKEN:
            return { ...state, accessToken: null };
        case LOADING:
            return { ...state, isLoading: action.isLoading };
        case ERROR:
            return { ...state, error: action.error };
        case SET_USER_ID:
            return { ...state, userId: action.userId };
        case SET_USER_NAME:
            return { ...state, userName: action.userName };
        default:
            return state;
    }
};

export default reducer;