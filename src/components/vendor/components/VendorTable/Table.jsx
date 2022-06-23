import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'hotelname',
    headerName: 'Hotel Name',
    width: 150,
    editable: true,
  },
  {
    field: 'bookedat',
    headerName: 'Booked At',
    type:'number',
    width: 150,
    editable: true,
  },
  
  {
    field: 'bookedby',
    headerName: 'Booked By',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 140,
    valueGetter: (params) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
  {
    field: 'totalrooms',
    headerName: 'TotalRooms',
    type: 'number',
    width: 100,
    editable: true,
  },
  {
    field: 'email',
    headerName: 'Email',
    width: 190,
    editable: true,
  },
  {
    field: 'status',
    headerName: 'Status',
    width: 150,
    editable: true,
  },
];

const rows = [
  { id: 1, hotelname: 'Snow',bookedat:"2020/12/2" ,firstName: 'Jon', totalrooms: 35, email:'sp554540@gmail.com' },
  { id: 2, hotelname: 'Lannister', bookedat:"2020/12/2" ,firstName: 'Cersei', totalrooms: 42, email:'sp554540@gmail.com' },
  { id: 3, hotelname: 'Lannister', bookedat:"2020/12/2" ,firstName: 'Jaime', totalrooms: 45, email:'sp554540@gmail.com' },
  { id: 4, hotelname: 'Stark', bookedat:"2020/12/2" ,firstName: 'Arya', totalrooms: 16, email:'sp554540@gmail.com' },
  { id: 5, hotelname: 'Targaryen', bookedat:"2020/12/2" ,firstName: 'Daenerys', totalrooms: 55, email:'sp554540@gmail.com' },
  { id: 6, hotelname: 'Melisandre', bookedat:"2020/12/2" ,firstName: null, totalrooms: 150, email:'sp554540@gmail.com' },
  { id: 7, hotelname: 'Clifford', bookedat:"2020/12/2" ,firstName: 'Ferrara', totalrooms: 44, email:'sp554540@gmail.com' },
  { id: 8, hotelname: 'Frances', bookedat:"2020/12/2" ,firstName: 'Rossini', totalrooms: 36, email:'sp554540@gmail.com' },
  { id: 9, hotelname: 'Roxie', bookedat:"2020/12/2" ,firstName: 'Harvey', totalrooms: 65, email:'sp554540@gmail.com' },
];

export default function DataGridDemo() {
  return (
    <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
      />
    </Box>
  );
}