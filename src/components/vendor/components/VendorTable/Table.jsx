import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./Table.css";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";

const makeStyle = (status) => {
  if (status === true) {
    return {
      background: "rgb(145 254 159 / 47%)",
      color: "green",
    };
  } else if (status === false) {
    return {
      background: "#ffadad8f",
      color: "red",
    };
  } else {
    return {
      background: "#59bfff",
      color: "white",
    };
  }
};

function BasicTable() {
  const dispatch = useDispatch();
  const { hotel } = useSelector((state) => state);

  const token = localStorage.getItem("token");

  // React.useEffect(() => {
  //   dispatch(getHotels())
  // }, [token, dispatch])

  // const changeStatus =  ({ item }) => {
  //   dispatch(approveHotel({hotel: item, token}))

  // }

  return (
    <div className="Table">
      <h3>Vendors</h3>
      <form>
        <TableContainer
          component={Paper}
          style={{ boxShadow: "0px 13px 20px 0px #80808029" }}
        >
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="left">SN</TableCell>
                <TableCell>Hotel Name</TableCell>
                <TableCell align="left">Booked At</TableCell>
                <TableCell align="left">Booked By</TableCell>
                <TableCell align="left">TotalRooms</TableCell>
                <TableCell align="left">Email</TableCell>
                <TableCell align="left">Status</TableCell>
                <TableCell align="left"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody style={{ color: "white" }}>
              {hotel.hotels.map((item, index) => (
                <TableRow
                  key={item._id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="left">{index + 1}</TableCell>
                  <TableCell component="th" scope="row">
                    {item.hotel_name}
                  </TableCell>
                  <TableCell align="left">{item.hotel_email}</TableCell>
                  <TableCell align="left">
                    {moment(item.createdAt).format("YYYY-MM-DD")}
                  </TableCell>
                  {/* <TableCell align="left">
                    <span type="button" onClick={() => {
                      changeStatus({ item })

                    }} className="status" style={makeStyle(item.hotel_validity)}>{item.hotel_validity ? "Approved" : "Pending"}</span>
                  </TableCell> */}

                  <TableCell align="left" className="Details">
                    Details
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </form>
    </div>
  );
}

export default BasicTable;

// import * as React from "react";
// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
// import TableRow from "@mui/material/TableRow";
// import Paper from "@mui/material/Paper";
// import "./Table.css";

// function createData(Hotel, BookedAt, BookedBy, TotalRooms,Email ,Status) {
//   return {Hotel, BookedAt, BookedBy, TotalRooms,Email ,Status};
// }

// const rows = [
//   createData("Lasania Chiken Fri","14 February 2000" , "Suman Parajuli",8,"sp554540@gmail.com","Approved"),
//   createData("Big Baza Bang ","14 February 2000" , "Sabin Dangal",2,"sp554540@gmail.com","Pending"),
//   createData("Mouth Freshner","14 February 2000" ,"Anish Shrestha" ,1,"sp554540@gmail.com","Approved"),
//   createData("Cupcake","14 February 2000" ,"Suyesh Shrestha" ,2,"sp554540@gmail.com","Delivered"),
// ];

// export default function BasicTable() {
//   return (
//       <div className="Table">
//       <h3>Bookings</h3>
//         <TableContainer
//           component={Paper}
//           style={{ boxShadow: "0px 13px 20px 0px #80808029" }}
//         >
//           <Table sx={{ minWidth: 650 }} aria-label="simple table">
//             <TableHead>
//               <TableRow>

//                 <TableCell>Hotel</TableCell>
//                 <TableCell align="left">Booked At</TableCell>
//                 <TableCell align="left">Booked By</TableCell>
//                 <TableCell align="left">TotalRooms</TableCell>
//                 <TableCell align="left">Email</TableCell>
//                 <TableCell align="left">Status</TableCell>
//                 <TableCell align="left"></TableCell>
//               </TableRow>
//             </TableHead>
//             <TableBody style={{ color: "white" }}>
//               {rows.map((row) => (
//                 <TableRow
//                   key={row.Hotel}
//                   sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
//                 >
//                   <TableCell component="th" scope="row">
//                     {row.Hotel}
//                   </TableCell>
//                   <TableCell align="left">{row.BookedAt}</TableCell>
//                   <TableCell align="left">{row.BookedBy}</TableCell>
//                   <TableCell align="left">{row.TotalRooms}</TableCell>
//                   <TableCell align="left">{row.Email}</TableCell>
//                   <TableCell align="left">
//                     {/* <span className="status" style={makeStyle(row.status)}>{row.status}</span> */}
//                   </TableCell>
//                   {/* <TableCell align="left" className="Details">Details</TableCell> */}
//                 </TableRow>
//               ))}
//             </TableBody>
//           </Table>
//         </TableContainer>
//       </div>
//   );
// }
