import { combineReducers } from 'redux';
import auth from './authReducer';
import hotel from "./hotelReducer"
import alert from "./alertReducer"
import user from "./userReducer"
import searchInfo from "./searchInfoReducer"
import booking from "./bookingReducer"
import review from "./reviewReducer"

export default combineReducers({
auth,
hotel,
alert,
user,
searchInfo,
booking,
review
});