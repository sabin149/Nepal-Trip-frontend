import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import Hotel from "./pages/hotel/[id]";
import Home from "./pages/home/Home";
import Header from "./components/Home/Header";
import EHeader from "./components/Home/EHeader";
import EFooter from "./components/Home/EFooter";
import Footer from "./components/Home/Footer";
import Hotelinfo from "./pages/hotelinfo/Hotelinfo";
import NotFound from "./components/NotFound";
import Alert from "./components/alert/Alert"
import AdminDashboard from "./pages/AdminDashboard"
import VendorDashboard from "./pages/VendorDashboard"
import Room from "./pages/room/[id]";
import HotelList from "./components/Home/HotelList";
import VendorTable from "./components/admin/Table/VendorTable";
import EditHotel from "./pages/hotel/editHotel";
import EditRoom from "./components/room/EditRoom";
import Checkout from "./pages/checkout/Checkout";
import UserListTable from "./components/admin/Table/user/UserListTable";
import EditUser from "./components/admin/Table/user/EditUser";
import ViewHotelDetails from "./components/vendor/ViewHotelDetails";
import EditHotelDetails from "./components/vendor/EditHotelDetails";
import EditRoomDetails from "./components/vendor/EditRoomDetails";
import Bookings from "./pages/bookings/bookingDetails";
import EditBookingDetails from "./components/booking/EditBookingDetails";


function App() {
  const token = localStorage.getItem('token')
  const role = localStorage.getItem('role')
  const isAdmin = token && role === "admin"
  const isVendor = token && role === "vendor"
  const isUser = token && role === "user"
  // const {auth} = useSelector(state => state)
  // const isAdmin = auth.token && auth.user.role === "admin"
  // const isVendor = auth.token && auth.user.role === "vendor"
  // const token = auth.token
  return (
    <>
      <Router>
        <Alert />
        {isAdmin ? <EHeader /> : isVendor ? <EFooter /> : <Header isUser={isUser} />}
        <Routes>
          <Route path="/" element={isAdmin ? <AdminDashboard token={token} /> : isVendor ? <VendorDashboard token={token} /> :
            <Home />
          } />

          <Route path="/hotel" element={isVendor ? <Hotel /> : <Navigate to="/" />} />
          <Route path="/room" element={isVendor ? <Room /> : <Navigate to="/" />} />
          <Route path="/hotellist" element={<HotelList />} />
          <Route path="/hotelinfo/:id" element={<Hotelinfo />} />
          <Route path="/vendors" element={isAdmin ? <VendorTable /> : <Navigate to="/" />} />
          <Route path="/edithotel" element={isVendor ? <EditHotel /> : <Navigate to="/" />} />
          <Route path="/editromm" element={isVendor ? <EditRoom /> : <Navigate to="/" />} />
          <Route path="/edithotel" element={isVendor ? <EditHotel /> : <Navigate to="/" />} />
          <Route path="/editroom" element={isVendor ? <EditRoom /> : <Navigate to="/" />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/users" element={isAdmin ? <UserListTable /> : <Navigate to="/" />} />
          <Route path="/admin/edituser" element={isAdmin ? <EditUser /> : <Navigate to="/" />} />
          <Route path="/viewHotel" element={isAdmin ? <ViewHotelDetails /> : <Navigate to="/" />} />
          <Route path="/editHotelDetails/:id" element={isVendor ? <EditHotelDetails /> : <Navigate to="/" />} />
          <Route path="/editRoomDetails/:id" element={isVendor ? <EditRoomDetails /> : <Navigate to="/" />} />
          <Route path="/bookings" element={isUser ? <Bookings /> : <Navigate to="/" />} />
          <Route path="/editBookingDetails" element={isUser ? <EditBookingDetails /> : <Navigate to="/" />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        {isAdmin ? <EHeader /> : isVendor ? <EFooter /> : <Footer />}
      </Router>
    </>
  );
}
export default App;