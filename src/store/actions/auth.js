import { SAVE_TOKEN, REMOVE_TOKEN, LOADING, ERROR, SET_USER_ID, SET_USER_NAME } from './actionTypes';

export const setToken = accessToken => {
    return {
        type: SAVE_TOKEN,
        accessToken
    };
}

export const removeToken = () => {
    return {
        type: REMOVE_TOKEN,
    };
}

export const setLoading = (isLoading) => {
    return {
        type: LOADING,
        isLoading
    };
}

export const error = error => {
    return {
        type: ERROR,
        error
    };
}

export const setUserId = userId => {
    return {
        type: SET_USER_ID,
        userId
    }
}

export const setUserName = userName => {
    return {
        type: SET_USER_NAME,
        userName
    }
}