import { createStore, combineReducers, compose } from 'redux';

import authReducer from './reducers/auth';
import registerReducer from './reducers/register';
import answerReducer from './reducers/answer';

const rootReducer = combineReducers({
    auth : authReducer,
    register: registerReducer,
    answer: answerReducer,
});

let composeEnhancers = compose;

const configureStore = () => {
    return createStore(rootReducer, composeEnhancers());
}

export default configureStore;