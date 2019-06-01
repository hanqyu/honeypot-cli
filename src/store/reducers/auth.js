import { GET_TOKEN, SAVE_TOKEN, REMOVE_TOKEN, LOADING, ERROR } from '../actions/actionTypes';

const initialState = {
    token: {},
    loading: true,
    error: null
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_TOKEN:
            return { ...state, token: action.token };
        case SAVE_TOKEN:
            return { ...state, token: action.token };
        case REMOVE_TOKEN:
            return { ...state, token: action.token };
        case LOADING:
            return { ...state, loading: action.isLoading };
        case ERROR:
            return { ...state, error: action.error };
        default:
            return state;
    }
};

export default reducer;