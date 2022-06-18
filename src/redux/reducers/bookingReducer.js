import { BOOKING_TYPES } from "../actions/bookingAction";
const initialState = {
    loading: false,
    bookings: [],
    count: 0,
    page: 1
}
const bookingReducer = (state = initialState, action) => {
    switch (action.type) {
        case BOOKING_TYPES.CREATE_BOOKING:
            return {
                ...state,
                bookings: [action.payload, ...state.bookings]
            };
        case BOOKING_TYPES.LOADING_BOOKING:
            return {
                ...state,
                loading: action.payload
            };
        default:
            return state;
    };
}
export default bookingReducer;