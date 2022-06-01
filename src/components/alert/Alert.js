import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Loading from './Loading'
import Toast from './Toast'

// import { toast } from 'react-toastify';
import { GLOBALTYPES } from "../../redux/actions/globalTypes"
const Notify = () => {
    const { alert } = useSelector(state =>
        state
    )
    const dispatch = useDispatch()

    // const notifySuccess = ({ msg }) => {
    //     toast.success(`${msg}`, {
    //         position: "top-right",
    //         autoClose: 5000,
    //         hideProgressBar: false,
    //         closeOnClick: true,
    //         pauseOnHover: true,
    //         draggable: true,
    //         progress: undefined,
    //     });
    //     dispatch({ type: GLOBALTYPES.ALERT, payload: {} })

    // }
    // const notifyError = ({ msg }) => {

    //     toast.error(`${msg}`, {
    //         position: "top-right",
    //         autoClose: 5000,
    //         hideProgressBar: false,
    //         closeOnClick: true,
    //         pauseOnHover: true,
    //         draggable: true,
    //         progress: undefined,
            
    //     });
    //     dispatch({ type: GLOBALTYPES.ALERT, payload: {} })

    // }

    return (
        <div>
            {alert.loading && <Loading />}
            {/* {
                alert.error &&
                notifyError({ title: "Error", msg: alert.error })
            }
            {
                alert.success &&
                notifySuccess({ title: "Success", msg: alert.success })
            } */}

            {
                alert.error &&
                <Toast msg={{title:'Error', body:alert.error}}
                    handleShow={()=>dispatch({type:GLOBALTYPES.ALERT,payload:{}})}
                    bgColor="bg-danger" />
            }
            {
                alert.success &&
                <Toast msg={{title:'Success', body:alert.success}}
                    handleShow={()=>dispatch({type:GLOBALTYPES.ALERT,payload:{}})}
                    bgColor="bg-success" />
            } 
        </div>
    )
}

export default Notify 
