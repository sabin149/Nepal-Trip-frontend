import { patchDataAPI } from '../../utils/fetchData'
import { GLOBALTYPES } from './globalTypes'
import { HOTEL_TYPES } from './hotelAction'

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
    const newHotel = { ...hotel, reviews: [...hotel.hotel_reviews,] }
    dispatch({ type: HOTEL_TYPES.UPDATE_HOTEL, payload: newHotel })
    try {
        const data = { ...newReview, hotelId: hotel._id, hotelUserId: hotel.user._id }
        const res = await patchDataAPI('rating', data, token)

        const newData = { ...res.data.newReview, user }
        const newHotel = { ...hotel, reviews: [...hotel.hotel_reviews, newData] }
        dispatch({ type: HOTEL_TYPES.UPDATE_HOTEL, payload: newHotel })

    } catch (err) {
        dispatch({
            type: GLOBALTYPES.ALERT,
            payload: { error: err.response.data.msg }
        })
    }
}