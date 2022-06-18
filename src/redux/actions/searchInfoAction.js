import { GLOBALTYPES } from "./globalTypes"

export const SEARCH_INFO_TYPES={
    CREATE_SEARCH_INFO: 'CREATE_SEARCH_INFO',
    GET_SEARCH_INFO: 'GET_SEARCH_INFO',
}

export const createSearchInfo = ({searchInfo}) => async (dispatch) => {
    try {
        dispatch({ type: SEARCH_INFO_TYPES.CREATE_SEARCH_INFO, payload: searchInfo })
    } catch (error) {
        dispatch({
            type: GLOBALTYPES.ALERT,
            payload: { error: error.response.data.msg }
        })
    }
}
