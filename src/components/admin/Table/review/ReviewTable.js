import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
        field: 'review',
        headerName: 'Review',
        width: 300,
    },
    {
        field: 'rating',
        headerName: 'Rating',
        width: 120,
    },
    {
        field: 'hotel',
        headerName: 'Hotel',
        width: 250,
    },
    {
        field: 'user',
        headerName: 'User',
        sortable: true,
        width: 200,
    },
    {
        field: 'avatar',
        headerName: 'Avatar',
        sortable: false,
        width: 160,
    },
];

const rows = [
    { id: 1, review: 'This hotel is good', rating: '5', hotel: "The Hotel Orchid", user: "John Doe", avatar: "https://picsum.photos/200" },
];

export default function ReviewTable() {
    return (
        <div className="container-md-fluid mt-1 mx-5" sx={{
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
            zIndex: "1",
            overflowScrolling: "touch",
            WebkitOverflowScrolling: "touch",
        }}>
            <h2 className='h3 text-center'>List of all reviews</h2>
            <hr />
            <div className="review-card">
                <div style={{ height: "90vh", width: '100%' }}>
                    <DataGrid
                        rows={rows}
                        columns={columns}
                        pageSize={10}
                        rowsPerPageOptions={[10]}
                        checkboxSelection
                        disableSelectionOnClick
                    />
                </div>
            </div>
        </div>
    );
}