import { SEARCH_INFO_TYPES } from '../actions/searchInfoAction'

const initialState = {
    loading: false,
    searchInfo: {},
}

const searchInfoReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEARCH_INFO_TYPES.CREATE_SEARCH_INFO:
            return {
                ...state,
                searchInfo: action.payload
            };
        case SEARCH_INFO_TYPES.GET_SEARCH_INFO:
            return {
                ...state,
                searchInfo: action.payload.hotels
            };
        default:
            return state;
        }
    }
    export default searchInfoReducer