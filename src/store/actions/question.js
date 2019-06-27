import { SET_SELECTED_CATEGORY } from './actionTypes';

export const setSelectedCategory = selectedCategory => {
    return {
        type: SET_SELECTED_CATEGORY,
        selectedCategory
    };
}
