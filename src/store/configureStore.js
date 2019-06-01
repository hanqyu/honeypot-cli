import { createStore, combineReducers, compose } from 'redux';

import authReducer from './reducers/auth';

const rootReducer = combineReducers({
    auth : authReducer,
});

let composeEnhancers = compose;

const configureStore = () => {
    return createStore(rootReducer, composeEnhancers());
}

export default configureStore;