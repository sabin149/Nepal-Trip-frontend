import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { approveHotel, getHotels } from '../../../redux/actions/hotelAction'
import "./Table.css"

const VendorTable = () => {
    const dispatch = useDispatch()
    const { hotel } = useSelector(state => state)

    const token = localStorage.getItem('token')
    
    useEffect(() => {
        dispatch(getHotels(token))
    }, [token, dispatch])

    const changeStatus = ({ hotel }) => {
        if (window.confirm('Are you sure you want to change this hotel status? ')) {
            dispatch(approveHotel({ hotel, token }))
        }
    }

    return (
        <div className='mx-5 vendor_list_table' >
            <h2 className="text-danger text-capitalize text-center mt-2">
                All Vendors
            </h2>
            <div className='hotel-table'>
                <table className="table table-bordered table-hover" style={{
                    border: '1px solid #ddd',
                }}>
                    <thead>
                        <tr>
                            <th scope="col">SN</th>
                            <th scope="col">Hotel Name</th>
                            <th scope="col">Address</th>
                            <th scope="col">Email</th>
                            <th scope="col">Phone</th>
                            <th scope="col">Pan No</th>
                            <th scope="col">Hotel Reviews</th>
                            <th scope="col">Hotel Rooms</th>
                            <th scope="col">Status</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {hotel.hotels.map((hotel, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td className='text-capitalize'>{hotel.hotel_name}</td>
                                <td className='text-capitalize'>{hotel.address}</td>
                                <td className='text-lowercase'>{hotel.hotel_email}</td>
                                <td className='text-center'>{hotel.phone}</td>
                                <td className='text-center'>{hotel.hotel_reviews.length}</td>
                                <td className='text-center'>{hotel.pan_no}</td>
                                <td className='text-center'>{hotel.rooms.length}</td>
                                <td className='text-capitalize' style={{ cursor: "pointer" }} onClick={() => changeStatus({ hotel })}>
                                    {hotel.hotel_validity ? (
                                        <span className='badge text-bg-success'>Active</span>
                                    ) : (
                                        <span className='badge text-bg-danger'>Inactive</span>
                                    )}
                                </td>
                                <td className='d-flex justify-content-evenly'>
                                    <i className="fa-solid fa-pen-to-square text-success"></i>
                                    <i className="fa-solid fa-trash-can text-danger"></i>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default VendorTable