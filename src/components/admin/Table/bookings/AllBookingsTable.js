import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import { getBookings } from '../../../../redux/actions/bookingAction';
import { Link } from 'react-router-dom';

const columns = [
    { field: 'id', headerName: 'ID', width: 65 },
    {
        field: 'hotel',
        headerName: 'Hotel Name',
        sortable: true,
        width: 220,
    },
    {
        field: 'hotelimage',
        headerName: 'Hotel Image',
        sortable: false,
        width: 120,
        filter: false,
        renderCell: ({ value }) => {
            return <img src={value ? value : ""} alt="avatar" style={{ width: '100px', height: "80px", backgroundColor: "white", }} />
        }
    },
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


export default function AllBookingsTable() {

    const dispatch = useDispatch();
    const token = localStorage.getItem('token');

    const bookings = useSelector(state => state?.booking?.bookings)

    React.useEffect(() => {
        dispatch(getBookings({ token }))
    }, [dispatch, token])

    const bookingsData= bookings.map((booking,index) => {
        return {
            id: index+1,
            hotel: booking.hotel.hotel_name,
            hotelimage: booking.hotel.hotel_images[0].url,
            room: booking.room.room_type,
            roomimage: booking.room.room_images[0].url,
            username: booking.name,
            avatar: booking.user.avatar,
            startdate: booking.start_date,
            enddate: booking.end_date,
            totalamount: "Rs "+booking.total_amount,
            paymenttype: booking.payment_type
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
            <span> <Link to="/" className="btn btn-primary btn-sm">Back</Link>  <h3 className='text-center m-auto '>All Bookings</h3></span>
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
                    />
                </div>
            </div>
        </div>
    );
}