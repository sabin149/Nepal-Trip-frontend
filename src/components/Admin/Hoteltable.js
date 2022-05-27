import React from 'react'
import {useDispatch} from 'react-redux'
import { approveHotel } from '../../redux/actions/hotelAction'

const Hoteltable = ({ hotel, auth }) => {
    const dispatch = useDispatch()

//   const a= hotel.hotels.map((hotel)=> hotel._id)
//   console.log(a);

    const changeStatus=()=>{
        // if(window.confirm("Are you sure want to change the status?")){
          dispatch(approveHotel({hotel,auth}))
            // return history.push("/")
        // }
    }
    return (
        <div>
            <h2 className="text-danger text-capitalize text-center">
                Welcome to Admin Dashboard
            </h2>
            <div className='hotel-table'>
                <table className="table table-bordered  ">
                    <thead className='bg-info text-light'>
                        <tr>
                            <th scope="col">SN</th>
                            <th scope="col">Hotel Name</th>
                            <th scope="col">Address</th>
                            <th scope="col">Email</th>
                            <th scope="col">Pan No</th>
                            <th scope="col">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {hotel.hotels.map((hotel, index) => (
                            <tr key={index}>
                                <th scope="row">{index + 1}</th>
                                <td className='text-capitalize'>{hotel.hotel_name}</td>
                                <td className='text-capitalize'>{hotel.address}</td>
                                <td className='text-lowercase'>{hotel.hotel_email}</td>
                                <td>{hotel.pan_no}</td>
                                <td className='text-capitalize' onClick={changeStatus}>
                                    {hotel.hotel_validity ? (
                                        <span className='badge text-bg-success'>Active</span>
                                    ) : (
                                        <span className='badge text-bg-danger'>Inactive</span>
                                    )}
                                    <div className='float-end'>
                                        <span ><i className="fa-solid fa-ellipsis-vertical"></i></span>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Hoteltable