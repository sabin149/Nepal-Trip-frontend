import { HOTEL_TYPES } from "../actions/hotelAction";
const initialState = {
    loading: false,
    posts: [],
    result: 0,
    page: 2
}
const hotelReducer = (state = initialState, action) => {
    switch (action.type){
        case HOTEL_TYPES.CREATE_HOTEL:
            return {
                ...state,
                posts: [action.payload, ...state.posts]
            };
        case HOTEL_TYPES.LOADING_HOTEL:
            return {
                ...state,
                loading: action.payload
            };
        
        default:
            return state;
    }
}
export default hotelReducer