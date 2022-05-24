import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Register from "./pages/Register"
import Hotel from "./pages/hotel/[id]";
function App() {
  return (
    <div >
      <Router>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/createhotel" element={<Hotel />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
