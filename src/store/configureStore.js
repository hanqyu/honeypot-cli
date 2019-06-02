import { createStore, combineReducers, compose } from 'redux';

import authReducer from './reducers/auth';
import registerReducer from './reducers/register';

const rootReducer = combineReducers({
    auth : authReducer,
    register: registerReducer,
});

let composeEnhancers = compose;

const configureStore = () => {
    return createStore(rootReducer, composeEnhancers());
}

export default configureStore;