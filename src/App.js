import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Register from "./pages/Register"
import Login from "./pages/Login"
import Hotel from "./pages/hotel/[id]";
import Home from "./pages/Home";
import NotFound from "./components/NotFound";
import Alert from "./components/alert/Alert"
function App() {
  return (
    <div >
      <Router>
      <Alert/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/hotel" element={<Hotel />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
