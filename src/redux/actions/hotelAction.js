import { GLOBALTYPES } from './globalTypes'
import { imageUpload } from '../../utils/imageUpload'
import { deleteDataAPI, getDataAPI, patchDataAPI, postDataAPI } from '../../utils/fetchData'

export const HOTEL_TYPES = {
    CREATE_HOTEL: "CREATE_HOTEL",
    LOADING_HOTEL: "LOADING_HOTEL",
    GET_HOTELS: "GET_HOTELS",
    UPDATE_HOTEL: "UPDATE_HOTEL",
    APPROVE_HOTEL: "APPROVE_HOTEL",
    GET_HOTEL_ROOMS: "GET_HOTEL_ROOMS",
    DELETE_HOTEL: "DELETE_HOTEL",
}

export const createHotel = ({ hotel_name, address, phone, hotel_email, pan_no, price, hotel_images, hotel_info, hotel_facilities, hotel_policies, auth, token }) => async (dispatch) => {
    let media = []
    try {
        dispatch({ type: GLOBALTYPES.ALERT, payload: { loading: true } })
        if (hotel_images.length > 0) media = await imageUpload(hotel_images)
        const res = await postDataAPI('hotel', { hotel_name, address, phone, hotel_email, pan_no, price, hotel_info, hotel_facilities, hotel_policies, hotel_images: media }, token)
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

export const updateHotel = ({hotelData, hotel_images,token ,status}) => async (dispatch) => {
    
    let media = []
    const imgNewUrl = hotel_images.filter(img => !img.url)
    const imgOldUrl = hotel_images.filter(img => img.url)

    if (status.hotelData === hotelData
        && imgNewUrl.length === 0
        && imgOldUrl.length === status.images.length
    ) return;
    try {
        dispatch({ type: GLOBALTYPES.ALERT, payload: { loading: true } })
        if (imgNewUrl.length > 0) media = await imageUpload(imgNewUrl)

        const res = await patchDataAPI(`hotel/${status._id}`, {
            hotelData, images: [...imgOldUrl, ...media]
        }, token)

        dispatch({ type: HOTEL_TYPES.UPDATE_HOTEL, payload: res.data.newHotel })

        dispatch({ type: GLOBALTYPES.ALERT, payload: { success: res.data.msg } })

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
    const res=await deleteDataAPI(`hotel/${hotel._id}`,token)
    dispatch({ type: GLOBALTYPES.ALERT, payload: { success: res.data.msg } })
} catch (error) {
    dispatch({
        type: GLOBALTYPES.ALERT,
        payload: { error: error.response.data.msg }
    })
    
}

}


