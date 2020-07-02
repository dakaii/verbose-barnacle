import { combineReducers } from 'redux';
import auth from './authReducer';
import org from './orgReducer';

export default combineReducers({
    auth,
    org,
});
