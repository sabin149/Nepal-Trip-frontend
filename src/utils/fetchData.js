import axios from 'axios'
export const getDataAPI = async (url, token) => {
    const res = await axios.get(`/api/${url}`, {
        headers: { Authorization: token}
    })
    return res;
}
export const postDataAPI = async (url, hotel, token) => {
    const res = await axios.post(`/api/${url}`, hotel, {
        headers: { Authorization: token}
    })
    return res;
}
export const putDataAPI = async (url, hotel, token) => {
    const res = await axios.put(`/api/${url}`, hotel, {
        headers: { Authorization: token}
    })
    return res;
}
export const patchDataAPI = async (url, hotel, token) => {
    const res = await axios.patch(`/api/${url}`, hotel, {
        headers: { Authorization: token}
    })
    return res;
}
export const deleteDataAPI = async (url, token) => {
    const res = await axios.delete(`/api/${url}`, {
        headers: { Authorization: token}
    })
    return res;
}