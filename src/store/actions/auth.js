import { GET_TOKEN, SAVE_TOKEN, REMOVE_TOKEN, LOADING, ERROR } from './actionTypes';

export const getToken = () => {
    return {
        type: GET_TOKEN,
    };
}

export const setToken = token => {
    return {
        type: SAVE_TOKEN,
        token
    };
}

export const removeToken = () => {
    return {
        type: REMOVE_TOKEN,
    };
}

export const loading = () => {
    return {
        type: LOADING,
    };
}

export const error = error => {
    return {
        type: ERROR,
        error
    };
}
