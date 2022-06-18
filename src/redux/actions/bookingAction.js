import { GLOBALTYPES } from "./globalTypes";
import { postDataAPI } from "../../utils/fetchData";
export const BOOKING_TYPES = {
    CREATE_BOOKING: "CREATE_BOOKING",
    LOADING_BOOKING: "LOADING_BOOKING"
}
export const createBooking = ({ booking, token }) => async (dispatch) => {
    try {
        dispatch({ type: GLOBALTYPES.ALERT, payload: { loading: true } })
        const res = await postDataAPI('booking', { booking }, token)
        dispatch({
            type: BOOKING_TYPES.CREATE_BOOKING,
            payload: { ...res.data.booking }
        })
        dispatch({ type: GLOBALTYPES.ALERT, payload: { loading: false } })
        dispatch({ type: GLOBALTYPES.ALERT, payload: { success: res.data.msg } })
    } catch (error) {
        dispatch({
            type: GLOBALTYPES.ALERT,
            payload: { error: error.response.data.msg }
        })
    }}