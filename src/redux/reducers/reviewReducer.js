import { EditData } from "../actions/globalTypes";
import { REVIEW_TYPES } from "../actions/reviewAction";
const initialState = {
    loading: false,
    reviews: [],
    count: 0,
    page: 1
}

const reviewReducer = (state = initialState, action) => {
    switch (action.type) {
        case REVIEW_TYPES.CREATE_REVIEW:
            return {
                ...state,
                reviews: [action.payload, ...state.reviews]
            };
        case REVIEW_TYPES.LOADING_REVIEW:
            return {
                ...state,
                loading: action.payload
            };
        case REVIEW_TYPES.GET_REVIEWS:
            return {
                ...state,
                reviews: action.payload.reviews,
                count: action.payload.count,
                page: action.payload.page
            };
        case REVIEW_TYPES.GET_HOTEL_REVIEWS:
            return {
                ...state,
                reviews: action.payload.reviews,
                count: action.payload.count,
                page: action.payload.page
            };
        case REVIEW_TYPES.GET_REVIEW:
            return {
                ...state,
                reviews: action.payload
            };
        case REVIEW_TYPES.UPDATE_REVIEW:
            return {
                ...state,
                reviews: state.reviews.map((review) => {
                    if (review._id === action.payload._id) {
                        return action.payload;
                    }
                    return review;
                }),
            };
        default:
            return state;
    }

}

export default reviewReducer;