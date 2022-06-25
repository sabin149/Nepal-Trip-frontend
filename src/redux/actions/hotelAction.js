import { GLOBALTYPES } from './globalTypes'
import { imageUpload } from '../../utils/imageUpload'
import { deleteDataAPI, getDataAPI, patchDataAPI, postDataAPI } from '../../utils/fetchData'

export const HOTEL_TYPES = {
    CREATE_HOTEL: "CREATE_HOTEL",
    LOADING_HOTEL: "LOADING_HOTEL",
    GET_HOTELS: "GET_HOTELS",
    GET_HOTEL: "GET_HOTEL",
    UPDATE_HOTEL: "UPDATE_HOTEL",
    APPROVE_HOTEL: "APPROVE_HOTEL",
    GET_HOTEL_ROOMS: "GET_HOTEL_ROOMS",
    DELETE_HOTEL: "DELETE_HOTEL",
}

export const createHotel = ({ hotel_name, rating, address, phone, hotel_email, pan_no, price, hotel_images, hotel_info, hotel_facilities, hotel_policies, navigate, token }) => async (dispatch) => {
    let media = []
    try {

        dispatch({ type: GLOBALTYPES.ALERT, payload: { loading: true } })
        if (hotel_images.length > 0) media = await imageUpload(hotel_images)
        const res = await postDataAPI('hotel', { hotel_name, rating, address, phone, hotel_email, pan_no, price, hotel_info, hotel_facilities, hotel_policies, hotel_images: media }, token)
        dispatch({
            type: HOTEL_TYPES.CREATE_HOTEL,
            payload: { ...res.data.newHotel, }
        })

        dispatch({
            type: GLOBALTYPES.ALERT,
            payload: {
                success: res.data.msg
            }
        })
        navigate('/viewHotel')

    } catch (err) {
        dispatch({
            type: GLOBALTYPES.ALERT,
            payload: { error: err.response.data.msg }
        })
    }
}

export const getHotels = () => async (dispatch) => {
    try {
        dispatch({ type: HOTEL_TYPES.LOADING_HOTEL, payload: true })
        const res = await getDataAPI('hotel')
        dispatch({
            type: HOTEL_TYPES.GET_HOTELS,
            payload: { ...res.data, page: 1, count: res.data.count }
        })

        dispatch({ type: HOTEL_TYPES.LOADING_HOTEL, payload: false })
    } catch (err) {
        dispatch({
            type: GLOBALTYPES.ALERT,
            payload: { error: err.response.data.msg }
        })
    }
}

export const getHotel = ({ id }) => async (dispatch) => {
    try {
        dispatch({ type: HOTEL_TYPES.LOADING_HOTEL, payload: true })
        const res = await getDataAPI(`hotel/${id}`)
        dispatch({
            type: HOTEL_TYPES.GET_HOTEL,
            payload: res.data.hotel
        })
        dispatch({ type: HOTEL_TYPES.LOADING_HOTEL, payload: false })

    } catch (error) {
        dispatch({
            type: GLOBALTYPES.ALERT,
            payload: { error: error.response.data.msg }
        })
    }
}

export const approveHotel = ({ hotel, token }) => async (dispatch) => {
    try {
        dispatch({ type: GLOBALTYPES.ALERT, payload: { loading: true } })
        const res = await patchDataAPI(`approveHotel/${hotel._id}`, token)
        dispatch({ type: HOTEL_TYPES.APPROVE_HOTEL, payload: res.data.newHotel })

        dispatch({
            type: GLOBALTYPES.ALERT,
            payload: { success: res.data.msg }
        })
    } catch (err) {
        dispatch({
            type: GLOBALTYPES.ALERT,
            payload: { error: err.response.data.msg }
        })
    }
}

export const updateHotel = ({ hotelData, hotel_images, navigate, token, hotelDetails }) => async (dispatch) => {

    let media = []
    const imgNewUrl = hotel_images.filter(img => !img.url)
    const imgOldUrl = hotel_images.filter(img => img.url)

    if (hotelData.hotel_name === hotelDetails.hotel_name && hotelData.rating === hotelDetails.rating && hotelData.address === hotelDetails.address && hotelData.phone === hotelDetails.phone && hotelData.hotel_email === hotelDetails.hotel_email && hotelData.pan_no === hotelDetails.pan_no && hotelData.price === hotelDetails.price && hotelData.hotel_info === hotelDetails.hotel_info && hotelData.hotel_facilities === hotelDetails.hotel_facilities && hotelData.hotel_policies === hotelDetails.hotel_policies
        && imgNewUrl.length === 0
        && imgOldUrl.length === hotelDetails.hotel_images.length
    ) return;


    try {
        dispatch({ type: GLOBALTYPES.ALERT, payload: { loading: true } })
        if (imgNewUrl.length > 0) media = await imageUpload(imgNewUrl)

        const res = await patchDataAPI(`hotel/${hotelDetails._id}`, {
            hotel_name: hotelData.hotel_name,
            rating: hotelData.rating,
            address: hotelData.address,
            phone: hotelData.phone,
            hotel_email: hotelData.hotel_email,
            pan_no: hotelData.pan_no,
            price: hotelData.price,
            hotel_info: hotelData.hotel_info,
            hotel_facilities: hotelData.hotel_facilities,
            hotel_policies: hotelData.hotel_policies, hotel_images: [...imgOldUrl, ...media]
        }, token)

        dispatch({ type: HOTEL_TYPES.UPDATE_HOTEL, payload: res.data.newHotel })
        dispatch({ type: GLOBALTYPES.ALERT, payload: { success: res.data.msg } })
        navigate('/viewHotel');

    } catch (err) {
        dispatch({
            type: GLOBALTYPES.ALERT,
            payload: { error: err.response.data.msg }
        })
    }
}

export const deleteHotel = ({ hotel, token }) => async (dispatch) => {
    dispatch({ type: GLOBALTYPES.ALERT, payload: { loading: true } })
    dispatch({ type: HOTEL_TYPES.DELETE_HOTEL, payload: hotel })

    try {
        const res = await deleteDataAPI(`hotel/${hotel._id}`, token)
        dispatch({ type: GLOBALTYPES.ALERT, payload: { success: res.data.msg } })
    } catch (error) {
        dispatch({
            type: GLOBALTYPES.ALERT,
            payload: { error: error.response.data.msg }
        })

    }

}


