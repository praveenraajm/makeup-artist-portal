import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import session from './session';
import user from './user';

const rootReducer = combineReducers({
    form,
    session,
    user
});

export default rootReducer;
