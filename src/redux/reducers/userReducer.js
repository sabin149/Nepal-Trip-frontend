import { USER_TYPES } from "../actions/userAction";

const initialState = {
    loading: false,
    users: [],
    count: 0,
    page: 1
}

const userReducer=(state=initialState,action)=>{
switch(action.type){
    case USER_TYPES.LOADING_USER:
        return{
            ...state,
            loading:action.payload
        };
    case USER_TYPES.GET_USERS:
        return{
            ...state,
            users:action.payload.users,
            count:action.payload.count,
            page:action.payload.page
        };
        default :
        return state;
}
}

export default userReducer;