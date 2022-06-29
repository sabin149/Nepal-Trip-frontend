import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import { getBookings } from '../../../../redux/actions/bookingAction';

const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
        field: 'hotel',
        headerName: 'Hotel Name',
        sortable: true,
        width: 180,
    },
    {
        field: 'room',
        headerName: 'Room Type',
        sortable: true,
        width: 180,
    },
    {
        field: 'username',
        headerName: 'User Name',
        sortable: true,
        width: 180,
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
        width: 180,
        sortable: true,
    }, {
        field: "paymenttype",
        headerName: 'Payment Type',
        width: 220,
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
            room: booking.room.room_type,
            username: booking.name,
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
            <h2 className='h3 text-center text-capitalize'>All Bookings</h2>
            <hr />
            <div className="review-card">
                <div style={{ height: "86vh", width: '100%' }}>
                    <DataGrid
                        sx={{
                            boxShadow: 2,
                            border: 2,
                            '& .MuiDataGrid-cell:hover': {
                                color: 'primary.main',

                            },
                            "& .MuiDataGrid-columnHeaderTitle": {
                                fontSize: 16,
                                letterSpacing: '1px',
                                fontWeight: '600',
                            },
                        }}

                        rowHeight={50}
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