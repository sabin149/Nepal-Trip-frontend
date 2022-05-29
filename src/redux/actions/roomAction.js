import { GLOBALTYPES } from './globalTypes'
import { imageUpload } from '../../utils/imageUpload'
import { postDataAPI } from '../../utils/fetchData'
import { HOTEL_TYPES } from './hotelAction'

export const createHotelRoom = ({ hotel, newRoom, room_images, token }) => async (dispatch) => {

    const rooms = hotel.map(hotel => hotel.rooms)
    const hotelId = hotel.map(hotel => hotel._id)
    const hotelUserId = hotel.map(hotel => hotel.user)

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
        dispatch({ type: GLOBALTYPES.ALERT, payload: { loading: false } })
        dispatch({ type: GLOBALTYPES.ALERT, payload: { success: res.data.msg } })

    } catch (err) {
        dispatch({ type: GLOBALTYPES.ALERT, payload: { error: err.response.data.msg } })
    }
}

