import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./Table.css";
import {useDispatch,useSelector} from 'react-redux'
import moment from "moment"
import { approveHotel, getHotels } from '../../../redux/actions/hotelAction'



const makeStyle=(status)=>{

  if(status === true)
  {
    return {
      background: 'rgb(145 254 159 / 47%)',
      color: 'green',
    }
  }
  else if(status === false)
  {
    return{
      background: '#ffadad8f',
      color: 'red',
    }
  }
  else{
    return{
      background: '#59bfff',
      color: 'white',
    }
  }
}

export default function BasicTable() {
  const dispatch=useDispatch()
  const {hotel} = useSelector(state => state)

const token=localStorage.getItem('token')

  React.useEffect(() => {
    dispatch(getHotels(token))
  }, [token, dispatch])
  return (
      <div className="Table">
      <h3>Vendors</h3>
        <TableContainer
          component={Paper}
          style={{ boxShadow: "0px 13px 20px 0px #80808029", overflow:"scroll"}}
        >
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>SN</TableCell>
                <TableCell>CompanyName</TableCell>
                <TableCell align="left">Email</TableCell>
                <TableCell align="left">Registerd At</TableCell>
                <TableCell align="left">Status</TableCell>
                <TableCell align="left"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody style={{ color: "white" }}>
              {hotel.hotels.map((hotel,index) => (
                <TableRow
                  key={hotel._id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {index+1}
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {hotel.hotel_name}
                  </TableCell>
                  <TableCell align="left">{hotel.hotel_email}</TableCell>
                  <TableCell align="left">{moment(hotel.createdAt).format('YYYY-MM-DD')}</TableCell>
                  <TableCell align="left">
                    <span className="status" style={makeStyle(hotel.hotel_validity)}>{hotel.hotel_validity?"Approved":"Pending"}</span>
                  </TableCell>
                  <TableCell align="left" className="Details">Details</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
  );
}
