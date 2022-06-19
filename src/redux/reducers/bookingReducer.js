import { BOOKING_TYPES } from "../actions/bookingAction";
import { EditData } from "../actions/globalTypes";
const initialState = {
  loading: false,
  bookings: [],
  count: 0,
  page: 1,
};
const bookingReducer = (state = initialState, action) => {
  switch (action.type) {
    case BOOKING_TYPES.CREATE_BOOKING:
      return {
        ...state,
        bookings: [action.payload, ...state.bookings],
      };
    case BOOKING_TYPES.LOADING_BOOKING:
      return {
        ...state,
        loading: action.payload,
      };
    case BOOKING_TYPES.GET_BOOKINGS:
      return {
        ...state,
        bookings: action.payload.bookings,
        count: action.payload.count,
        page: action.payload.page,
      };
    case BOOKING_TYPES.GET_BOOKING:
      return {
        ...state,
        bookings: action.payload,
      };
    case BOOKING_TYPES.UPDATE_BOOKING:
      return {
        ...state,
        bookings: EditData(state.bookings, action.payload._id, action.payload),
      };
    default:
      return state;
  }
};
export default bookingReducer;
