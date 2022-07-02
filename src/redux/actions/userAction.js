import { GLOBALTYPES } from './globalTypes'

import { deleteDataAPI, getDataAPI, patchDataAPI, postDataAPI } from '../../utils/fetchData'
import { imageUpload } from "../../utils/imageUpload"

export const USER_TYPES = {
    LOADING_USER: 'LOADING_USER',
    GET_USERS: "GET_USERS",
    GET_USER: "GET_USER",
    UPDATE_USER: "UPDATE_USER",
    UPDATE_ROLE: "UPDATE_ROLE",
    DELETE_USER: "DELETE_USER",
}

export const getUsers = () => async (dispatch) => {
    try {
        dispatch({ type: USER_TYPES.LOADING_USER, payload: true })
        const res = await getDataAPI('user')
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
export const getUser = ({id,token}) => async (dispatch) => {
    try {
        dispatch({ type: USER_TYPES.LOADING_USER, payload: true })
        const res = await getDataAPI(`user/${id}`, token)
        dispatch({
            type: USER_TYPES.GET_USER,
            payload: res.data.user
        })
        dispatch({ type: USER_TYPES.LOADING_USER, payload: false })
        
    } catch (error) {
        dispatch({
            type: GLOBALTYPES.ALERT,
            payload: { error: error.response.data.msg }
        })
    }
}

export const updateAdminUser = ({ userData, id, avatar, token, defaultAvatar }) => async (dispatch) => {
    if (!userData.fullname) return dispatch({
        type: GLOBALTYPES.ALERT,
        payload: { error: 'Please add your full name.' }
    })
    if (userData.fullname.length > 50) return dispatch({
        type: GLOBALTYPES.ALERT,
        payload: { error: 'Full name is too long.' }
    })
    if (!userData.phone) return dispatch({
        type: GLOBALTYPES.ALERT,
        payload: { error: 'Please add your phone number.' }
    })
    if (userData.phone.length > 10 || userData.phone.length < 10) return dispatch({
        type: GLOBALTYPES.ALERT,
        payload: { error: 'Phone number must be 10 numbers.' }
    })
    if (!userData.address) return dispatch({
        type: GLOBALTYPES.ALERT,
        payload: { error: 'Please add your address.' }
    })
    if (!userData.email) return dispatch({
        type: GLOBALTYPES.ALERT,
        payload: { error: 'Please add your email.' }
    })
    if (!userData.email.includes('@')) return dispatch({
        type: GLOBALTYPES.ALERT,
        payload: { error: 'Email is invalid.' }

    })
    if (!userData.email.includes('.')) return dispatch({
        type: GLOBALTYPES.ALERT,
        payload: { error: 'Email is invalid.' }

    })
    if (!userData.email.includes('gmail')) return dispatch({
        type: GLOBALTYPES.ALERT,
        payload: { error: 'Email is invalid.' }

    })
    try {
        let media;
        dispatch({ type: GLOBALTYPES.ALERT, payload: { loading: true } })

        if (avatar) media = await imageUpload([avatar])

        const res = await patchDataAPI(`updateuser/${id}`, {
            ...userData,
            avatar: avatar ? media[0].url : defaultAvatar
        }, token)

        dispatch({ type: GLOBALTYPES.ALERT, payload: { success: res.data.msg } })
    } catch (err) {
        dispatch({
            type: GLOBALTYPES.ALERT,
            payload: { error: err.response.data.msg }
        })
    }
}

export const changeUserRole = ({ user, role, token }) => async (dispatch) => {
    try {
        dispatch({ type: GLOBALTYPES.ALERT, payload: { loading: true } })
        const res = await patchDataAPI(`user/${user._id}`, { ...role }, token)
        dispatch({ type: USER_TYPES.UPDATE_ROLE, payload: res.data.newUser })

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
export const deleteUser = ({ token, user }) => async (dispatch) => {
    dispatch({ type: USER_TYPES.DELETE_USER, payload: user })

    try {
        dispatch({ type: GLOBALTYPES.ALERT, payload: { loading: true } })
        const res = await deleteDataAPI(`user/${user._id}`, token)

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
export const changePassword = ({ old_password, password, password_confirmation, token }) => async (dispatch) => {
    try {
        dispatch({ type: GLOBALTYPES.ALERT, payload: { loading: true } })
        const res = await postDataAPI(`changepassword`, { old_password, password, password_confirmation }, token)
        dispatch({ type: GLOBALTYPES.ALERT, payload: { success: res.data.msg } })
    } catch (err) {
        dispatch({
            type: GLOBALTYPES.ALERT,
            payload: { error: err.response.data.msg }
        })
    }
}

export const sendResetPasswordEmail = ({ email }) => async (dispatch) => {
    try {
        dispatch({ type: GLOBALTYPES.ALERT, payload: { loading: true } })
        const res = await postDataAPI(`send-reset-password-email`, { email })
        dispatch({ type: GLOBALTYPES.ALERT, payload: { success: res.data.msg } })
        
    } catch (error) {
        dispatch({
            type: GLOBALTYPES.ALERT,
            payload: { error: error.response.data.msg }
        })
        
    }
}

export  const resetPassword = ({password, password_confirmation,id,token }) => async (dispatch) => {
    try {
        dispatch({ type: GLOBALTYPES.ALERT, payload: { loading: true } })
        const res = await postDataAPI(`reset-password/${id}/${token}`, { password, password_confirmation })
        dispatch({ type: GLOBALTYPES.ALERT, payload: { success: res.data.msg } })
    } catch (error) {
        dispatch({
            type: GLOBALTYPES.ALERT,
            payload: { error: error.response.data.msg }
        })
    }
}

export const updateUserProfile = ({ userData, id, avatar, token, defaultAvatar }) => async (dispatch) => {
    if (!userData.fullname) return dispatch({
        type: GLOBALTYPES.ALERT,
        payload: { error: 'Please add your full name.' }
    })
    if (userData.fullname.length > 50) return dispatch({
        type: GLOBALTYPES.ALERT,
        payload: { error: 'Full name is too long.' }
    })
    if (!userData.phone) return dispatch({
        type: GLOBALTYPES.ALERT,
        payload: { error: 'Please add your phone number.' }
    })
    if (userData.phone.length > 10 || userData.phone.length < 10) return dispatch({
        type: GLOBALTYPES.ALERT,
        payload: { error: 'Phone number must be 10 numbers.' }
    })
    if (!userData.address) return dispatch({
        type: GLOBALTYPES.ALERT,
        payload: { error: 'Please add your address.' }
    })
    if (!userData.email) return dispatch({
        type: GLOBALTYPES.ALERT,
        payload: { error: 'Please add your email.' }
    })
    if (!userData.email.includes('@')) return dispatch({
        type: GLOBALTYPES.ALERT,
        payload: { error: 'Email is invalid.' }

    })
    if (!userData.email.includes('.')) return dispatch({
        type: GLOBALTYPES.ALERT,
        payload: { error: 'Email is invalid.' }

    })
    if (!userData.email.includes('gmail')) return dispatch({
        type: GLOBALTYPES.ALERT,
        payload: { error: 'Email is invalid.' }

    })
    try {
        let media;
        dispatch({ type: GLOBALTYPES.ALERT, payload: { loading: true } })

        if (avatar) media = await imageUpload([avatar])

        const res = await patchDataAPI(`user/${id}`, {
            ...userData,
            avatar: avatar ? media[0].url : defaultAvatar
        }, token)

        dispatch({ type: GLOBALTYPES.ALERT, payload: { success: res.data.msg } })
    } catch (err) {
        dispatch({
            type: GLOBALTYPES.ALERT,
            payload: { error: err.response.data.msg }
        })
    }
}