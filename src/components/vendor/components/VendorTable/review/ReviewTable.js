import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useDispatch, useSelector } from 'react-redux';
import { getHotels } from '../../../../../redux/actions/hotelAction';
import { getUsers } from '../../../../../redux/actions/userAction';
import moment from 'moment';
import { TextareaAutosize } from '@mui/material';

const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
        field: 'user',
        headerName: 'User',
        sortable: true,
        width: 180,

    },
    {
        field: "avatar",
        headerName: 'Avatar',
        width: 120,
        sortable: false,
        filter: false,
        renderCell: (reviewData) => {
            return <img src={reviewData?.value ? reviewData?.value : ""} alt="avatar" style={{ width: '80px', height: "80px", backgroundColor: "white", borderRadius: "50%" }} />
        }
    },
    {
        field: 'review',
        headerName: 'Review',
        width: 400,
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
        width: 120,
    },

    {
        field: 'createdAt',
        headerName: 'Created At',
        sortable: false,
        width: 120,
    },


];

const rows = [];


export default function ReviewTable() {

    const dispatch = useDispatch();
    const userID = localStorage.getItem('userID');
    const token = localStorage.getItem('token');

    const hotels = useSelector(state => state?.hotel?.hotels)

    const { users } = useSelector(state => state.user)


    React.useEffect(() => {
        dispatch(getUsers(token))
    }, [dispatch, token])


    const oneHotel = hotels && hotels?.filter(hotel => hotel?.user?._id === userID)


    const hotelReviews = oneHotel && oneHotel[0]?.hotel_reviews?.map((item, index) => {
        return {
            id: index + 1,
            review: item.review,
            rating: item.hotel_rating,
            user: (users && users?.filter(user => user?._id === item?.user))[0]?.fullname,
            createdAt: moment(item.createdAt).format('YYYY-MM-DD'),
            avatar: (users && users?.filter(user => user?._id === item?.user))[0]?.avatar
        }
    })

   

    // console.log(hotelReviews,"reviews");


    return (
        <div className="container mt-1" sx={{
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
            <h2 className='h3 text-center text-capitalize text-primary'>All {oneHotel[0]?.hotel_name} reviews</h2>
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



                        rowHeight={100}
                        rows={hotelReviews ? hotelReviews : rows}
                        columns={columns}
                        pageSize={5}
                        rowsPerPageOptions={[5]}
                        checkboxSelection
                        disableSelectionOnClick
                    />
                </div>
            </div>
        </div>
    );
}