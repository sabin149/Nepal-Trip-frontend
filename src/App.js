import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Register from "./pages/Register"
import Login from "./pages/Login"
import Hotel from "./pages/hotel/[id]";
import Home from "./pages/Home";
import NotFound from "./components/NotFound";
import Alert from "./components/alert/Alert"
import AdminDashboard from "./pages/AdminDashboard"
import VendorDashboard from "./pages/VendorDashboard"
import { useSelector } from "react-redux"
function App() {
  const { user } = useSelector(state => state.auth)
  // const vendorLogin=localStorage.getItem('vendorLogin')
  // const adminLogin=localStorage.getItem('adminLogin')

  const isAdmin=user && user.role==="admin"
  const isVendor=user && user.role==="vendor"
  return (
    <div >
      <Router>
        <Alert />
        <Routes>
          {
            isAdmin?
              <Route path="/" element={<AdminDashboard />} />
              :
            isVendor?
                <Route path="/" element={<VendorDashboard />} />
                :
                <Route path="/" element={<Home />} />
          }
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
         <Route path="/hotel" element={isVendor ?<Hotel />:<NotFound/>} />
          <Route path="*" element={<NotFound />} />

          
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
