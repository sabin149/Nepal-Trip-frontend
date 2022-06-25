import { getDataAPI, patchDataAPI, postDataAPI } from '../../utils/fetchData'
import { GLOBALTYPES } from './globalTypes'
import { HOTEL_TYPES } from './hotelAction'

export const REVIEW_TYPES = {
    CREATE_REVIEW: "CREATE_REVIEW",
    LOADING_REVIEW: "LOADING_REVIEW",
    GET_REVIEWS: "GET_REVIEWS",
    GET_REVIEW: "GET_REVIEW",
    GET_HOTEL_REVIEWS: "GET_HOTEL_REVIEWS",
}

export const createRating = ({ hotel, user, newRating, token }) => async (dispatch) => {
    const newHotel = { ...hotel, reviews: [...hotel.hotel_reviews,] }
    dispatch({ type: HOTEL_TYPES.UPDATE_HOTEL, payload: newHotel })
    try {
        const data = { ...newRating, hotelId: hotel._id, hotelUserId: hotel.user._id }
        const res = await patchDataAPI('rating', data, token)

        const newData = { ...res.data.newRating, user }
        const newHotel = { ...hotel, reviews: [...hotel.hotel_reviews, newData] }
        dispatch({ type: HOTEL_TYPES.UPDATE_HOTEL, payload: newHotel })

    } catch (err) {
        dispatch({
            type: GLOBALTYPES.ALERT,
            payload: { error: err.response.data.msg }
        })
    }
}

export const createReview = ({ hotel, user, newReview, token }) => async (dispatch) => {
    try {
        const data = { ...newReview, hotelId: hotel._id, hotelUserId: hotel.user._id }

        const res = await postDataAPI('review', data, token)
        dispatch({
            type: GLOBALTYPES.ALERT,
            payload: {
                success: res.data.msg
            }
        })

    } catch (err) {
        console.log(err)
        dispatch({
            type: GLOBALTYPES.ALERT,
            payload: { error: err.response.data.msg }
        })
    }
}

export const getReviews = ({ token }) => async (dispatch) => {
    try {
        dispatch({ type: REVIEW_TYPES.LOADING_REVIEW, payload: true })
        const res = await getDataAPI('review', token)
        dispatch({
            type: REVIEW_TYPES.GET_REVIEWS,
            payload: { ...res.data, page: 1, count: res.data.count }
        })
    } catch (err) {
        dispatch({ type: GLOBALTYPES.ALERT, payload: { error: err.response.data.msg } })
    }
}
export const getHotelReviews = ({ hotel }) => async (dispatch) => {
    try {
        const res = await getDataAPI(`review/${hotel._id}`)
        const newHotel = {...hotel,  reviews: res.data.reviews }
        dispatch({ type: REVIEW_TYPES.GET_HOTEL_REVIEWS, payload: newHotel })
    } catch (err) {
        console.log(err)
        dispatch({ type: GLOBALTYPES.ALERT, payload: { error: err.response.data.msg } })
    }
}