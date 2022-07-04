import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useSelector } from 'react-redux';
import moment from 'moment';
import { TextareaAutosize } from '@mui/material';
import { Link } from 'react-router-dom';
import {CustomToolbar,CustomPagination} from "../../../../CustomFunction"

const columns = [
    { field: 'id', headerName: 'ID', width: 65 },
    {
        field: 'user',
        headerName: 'User Name',
        sortable: true,
        width: 220,

    },
    {
        field: 'email',
        headerName: 'Email',
        sortable: true,
        width: 300,

    },
    {
        field: "avatar",
        headerName: 'Avatar',
        width: 110,
        sortable: false,
        filter: false,
        renderCell: (reviewData) => {
            return <img src={reviewData?.value ? reviewData?.value : ""} alt="avatar" style={{ width: '80px', height: "80px", backgroundColor: "white", borderRadius: "50%" }} />
        }
    },
    {
        field: 'review',
        headerName: 'Review',
        width: 420,
        renderCell: (reviewData) => {
            return  <TextareaAutosize
            readOnly
            maxRows={4}
            aria-label="maximum height"
            value={reviewData?.value ? reviewData?.value : ""}
            style={{ width: "400px" , border: "1px solid #ccc", borderRadius: "5px", padding: "10px" }}
          />
        }
    },
    {
        field: 'rating',
        headerName: 'Rating',
        width: 100,
        sortable: false,
        align: 'center',
        renderCell: ({ value }) =>
            <div>
                <span style={{ color: '#ffb400', fontSize: '20px' }}>{value}</span>
                <span style={{ color: '#ffb400', fontSize: '20px' }}>&#9733;</span>
            </div>
    },
    {
        field: 'createdAt',
        headerName: 'Created At',
        sortable: false,
        width: 220,
    },
];

const rows = [];


export default function ReviewTable() {
    const userID = localStorage.getItem('userID');

    const hotels = useSelector(state => state?.hotel?.hotels)

    const oneHotel = hotels && hotels?.filter(hotel => hotel?.user?._id === userID)

    const hotelReviews = oneHotel && oneHotel[0]?.hotel_reviews?.map((item, index) => {
        return {
            id: index + 1,
            review: item.review,
            rating: item.hotel_rating,
            user: item.user?.fullname,
            email: item.user?.email,
            createdAt: moment(item.createdAt).format('MMMM Do YYYY, h:mm:ss a'),
            avatar: item.user.avatar
        }
    })

    return (
        <div className="container mt-1" sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            boxShadow: "0px 13px 20px 0px #80808029",
            padding: "20px",
            position: "relative",
            overflowScrolling: "touch",
            WebkitOverflowScrolling: "touch",
        }}>
        <Link to="/" style={{ textDecoration: "none" }} className="btn btn-outline-primary btn-sm">
            Back
        </Link>
            <h2 className='h3 text-center text-capitalize text-primary'>All {oneHotel[0]?.hotel_name} reviews</h2>
            <hr />
            <div className="">
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
                        rows={hotelReviews ? hotelReviews : rows}
                        columns={columns}
                        pageSize={5}
                        rowsPerPageOptions={[5]}
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