import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Register from "./pages/Register"
import Login from "./pages/Login"

import Hotel from "./pages/hotel/[id]";
import Home from "./pages/Home";

function App() {
  return (
    <div >
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          


          <Route path="/login" element={<Login />} />

          <Route path="/createhotel" element={<Hotel />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
