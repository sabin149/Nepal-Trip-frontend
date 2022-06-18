import { combineReducers } from 'redux';
import auth from './authReducer';
import hotel from "./hotelReducer"
import alert from "./alertReducer"
import user from "./userReducer"
import booking from "./bookingReducer"
export default combineReducers({
auth,
hotel,
alert,
user,
booking
});