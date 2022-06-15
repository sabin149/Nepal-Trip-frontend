import React, { useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useDispatch, useSelector } from 'react-redux'
import moment from "moment"
// import {approveHotel, getHotels } from './../../../redux/actions/hotelAction';

function VendorInfoTable() {

  const dispatch = useDispatch()
  const { hotel } = useSelector(state => state)

  const token = localStorage.getItem('token')

//   useEffect(() => {
//     dispatch(getHotels(token))
//   }, [token, dispatch])

        
//   const changeStatus = ({ hotel }) => {
//     if (window.confirm('Are you sure you want to change this hotel status? ')) {
//         dispatch(approveHotel({ hotel, token }))
//     }
// }

  const columns = [
    { field: 'id', headerName: 'SN', width: 90 },
    { field: 'companyName', headerName: 'Company Name', width: 220},
    {
      field: 'email', headerName: 'Email', type: 'string', width: 280,
    },
    { field: 'registerdAt', headerName: 'Registered At', width: 160 },
    // {
    //   field: 'status', headerName: 'Status', width: 130,
    //   renderCell:(hotelData)=>
    //   <span className='text-success' onClick={()=>{
    //     changeStatus({hotel:hotelData.value})
    //   }}>
    //  {hotelData.value.hotel_validity ?  <span className='btn btn-success btn-sm'>Active</span> :  <span className='btn btn-danger btn-sm'>Inactive</span>}
    //   </span>
    // }
  ];

  const hotelList = hotel.hotels.map((item, index) => {
    return {
      id: index + 1,
      companyName: item.hotel_name,
      email: item.hotel_email,
      registerdAt: moment(item.createdAt).format('YYYY-MM-DD'),
      status: item
    }
  })

  return (
    <div style={{ minHeight: 534, width: '100%' }}>
      <DataGrid
        rows={hotelList}
        columns={columns}
        pageSize={10}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
}

export default VendorInfoTable;