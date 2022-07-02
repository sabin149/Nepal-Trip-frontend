import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import { TextareaAutosize } from '@mui/material';
import { getReviews } from '../../../../redux/actions/reviewAction';
import { Link } from 'react-router-dom';


const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
        field: 'hotel',
        headerName: 'Hotel Name',
        sortable: true,
        width: 180,
    },
    {
        field: 'hotelimage',
        headerName: 'Hotel Image',
        sortable: false,
        width: 120,
        filter: false,
        renderCell: (reviewData) => {
            return <img src={reviewData?.value ? reviewData?.value : ""} alt="avatar" style={{ width: '100px', height: "80px", backgroundColor: "white", }} />
        }
    },
    {
        field: 'user',
        headerName: 'User Name',
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
            return <TextareaAutosize
                readOnly
                maxRows={4}
                aria-label="maximum height"
                value={reviewData?.value ? reviewData?.value : ""}
                style={{ width: "400px", border: "1px solid #ccc", borderRadius: "5px", padding: "10px" }}
            />
        }
    },
    {
        field: 'rating',
        headerName: 'Rating',
        width: 120,
        renderCell: ({ value }) =>
            <div>
                <span style={{ color: '#ffb400', fontSize: '20px' }}>{value}</span>
                <span style={{ color: '#ffb400', fontSize: '20px' }}>&#9733;</span>
            </div>
    },
    {
        field: 'createdAt',
        headerName: 'Created At',
        sortable: true,
        width: 220,
    },
];

export default function AllReviewsTable() {

    const dispatch = useDispatch();
    const token = localStorage.getItem('token');

    const hotels = useSelector(state => state?.hotel?.hotels)

    React.useEffect(() => {
        dispatch(getReviews({ token }))
    }, [dispatch, token])

    const reviews = useSelector(state => state?.review?.reviews)


    const hotelReviews = reviews && reviews.map((item, index) => {
        return {
            id: index + 1,
            hotel: (hotels && hotels?.filter(hotel => hotel?._id === item?.hotelId)[0]?.hotel_name),
            hotelimage: (hotels && hotels?.filter(hotel => hotel?._id === item?.hotelId)[0]?.hotel_images[0]?.url),
            review: item.review,
            rating: item.hotel_rating,
            user: item.user.fullname,
            createdAt: moment(item.createdAt).format('MMMM Do YYYY, h:mm:ss a'),
            avatar: item.user.avatar
        }
    })

    return (
        <div className="container-fluid-lg mt-1 mx-5" sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            boxShadow: "0px 13px 20px 0px #80808029",
            padding: "20px",
            position: "relative",
            zIndex: "1",
            overflowScrolling: "touch",
            WebkitOverflowScrolling: "touch",
        }}>
          <Link to="/" style={{ textDecoration: "none" }} className="btn btn-outline-primary btn-sm">Back</Link>
            <h2 className='h3 text-center text-capitalize'>All reviews</h2>
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
                        rows={hotelReviews}
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