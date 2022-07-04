import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import { getBookingsByHotel } from '../../../../redux/actions/bookingAction';
import { Link } from 'react-router-dom';
import { CustomToolbar, CustomPagination } from "../../../CustomFunction"

const columns = [
    { field: 'id', headerName: 'ID', width: 65 },
    {
        field: 'room',
        headerName: 'Room Type',
        sortable: true,
        width: 120,
    },
    {
        field: 'roomimage',
        headerName: 'Room Image',
        sortable: false,
        width: 120,
        filter: false,
        renderCell: ({ value }) => {
            return <img src={value ? value : ""} alt="avatar" style={{ width: '100px', height: "80px", backgroundColor: "white", }} />
        }
    },
    {
        field: 'username',
        headerName: 'FullName',
        sortable: true,
        width: 200,
    },
    {
        field: 'email',
        headerName: 'Email',
        sortable: true,
        width: 280,
    },
    {
        field: 'avatar', headerName: 'Vendor Avatar', width: 140, sortable: false,
        renderCell: ({ value }) => {
            return <img src={value ? value : ""} alt="avatar" style={{ width: '80px', height: "80px", backgroundColor: "white", borderRadius: "50%" }} />
        }
    },
    {
        field: "startdate",
        headerName: 'Checkin Date',
        width: 200,
        sortable: true,
        renderCell: (bookingData) => {
            return moment(bookingData?.formattedValue ? bookingData?.value : "").format('YYYY-MM-DD')
        }
    },
    {
        field: "enddate",
        headerName: 'Checkout Date',
        width: 200,
        sortable: true,
        renderCell: (bookingData) => {
            return moment(bookingData?.value ? bookingData?.value : "").format('YYYY-MM-DD')
        }
    }, {
        field: "totalamount",
        headerName: 'Total Amount',
        width: 150,
        sortable: true,
    }, {
        field: "paymenttype",
        headerName: 'Payment Type',
        width: 150,
        sortable: true,
    }
];

export default function AllHotelBookingsTable() {
    const dispatch = useDispatch();

    const { hotel, booking } = useSelector(state => state)
    const token = localStorage.getItem('token')
    const userID = localStorage.getItem('userID')

    const hotelId = hotel && hotel?.hotels && hotel?.hotels.filter(hotel => hotel?.user?._id === userID)[0]?._id;

    React.useEffect(() => {
        dispatch(getBookingsByHotel({ hotelId, token }));
    }, [dispatch, hotelId, token])

    const bookingsData = booking?.bookings && booking?.bookings?.map((data, index) => {
        return {
            id: index + 1,
            room: data.room.room_type,
            roomimage: data.room.room_images[0].url,
            username: data.name,
            email: data.email,
            avatar: data.user.avatar,
            startdate: data.start_date,
            enddate: data.end_date,
            totalamount: "Rs " + data.total_amount,
            paymenttype: data.payment_type
        }
    })

    return (
        <div className="container-fluid-lg mt-1 mx-4" sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            boxShadow: "0px 13px 20px 0px #80808029",
            padding: "20px",
            overflow: "auto",
            overflowX: "hidden",
            overflowY: "auto",
            position: "relative",
            overflowScrolling: "touch",
            WebkitOverflowScrolling: "touch",
        }}>
            <Link to="/" className="btn btn-outline-primary btn-sm">Back to Home
            </Link>
            <h3 className='text-center m-auto text-capitalize'>All {booking?.bookings[0]?.hotel?.hotel_name} Bookings</h3>
            <hr />
            <div className="review-card">
                <div style={{ height: "86vh", width: '100%' }}>
                    <DataGrid
                        sx={{
                            boxShadow: 2,
                            '& .MuiDataGrid-cell:hover': {
                                color: 'primary.main',

                            },
                            "& .MuiDataGrid-columnHeaderTitle": {
                                fontSize: 15,
                                letterSpacing: '1px',
                                fontWeight: '500',
                            },
                        }}

                        rowHeight={100}
                        rows={bookingsData}
                        columns={columns}
                        pageSize={10}
                        rowsPerPageOptions={[10, 20, 30, 40, 50]}
                        checkboxSelection
                        disableSelectionOnClick
                        pagination
                        components={{
                            Toolbar: CustomToolbar,
                            Pagination: CustomPagination,
                        }}
                    />
                </div>
            </div>
        </div>
    );
}