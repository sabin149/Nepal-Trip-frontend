import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import Hotel from "./pages/hotel/[id]";
import Header from "./components/Home/Header";
import Footer from "./components/Home/Footer";
import Hotelinfo from "./pages/hotelinfo/Hotelinfo";
import NotFound from "./components/NotFound";
import Alert from "./components/alert/Alert"
import Room from "./pages/room/[id]";
import HotelList from "./components/Home/HotelList";
import VendorTable from "./components/admin/Table/VendorTable";
import Checkout from "./pages/checkout/Checkout";
import UserListTable from "./components/admin/Table/user/UserListTable";
import EditUser from "./components/admin/Table/user/EditUser";
import ViewHotelDetails from "./components/vendor/ViewHotelDetails";
import EditHotelDetails from "./components/vendor/EditHotelDetails";
import EditRoomDetails from "./components/vendor/EditRoomDetails";
import Bookings from "./pages/bookings/bookingDetails";
import AllReviewsTable from "./components/admin/Table/review/ReviewTable";
import AllBookingsTable from "./components/admin/Table/bookings/AllBookingsTable";
import ReviewTable from "./components/vendor/components/VendorTable/review/ReviewTable";
import Profile from "./pages/profile/Profile";
import AdminDashboard from "./pages/AdminDashboard";
import VendorDashboard from "./pages/VendorDashboard";
import Home from "./pages/home/Home";
import { useEffect } from "react"
import { useDispatch } from "react-redux";
import { getHotels } from "./redux/actions/hotelAction";
import ChangePassword from "./components/auth/Changepassword";
import SendPasswordResetEmail from "./components/auth/SendPasswordResetEmail";
import ResetPassword from "./components/auth/ResetPassword";
import { createSearchInfo } from "./redux/actions/searchInfoAction";
import AllHotelBookingsTable from "./components/vendor/components/VendorTable/AllHotelBookingsTable";
// import axios from "axios";

const App = () => {
  const token = localStorage.getItem('token')
  const role = localStorage.getItem('role')
  const isAdmin = token && role === "admin"
  const isVendor = token && role === "vendor"
  const isUser = token && role === "user"

  // const refreshJwtToken = async () => {
  //   const res = await axios.get(
  //     "/api/refresh_token"
  //   );
  //   // setToken(res.data.accessToken);
  //   // console.log(res.data)
  // };

  // useEffect(() => {
  //   refreshJwtToken();
  // }, []);

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getHotels())
  }, [dispatch])

  const getSearchData = (searchData) => {
    console.log(searchData,"from app.js")
    dispatch(createSearchInfo({ searchInfo:searchData }))
  }

  // 
  return (
    <>
      <Router>
        <Alert />
        {isAdmin ? <></> : isVendor ? <></> : <Header isUser={isUser} />}
        <Routes>
          <Route path="/" element={isAdmin ? <AdminDashboard token={token} /> : isVendor ? <VendorDashboard token={token} /> :
            <Home searchData={getSearchData} />
          } />
          <Route path="/hotel" element={isVendor ? <Hotel /> : <Navigate to="/" />} />
          <Route path="/room" element={isVendor ? <Room /> : <Navigate to="/" />} />
          <Route path="/hotellist" element={<HotelList />} />
          <Route path="/hotelinfo/:id" element={<Hotelinfo />} />
          <Route path="/vendors" element={isAdmin ? <VendorTable /> : <Navigate to="/" />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/users" element={isAdmin ? <UserListTable /> : <Navigate to="/" />} />
          <Route path="/admin/edituser/:id" element={isAdmin ? <EditUser /> : <Navigate to="/" />} />
          <Route path="/viewHotel" element={isVendor ? <ViewHotelDetails /> : <Navigate to="/" />} />
          <Route path="/editHotelDetails/:id" element={isVendor ? <EditHotelDetails /> : <Navigate to="/" />} />
          <Route path="/editRoomDetails/:id" element={isVendor ? <EditRoomDetails /> : <Navigate to="/" />} />
          <Route path="/user/bookings" exact element={isUser ? <Bookings /> : <Navigate to="/" />} />
          <Route path="/vendor/reviews" element={isVendor ? <ReviewTable /> : <Navigate to="/" />} />
          <Route path="/admin/reviews" element={isAdmin ? <AllReviewsTable /> : <Navigate to="/" />} />
          <Route path="/admin/bookings" element={isAdmin ? <AllBookingsTable /> : <Navigate to="/" />} />
          <Route path="/vendor/bookings" element={ isVendor ? <AllHotelBookingsTable /> : <Navigate to="/" />} />
          <Route path="/user/profile/:id" element={isUser || isVendor || isAdmin? <Profile token={token} /> : <Navigate to="/" />} />
          <Route path="/changepassword" element={ isUser || isVendor || isAdmin ? <ChangePassword token={token} /> :<Navigate to="/"/> } />
          <Route path="/send-reset-password-email" element={<SendPasswordResetEmail />} />
          <Route path="/reset-password/:id/:token" element={<ResetPassword />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        {isAdmin ? <></> : isVendor ? <></> : <Footer />}
      </Router>
    </>
  );
}

export default App;