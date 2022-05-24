import { combineReducers } from 'redux';
import auth from './authReducer';
import hotel from "./hotelReducer"
export default combineReducers({
auth,
hotel
});