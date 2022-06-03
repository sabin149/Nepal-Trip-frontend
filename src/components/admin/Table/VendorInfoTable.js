import React, { useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useDispatch, useSelector } from 'react-redux'
import moment from "moment"
import { approveHotel, getHotels } from '../../../redux/actions/hotelAction';

const columns = [
  { field: 'id', headerName: 'SN', width: 100 },
  { field: 'companyName', headerName: 'Company Name', width: 220 },
  {
    field: 'email', headerName: 'Email', type: 'string', width: 280,
  },
  // {
  //   field: 'address', headerName: 'Address', width: 150,
  // },
  { field: 'registerdAt', headerName: 'Registered At', width: 160 },

  {
    field: 'status', headerName: 'Status', width: 120,
  },
];

function VendorInfoTable() {

  const dispatch = useDispatch()
  const { hotel } = useSelector(state => state)

  const token = localStorage.getItem('token')

  useEffect(() => {
    dispatch(getHotels(token))
  }, [token, dispatch])


  const hotelList = hotel.hotels.map((item, index) => {
    return {
      id: index + 1,
      companyName: item.hotel_name,
      email: item.hotel_email,
      // address: item.address,
      registerdAt: moment(item.createdAt).format('YYYY-MM-DD'),
      status: item.hotel_validity ? "Approved" : "Pending",
    }
  })

  return (
    <div style={{ minHeight: 475, width: '100%' }}>
      <DataGrid
        rows={hotelList}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
}

export default VendorInfoTable;