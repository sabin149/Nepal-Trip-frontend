import { DataGrid } from '@mui/x-data-grid'
import moment from 'moment'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { CustomToolbar, CustomPagination } from "../../../CustomFunction";
import { getBookingsByHotel } from '../../../../redux/actions/bookingAction'

const AllHotelUsers = () => {
    const dispatch = useDispatch()
    const { hotel, booking } = useSelector(state => state)

    const token = localStorage.getItem('token')
    const userID = localStorage.getItem('userID')

    const oneHotel = hotel && hotel?.hotels && hotel?.hotels?.filter(hotel => hotel?.user?._id === userID)[0]

    const hotelReviewsUsers = oneHotel && oneHotel?.hotel_reviews && oneHotel?.hotel_reviews?.map(review => review?.user)

    useEffect(() => {
        dispatch(getBookingsByHotel({ hotelId: oneHotel?._id, token }));
    }, [dispatch, oneHotel, token])

    const bookingUsers = booking?.bookings && booking?.bookings && booking?.bookings?.map(booking => booking?.user)

    let allUsers = []

    if (bookingUsers !== undefined && hotelReviewsUsers !== undefined) {

        allUsers = [...bookingUsers, ...hotelReviewsUsers].filter((user, index, self) =>
            index === self.findIndex((t) => (
                t?._id === user?._id
            ))
        )
    }

    const columns = [
        { field: 'id', headerName: 'SN', width: 65 },
        { field: 'fullname', headerName: 'FullName', width: 250 },
        {
            field: 'username', headerName: 'UserName', type: 'string', width: 205,
        },
        {
            field: "avatar",
            headerName: 'Avatar',
            width: 120,
            sortable: false,
            filter: false,
            renderCell: ({ value }) => {
                return <img src={value ? value : ""} alt="avatar" style={{ width: '80px', height: "80px", backgroundColor: "white", borderRadius: "50%" }} />
            }
        },

        {
            field: 'email', headerName: 'Email', type: 'string', width: 300,
        },
        {
            field: 'address', headerName: 'Address', type: 'string', width: 180, align: 'center',
        },
        {
            field: 'phone', headerName: 'Phone', type: 'string', width: 120, align: 'center',
        },

        { field: 'registerdAt', headerName: 'Registered At', width: 220, align: 'center' }
    ]

    const userList = allUsers && allUsers?.map((item, index) => {
        return {
            id: index + 1,
            fullname: item.fullname,
            username: item.username,
            avatar: item.avatar,
            email: item.email,
            address: item.address ? item.address + ", Nepal" : 'N/A',
            phone: item.phone,
            registerdAt: moment(item.createdAt).format('Do MMMM YYYY, h:mm:ss a'),
        }
    })

    return (
        <>
            <span> <Link to="/" className="btn btn-outline-primary btn-sm">Back</Link>  <h3 className='text-center mt-1 '>List of {oneHotel?.hotel_name} Users</h3></span>
            <div className="container-fluid" style={{
            }} >
                <DataGrid style={{ height: "90vh", width: "100%" }}
                    sx={{
                        boxShadow: 2,
                        '& .MuiDataGrid-cell:hover': {
                            color: 'primary.main',
                            cursor: 'pointer',

                        },
                        "& .MuiDataGrid-columnHeaderTitle": {
                            fontSize: 15,
                            letterSpacing: '0.5px',
                            fontWeight: '500',
                        },
                    }}
                    pagination
                    rows={userList}
                    columns={columns}
                    pageSize={10}
                    rowsPerPageOptions={[5, 10, 20, 50, 100]}
                    checkboxSelection
                    rowHeight={100}
                    components={{
                        Toolbar: CustomToolbar,
                        Pagination: CustomPagination,
                    }}
                />
            </div>
        </>
    )
}

export default AllHotelUsers;