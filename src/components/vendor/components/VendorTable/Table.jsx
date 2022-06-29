import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import moment from 'moment';


const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
      field: 'room',
      headerName: 'Room Type',
      sortable: true,
      width: 180,
  },
  {
      field: 'name',
      headerName: 'Full Name',
      sortable: true,
      width: 180,
  },
  {
      field: "startdate",
      headerName: 'Checkin Date',
      width: 180,
      sortable: true,
      renderCell: (bookingData) => {
          return moment(bookingData?.value ? bookingData?.value : "").format("MMM Do YYYY")
      }
  },
  {
      field: "enddate",
      headerName: 'Checkout Date',
      width: 175,
      sortable: true,
      renderCell: (bookingData) => {
          return moment(bookingData?.value ? bookingData?.value : "").format("MMM Do YYYY")
      }
  }, {
      field: "totalamount",
      headerName: 'Total Amount',
      width: 140,
      sortable: false,
  }, {
      field: "paymenttype",
      headerName: 'Payment Type',
      width: 175,
      sortable: true,
  }
];

export default function VendorBookingsTable({booking}) {
  const {bookings}=booking

 const bookingsData=bookings&& bookings.map((booking,index) => {
    return {
        id: index+1,
        room: booking.room.room_type,
        name: booking.name,
        startdate: booking.start_date,
        enddate: booking.end_date,
        totalamount: booking.total_amount,
        paymenttype: booking.payment_type,
    }
 })

  return (
    <Box sx={{ height: 500, width: '100%' }}>
      <DataGrid
        sx={{
          boxShadow: 2,
          '& .MuiDataGrid-cell:hover': {
            color: 'primary.main',

          },
          "& .MuiDataGrid-columnHeaderTitle": {
            fontWeight: '500',
          },
        }}

        rows={bookingsData}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10, 20, 50, 100]}
        checkboxSelection
        disableSelectionOnClick
      />
    </Box>
  );
}