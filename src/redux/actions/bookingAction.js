import { GLOBALTYPES } from "./globalTypes";
import { postDataAPI, getDataAPI, patchDataAPI, deleteDataAPI } from "../../utils/fetchData";

export const BOOKING_TYPES = {
    CREATE_BOOKING: "CREATE_BOOKING",
    LOADING_BOOKING: "LOADING_BOOKING",
    GET_BOOKINGS: "GET_BOOKINGS",
    GET_BOOKING: "GET_BOOKING",
    GET_HOTEL_BOOKINGS: "GET_HOTEL_BOOKINGS",
    UPDATE_BOOKING: "UPDATE_BOOKING",
    DELETE_BOOKING: "DELETE_BOOKING",

}

export const createBooking = (booking,navigate,token) => async (dispatch) => {

    try {
        dispatch({ type: GLOBALTYPES.ALERT, payload: { loading: true } })
        const res = await postDataAPI('booking', booking, token)
        dispatch({
            type: BOOKING_TYPES.CREATE_BOOKING,
            payload: { ...res.data.booking }
        })
        dispatch({
            type: GLOBALTYPES.ALERT, payload: {
                success: res.data.msg
            }
        })
        navigate('/bookings')
        
    } catch (error) {
        dispatch({
            type: GLOBALTYPES.ALERT,
            payload: { error: error.response.data.msg }
        })
    }
}
export const getBookings = ({ token }) => async (dispatch) => {
    try {
        dispatch({ type: BOOKING_TYPES.LOADING_BOOKING, payload: true })
        const res = await getDataAPI('booking', token)
        dispatch({
            type: BOOKING_TYPES.GET_BOOKINGS,
            payload: { ...res.data, page: 1, count: res.data.count }
        })
        dispatch({ type: BOOKING_TYPES.LOADING_BOOKING, payload: false })
    } catch (err) {
        dispatch({
            type: GLOBALTYPES.ALERT,
            payload: { error: err.response.data.msg }
        })
    }
}
export const getBooking = ({ id, token }) => async (dispatch) => {
    try {
        dispatch({ type: BOOKING_TYPES.LOADING_BOOKING, payload: true })
        const res = await getDataAPI(`booking/${id}`, token)
        dispatch({
            type: BOOKING_TYPES.GET_BOOKING,
            payload: res.data.booking
        })
        dispatch({ type: BOOKING_TYPES.LOADING_BOOKING, payload: false })
    } catch (error) {
        dispatch({
            type: GLOBALTYPES.ALERT,
            payload: { error: error.response.data.msg }
        })
    }
}
export const updateBooking = ({ booking,navigate, token }) => async (dispatch) => {
    try {
        dispatch({ type: GLOBALTYPES.ALERT, payload: { loading: true } })
        const res = await patchDataAPI(`booking/${booking.id}`, booking , token)
        dispatch({
            type: BOOKING_TYPES.UPDATE_BOOKING,
            payload: { ...res.data.booking }
        })
        dispatch({ type: GLOBALTYPES.ALERT, payload: { success: res.data.msg } })

    } catch (error) {
        dispatch({
            type: GLOBALTYPES.ALERT,
            payload: { error: error.response.data.msg }
        })
    }
}
export const getBookingsByHotel = ({ hotelId, token }) => async (dispatch) => {
    try {
        dispatch({ type: BOOKING_TYPES.LOADING_BOOKING, payload: true })
        const res = await getDataAPI(`hotelbooking/${hotelId}`, token)
        dispatch({
            type: BOOKING_TYPES.GET_HOTEL_BOOKINGS,
            payload: { ...res.data, page: 1, count: res.data.count }
        })
        dispatch({ type: BOOKING_TYPES.LOADING_BOOKING, payload: false })
    } catch (err) {
        dispatch({
            type: GLOBALTYPES.ALERT,
            payload: { error: err.response.data.msg }
        })
    }
}
export const cancelBooking = ({ id, token }) => async (dispatch) => {
    try {
        dispatch({ type: GLOBALTYPES.ALERT, payload: { loading: true } })
        const res = await deleteDataAPI(`booking/${id}`,  token)
        dispatch({
            type: BOOKING_TYPES.DELETE_BOOKING,
            payload: { ...res.data.booking }
        })
        dispatch({ type: GLOBALTYPES.ALERT, payload: { loading: false } })
        dispatch({ type: GLOBALTYPES.ALERT, payload: { success: res.data.msg } })
    } catch (error) {
        dispatch({
            type: GLOBALTYPES.ALERT,
            payload: { error: error.response.data.msg }
        })
    }
}