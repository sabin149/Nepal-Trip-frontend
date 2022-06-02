import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import Register from "./pages/Register"
import Login from "./pages/Login"
import Hotel from "./pages/hotel/[id]";
import Home from "./pages/Home";
import Header from "./components/Home/Header";
import Footer from "./components/Home/Footer";
import { Hotelinfo } from "./pages/Hotelinfo";
import NotFound from "./components/NotFound";
import Alert from "./components/alert/Alert"
import AdminDashboard from "./pages/AdminDashboard"
import VendorDashboard from "./pages/VendorDashboard"
import Room from "./pages/room/[id]";
import HotelList from "./components/Home/HotelList";
import VendormainDashboard from "./pages/VendormainDashboard";
import DataTable from "./components/admin/Try";


function App() {
  const token = localStorage.getItem('token')
  const role = localStorage.getItem('role')

  const isAdmin = token && role === "admin"
  const isVendor = token && role === "vendor"

  // const {auth} = useSelector(state => state)

  // const isAdmin = auth.token && auth.user.role === "admin"
  // const isVendor = auth.token && auth.user.role === "vendor"

  // const token = auth.token

  return (
    <div >
      <Router>
         <Alert />
        <Header/> 
       
        <Routes>
          <Route path="/" element={isAdmin ? <AdminDashboard token={token} /> : isVendor ? <VendorDashboard token={token} /> :
            <Home />
          } />
          
          <Route path="/createhotel" element={<Hotel />} />
          <Route path="/hotelinfo" element={<Hotelinfo />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={ !token? <Login />:<Navigate to="/"/>} />
          <Route path="/hotel" element={isVendor ? <Hotel /> :<Navigate to="/"/>} />
          <Route path="/room" element={isVendor ? <Room /> :<Navigate to="/"/>} />
          <Route path="/hotellist" element={<HotelList /> } />
          <Route path="*" element={<NotFound />} />
          <Route path="/mainvendor" element={<VendormainDashboard/> } />

          <Route path="/datatable" element={<DataTable/> } />


          DataTable
          
        </Routes>
        <Footer/>
        </Router>
    </div>
  );
}

export default App;


