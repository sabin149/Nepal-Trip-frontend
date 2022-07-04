import { DeleteData, EditData } from "../actions/globalTypes";
import { USER_TYPES } from "../actions/userAction";

const initialState = {
    loading: false,
    users: [],
    user:{},
    count: 0,
    page: 1
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_TYPES.LOADING_USER:
            return {
                ...state,
                loading: action.payload
            };
        case USER_TYPES.GET_USERS:
            return {
                ...state,
                users: action.payload.users,
                count: action.payload.count,
                page: action.payload.page
            };
        case USER_TYPES.GET_USER:
            return {
                ...state,
                user: action.payload
            };
        case USER_TYPES.UPDATE_USER:
            return {
                ...state,
                users: EditData(state.users, action.payload._id, action.payload),
            }
        case USER_TYPES.DELETE_USER:
            return {
                ...state,
                users: DeleteData(state.users, action.payload._id),
            }
        default:
            return state;
    }
}

export default userReducer;