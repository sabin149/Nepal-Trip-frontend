import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Register from "./pages/Register"
import Login from "./pages/Login"

import Hotel from "./pages/hotel/[id]";
import Home from "./pages/Home";
import Header from "./components/Home/Header";
import Footer from "./components/Home/Footer";
import { Hotelinfo } from "./pages/Hotelinfo";

function App() {
  return (
    <div >
      <Router>
        <Header/> 
        <Routes>
          
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          


          <Route path="/login" element={<Login />} />

          <Route path="/createhotel" element={<Hotel />} />
          <Route path="/hotelinfo" element={<Hotelinfo />} />

        </Routes>
        <Footer/>
        </Router>
    </div>
  );
}

export default App;
