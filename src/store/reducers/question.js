import { SET_SELECTED_CATEGORY, SET_SELECTED_CATEGORY_NAME } from '../actions/actionTypes';

const initialState = {
    selectedCategory: null,
    selectedCategoryName: ''
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_SELECTED_CATEGORY:
            return { ...state, selectedCategory: action.selectedCategory };
        case SET_SELECTED_CATEGORY_NAME:
            return { ...state, selectedCategoryName: action.selectedCategoryName }
        default:
            return state;
    }
};

export default reducer;