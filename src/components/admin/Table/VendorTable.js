import { DataGrid } from '@mui/x-data-grid'
import moment from 'moment'
import React, { } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { CustomToolbar, CustomPagination } from '../../CustomFunction'


const VendorTable = () => {
    const { hotels } = useSelector(state => state.hotel)

    const columns = [
        { field: 'id', headerName: 'SN', width: 90 },
        { field: 'hotelname', headerName: 'Hotel Name', width: 250 },
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
        { field: 'address', headerName: 'Address', width: 250 },
        { field: 'phone', headerName: 'Hotel Phone Number', width: 180 },
        { field: 'email', headerName: 'Hotel Email', width: 300 },
        { field: 'panno', headerName: 'Pan Number', width: 125 },
        {
            field: 'rating', headerName: 'Hotel Rating', width: 130, sortable: false, align: 'center',
            renderCell: ({ value }) =>
                <span >
                    <> {
                        value.rating === 5 ?
                            <><i className="fa-solid fa-star text-warning"></i><i className="fa-solid fa-star text-warning"></i><i className="fa-solid fa-star text-warning"></i><i className="fa-solid fa-star text-warning"></i><i className="fa-solid fa-star text-warning"></i></>
                            : value.rating === 4 ?
                                <><i className="fa-solid fa-star text-warning"></i><i className="fa-solid fa-star text-warning"></i><i className="fa-solid fa-star text-warning"></i><i className="fa-solid fa-star text-warning"></i></>
                                : value.rating === 3 ?
                                    <><i className="fa-solid fa-star text-warning"></i><i className="fa-solid fa-star text-warning"></i><i className="fa-solid fa-star text-warning"></i></>
                                    : value.rating === 2 ?
                                        <><i className="fa-solid fa-star text-warning"></i><i className="fa-solid fa-star text-warning"></i></>
                                        : value.rating === 1 ?
                                            <i className="fa-solid fa-star text-warning"></i>
                                            : ""
                    } </>
                </span>

        },
        { field: 'createdAt', headerName: 'Created At', width: 220 },
        { field: 'rooms', headerName: 'Total Rooms', width: 120, align: 'center', },
        { field: 'reviews', headerName: 'Total Reviews', width: 125, align: 'center', },
        { field: 'ahotelrating', headerName: 'Average Hotel Rating', width: 190,align: 'center', },
        { field: 'fullname', headerName: 'Vendor Name', width: 250 },
        {
            field: 'avatar', headerName: 'Vendor Avatar', width: 140, sortable: false,
            renderCell: ({ value }) => {
                return <img src={value ? value : ""} alt="avatar" style={{ width: '80px', height: "80px", backgroundColor: "white", borderRadius: "50%" }} />
            }

        },
        { field: 'vaddress', headerName: 'Vendor Address', width: 250 },
        { field: 'vphone', headerName: 'Vendor Phone Number', width: 200 },
        { field: 'registerddate', headerName: 'Vendor Registered Date', width: 220 },
    ]

    const hotelInfo = hotels && hotels?.map((hotel, index) => {
        return {
            id: index + 1,
            hotelname: hotel?.hotel_name,
            hotelimage: hotel?.hotel_images[0]?.url,
            address: hotel?.address ? hotel?.address + ", Nepal" : "N/A",
            phone: hotel?.phone,
            email: hotel?.hotel_email,
            panno: hotel?.pan_no,
            rating: hotel,
            createdAt: moment(hotel?.createdAt).format('Do MMMM YYYY, h:mm:ss a'),
            rooms: hotel?.rooms?.length,
            reviews: hotel?.hotel_reviews?.length,
            ahotelrating: hotel?.hotel_reviews?.map(review => review?.hotel_rating)?.reduce((a, b) => a + b, 0) / hotel?.hotel_reviews?.length,
            fullname: hotel?.user?.fullname,
            avatar: hotel?.user?.avatar,
            vaddress: hotel?.user?.address ? hotel?.user?.address + ", Nepal" : "N/A",
            vphone: hotel?.user?.phone,
            registerddate: moment(hotel?.user?.createdAt).format('MMMM Do YYYY, h:mm:ss a'),
        }
    })

    return (
        <>
            <span> <Link to="/" className="btn btn-primary btn-sm">Back</Link>  <h3 className='text-center mt-1 '>List of Hotels</h3></span>
            <div className="container-fluid" style={{
            }} >
                <DataGrid style={{ height: "90vh", width: "100%" }}
                    sx={{
                        boxShadow: 2,
                        '& .MuiDataGrid-cell:hover': {
                            color: 'primary.main',
                            cursor: 'pointer',

                        },
                        "& .MuiDataGrid-columnHeaderTitle": {
                            fontSize: 15,
                            letterSpacing: '0.5px',
                            fontWeight: '500',
                        },
                    }}
                    rows={hotelInfo}
                    columns={columns}
                    pageSize={10}
                    rowHeight={100}
                    rowsPerPageOptions={[10]}
                    checkboxSelection
                    pagination
                    components={{
                        Toolbar: CustomToolbar,
                        Pagination: CustomPagination,
                    }}
                />
            </div>
        </>
    )
}

export default VendorTable