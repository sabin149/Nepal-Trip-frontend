import { DeleteData, EditData } from "../actions/globalTypes";
import { HOTEL_TYPES } from "../actions/hotelAction";
const initialState = {
    loading: false,
    hotels: [],
    count: 0,
    page: 1
}
const hotelReducer = (state = initialState, action) => {
    switch (action.type) {
        case HOTEL_TYPES.CREATE_HOTEL:
            return {
                ...state,
                hotels: [action.payload, ...state.hotels]
            };
        case HOTEL_TYPES.LOADING_HOTEL:
            return {
                ...state,
                loading: action.payload
            };
        case HOTEL_TYPES.GET_HOTELS:
            return {
                ...state,
                hotels: action.payload.hotels,
                count: action.payload.count,
                page: action.payload.page
            };
        case HOTEL_TYPES.GET_HOTEL:
            return {
                ...state,
                hotels: action.payload
            };

        case HOTEL_TYPES.APPROVE_HOTEL:
            return {
                ...state,
                hotels: EditData(state.hotels, action.payload._id,action.payload),
            };
        case HOTEL_TYPES.UPDATE_HOTEL:
            return {
                ...state,
                hotels: EditData(state.hotels, action.payload._id, action.payload)
            };
        case HOTEL_TYPES.DELETE_HOTEL:
            return {
                ...state,
                hotels: DeleteData(state.hotels, action.payload._id)
            };
        default:
            return state;
    }
}
export default hotelReducer