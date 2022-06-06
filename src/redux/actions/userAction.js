import { GLOBALTYPES } from './globalTypes'
import { getDataAPI} from '../../utils/fetchData'

export const USER_TYPES={
    LOADING_USER: 'LOADING_USER',
    GET_USERS: "GET_USERS",
}

export const getUsers = (token) => async (dispatch) => {
    try {
        dispatch({ type: USER_TYPES.LOADING_USER, payload: true })
        const res = await getDataAPI('user', token)
        dispatch({
            type: USER_TYPES.GET_USERS,
            payload: { ...res.data, page: 1 }
        })
        dispatch({ type: USER_TYPES.LOADING_USER, payload: false })
    } catch (err) {
        dispatch({
            type: GLOBALTYPES.ALERT,
            payload: { error: err.response.data.msg }
        })
    }
}

