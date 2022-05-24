
import { GLOBALTYPES } from './globalTypes'
import { imageUpload } from '../../utils/imageUpload'
import { postDataAPI } from '../../utils/fetchData'

export const HOTEL_TYPES = {
    CREATE_HOTEL: "CREATE_HOTEL",
    LOADING_HOTEL: "LOADING_HOTEL",
}


export const createPost = ({ hotel_name,address,phone,hotel_email,pan_number,price,hotel_images,hotel_info,hotel_facilities,hotel_policies,auth}) => async (dispatch) => {
    let media = []
    try {
        dispatch({ type: GLOBALTYPES.ALERT, payload: {loading: true} })
        if(hotel_images.length > 0) media = await imageUpload(hotel_images)
        const res = await postDataAPI('hotel', { hotel_name,address,phone,hotel_email,pan_number,price,hotel_info,hotel_facilities,hotel_policies, hotel_images: media }, auth.token)
        dispatch({ 
            type: HOTEL_TYPES.CREATE_POST, 
            payload: {...res.data.newHotel, user: auth.user} 
        })
        dispatch({ type: GLOBALTYPES.ALERT, payload: {loading: false} })
       
    } catch (err) {
        dispatch({
            type: GLOBALTYPES.ALERT,
            payload: {error: err.response.data.msg}
        })
    }
}


