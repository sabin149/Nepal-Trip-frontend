import { combineReducers } from 'redux';
import auth from './authReducer';
import hotel from "./hotelReducer"
import alert from "./alertReducer"
export default combineReducers({
auth,
hotel,
alert
});