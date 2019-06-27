import { SET_SELECTED_CATEGORY, SET_SELECTED_CATEGORY_NAME } from './actionTypes';

export const setSelectedCategory = selectedCategory => {
    return {
        type: SET_SELECTED_CATEGORY,
        selectedCategory
    };
}

export const setSelectedCategoryName = selectedCategoryName => {
    return {
        type: SET_SELECTED_CATEGORY_NAME,
        selectedCategoryName
    };
}
