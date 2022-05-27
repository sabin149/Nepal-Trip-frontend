import { PatchData } from "../actions/globalTypes";
import { HOTEL_TYPES } from "../actions/hotelAction";
const initialState = {
    loading: false,
    hotels: [],
    count: 0,
    page: 2
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
        case HOTEL_TYPES.APPROVE_HOTEL:
            return {
                ...state,
                hotels: state.hotels.map(hotel => {
                    if (hotel._id === action.payload._id) {
                        return action.payload
                    }
                    return hotel
                })
            };
        default:
            return state;
    }
}
export default hotelReducer