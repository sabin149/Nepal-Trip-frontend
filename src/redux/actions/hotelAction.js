import { GLOBALTYPES } from './globalTypes'
import { imageUpload } from '../../utils/imageUpload'
import { getDataAPI, patchDataAPI, postDataAPI } from '../../utils/fetchData'
import axios from 'axios'

export const HOTEL_TYPES = {
    CREATE_HOTEL: "CREATE_HOTEL",
    LOADING_HOTEL: "LOADING_HOTEL",
    GET_HOTELS: "GET_HOTELS",
    APPROVE_HOTEL: "APPROVE_HOTEL",
}

export const createHotel = ({ hotel_name, address, phone, hotel_email, pan_no, price, hotel_images, hotel_info, hotel_facilities, hotel_policies, auth }) => async (dispatch) => {
    let media = []
    try {
        dispatch({ type: GLOBALTYPES.ALERT, payload: { loading: true } })
        if (hotel_images.length > 0) media = await imageUpload(hotel_images)
        const res = await postDataAPI('hotel', { hotel_name, address, phone, hotel_email, pan_no, price, hotel_info, hotel_facilities, hotel_policies, hotel_images: media }, auth.token)
        dispatch({
            type: HOTEL_TYPES.CREATE_HOTEL,
            payload: { ...res.data.newHotel, user: auth.user }
        })
        dispatch({ type: GLOBALTYPES.ALERT, payload: { loading: false } })
        dispatch({
            type: GLOBALTYPES.ALERT,
            payload: {
                success: res.data.msg
            }
        })

    } catch (err) {
        dispatch({
            type: GLOBALTYPES.ALERT,
            payload: { error: err.response.data.msg }
        })
    }
}

export const getHotels = (token) => async (dispatch) => {
    try {

        dispatch({ type: HOTEL_TYPES.LOADING_HOTEL, payload: true })
        const res = await getDataAPI('hotel', token)
        dispatch({
            type: HOTEL_TYPES.GET_HOTELS,
            payload: { ...res.data, page: 2 }
        })

        dispatch({ type: HOTEL_TYPES.LOADING_HOTEL, payload: false })
    } catch (err) {
        dispatch({
            type: GLOBALTYPES.ALERT,
            payload: { error: err.response.data.msg }
        })
    }
}

export const approveHotel = ({ hotel, auth }) => async (dispatch) => {
    try {
        dispatch({ type: HOTEL_TYPES.APPROVE_HOTEL, payload: hotel })
      await patchDataAPI(`approveHotel/${hotel._id}`, auth.token)
       
    } catch (err) {
        dispatch({
            type: GLOBALTYPES.ALERT,
            payload: { error: err.response.data.msg }
        })
    }
}

