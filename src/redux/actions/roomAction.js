import { GLOBALTYPES } from './globalTypes'
import { imageUpload } from '../../utils/imageUpload'
import { deleteDataAPI, getDataAPI, patchDataAPI, postDataAPI } from '../../utils/fetchData'
import { HOTEL_TYPES } from './hotelAction'

export const createHotelRoom = ({ hotel, newRoom, room_images,navigate, token }) => async (dispatch) => {
    const rooms = hotel.map(hotel => hotel.rooms)
    const hotelId = hotel.map(hotel => hotel._id)

    const hotelUserId = hotel.map(hotel => hotel.user._id)

    let media = []
    dispatch({ type: GLOBALTYPES.ALERT, payload: { loading: true } })
    if (room_images.length > 0) media = await imageUpload(room_images)

    const newHotel = {
        ...hotel,
        rooms: [
            ...rooms,
            { room_images: media, newRoom }]
    }
    dispatch({ type: HOTEL_TYPES.UPDATE_HOTEL, payload: newHotel })
    try {
        const data = { ...newRoom, room_images: media, hotelUserId, hotelId }
        const res = await postDataAPI('room', data, token)
        const newHotel = { ...hotel, rooms: [...rooms, { ...res.data.newRoom }] }
        dispatch({ type: HOTEL_TYPES.UPDATE_HOTEL, payload: newHotel })
        dispatch({ type: GLOBALTYPES.ALERT, payload: { success: res.data.msg } })
       navigate("/")
    } catch (err) {
        dispatch({ type: GLOBALTYPES.ALERT, payload: { error: err.response.data.msg } })
    }
}

export const getHotelRooms = (hotelId) => async (dispatch) => {
    try {
        dispatch({ type: GLOBALTYPES.ALERT, payload: { loading: true } })
        const res = await getDataAPI(`getHotelRoom/${hotelId}`)
        dispatch({ type: GLOBALTYPES.ALERT, payload: { loading: false } })
        dispatch({ type: HOTEL_TYPES.GET_HOTEL_ROOMS, payload: res.data })
    } catch (err) {
        dispatch({ type: GLOBALTYPES.ALERT, payload: { error: err.response.data.msg } })
    }
}

export const updateHotelRoom = ({ roomData, room_images, roomDetails,navigate, token }) => async (dispatch) => {
    let media = []
    const imgNewUrl = room_images.filter(img => !img.url)
    const imgOldUrl = room_images.filter(img => img.url)

    if (roomData.room_type === roomDetails.room_type
        && roomData.room_price === roomDetails.room_price
        && roomData.room_options === roomDetails.room_options
        && roomData.room_facilities === roomDetails.room_facilities
        && imgNewUrl.length === 0
        && imgOldUrl.length === roomDetails.room_images.length
    ) return;
    try {

        dispatch({ type: GLOBALTYPES.ALERT, payload: { loading: true } })
        if (room_images.length > 0) media = await imageUpload(imgNewUrl)

        const res = await patchDataAPI(`room/${roomDetails._id}`, {
            room_options: roomData.room_options,
            room_facilities: roomData.room_facilities,
            room_type: roomData.room_type,
            room_price: roomData.room_price,
            room_images: [...imgOldUrl, ...media],
        }, token)

        dispatch({ type: GLOBALTYPES.ALERT, payload: { success: res.data.msg } })
        dispatch({ type: HOTEL_TYPES.UPDATE_HOTEL, payload: res.data.newRoom })
        navigate('/viewHotel')



    } catch (error) {
        dispatch({ type: GLOBALTYPES.ALERT, payload: { error: error.response.data.msg } })
    }

}


export const deleteHotelRoom = ({ room, token }) => async (dispatch) => {
    dispatch({ type: HOTEL_TYPES.UPDATE_HOTEL, payload: room })
    try {
        dispatch({ type: GLOBALTYPES.ALERT, payload: { loading: true } })
        const res = await deleteDataAPI(`room/${room._id}`, token)

        dispatch({ type: GLOBALTYPES.ALERT, payload: { success: res.data.msg } })
    } catch (error) {
        dispatch({ type: GLOBALTYPES.ALERT, payload: { error: error.response.data.msg } })
    }



}










