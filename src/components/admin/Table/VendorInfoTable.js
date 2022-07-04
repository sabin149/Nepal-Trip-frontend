import React, { useState } from 'react';
import { DataGrid, GridCloseIcon } from '@mui/x-data-grid';
import { useDispatch } from 'react-redux'
import moment from "moment"
import { approveHotel } from '../../../redux/actions/hotelAction';
import ViewHotelDetails from '../../vendor/ViewHotelDetails';
import { AppBar, Dialog, IconButton, Slide, Toolbar, Typography } from '@mui/material';
import { CustomPagination,QuickSearchToolbar } from '../../CustomFunction';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});


function VendorInfoTable({ hotel, token }) {

  const dispatch = useDispatch()
  const [open, setOpen] = useState(false);
  const [selectedHotel, setSelectedHotel] = useState(null);


  const handleClose = () => {
    setOpen(false);
  };

  const changeStatus = ({ hotel }) => {
    if (window.confirm('Are you sure you want to change this hotel status? ')) {
      dispatch(approveHotel({ hotel, token }))
    }
  }
  const handleViewHotelDetails = ({ hotel }) => {
    setOpen(true);
    setSelectedHotel(hotel)
  }

  const columns = [
    { field: 'id', headerName: 'SN', width: 65 },
    {
      field: 'companyName', headerName: 'Hotel Name', width: 240,
      // get cell value
      renderCell: ({ value }) =>
        <>
          <span onClick={() => {
            handleViewHotelDetails({ scrollType: 'body', hotel: value })
          }}>
            <span className=''>{value?.hotel_name}</span>
          </span>

          <Dialog
            fullScreen
            open={open}
            onClose={handleClose}
            TransitionComponent={Transition}
          >
            <AppBar sx={{ position: 'relative' }}>
              <Toolbar>

                <Typography sx={{ ml: 2, flex: 1, cursor: 'pointer' }} variant="h6" component="div" onClick={handleClose}
                  aria-label="close">
                  Hotel Details
                </Typography>
                <IconButton
                  edge="start"
                  color="inherit"
                  onClick={handleClose}
                  aria-label="close"
                >
                  <GridCloseIcon />
                </IconButton>
              </Toolbar>
            </AppBar> <ViewHotelDetails hotelDetails={selectedHotel} />
          </Dialog>
        </>


    },
    {
      field: 'email', headerName: 'Email', type: 'string', width: 320,
    },
    { field: 'registerdAt', headerName: 'Registered At', width: 150 },
    {
      field: 'status', headerName: 'Status', width: 110,
      renderCell: (hotelData) =>
        <span className='text-success' onClick={() => {

          changeStatus({ hotel: hotelData.value })
        }}>
          {hotelData.value.hotel_validity ? <span className='btn btn-success btn-sm'>Active</span> : <span className='btn btn-danger btn-sm'>Inactive</span>}
        </span>


    }
  ];

  const hotelList = hotel.hotels.map((item, index) => {
    return {
      id: index + 1,
      companyName: item,
      email: item.hotel_email,
      registerdAt: moment(item.createdAt).format('Do MMMM YYYY'),
      status: item
    }
  })

  return (
    <div style={{ minHeight: 534, width: '100%' }}>
      <DataGrid

        sx={{
          cursor: 'pointer',

        }}
        rows={hotelList}
        columns={columns}
        pageSize={10}
        checkboxSelection
        disableSelectionOnClick
        components={
          {
            Pagination: CustomPagination,
            Toolbar: QuickSearchToolbar,
          }
        }  
      />
    </div>
  );
}

export default VendorInfoTable;