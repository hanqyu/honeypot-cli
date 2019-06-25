import { SET_VIEWING_QUESTION, } from './actionTypes';

export const setViewingQuetstion = question => {
    return {
        type: SET_VIEWING_QUESTION,
        question
    };
}
