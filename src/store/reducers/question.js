import { SET_SELECTED_CATEGORY } from '../actions/actionTypes';

const initialState = {
    selectedCategory = NaN
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_SELECTED_CATEGORY:
            return { ...state, selectedCategory: action.selectedCategory };
        default:
            return state;
    }
};

export default reducer;