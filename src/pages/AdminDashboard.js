import { useSelector } from 'react-redux'
import MainDash from '../components/admin/MainDash/MainDash'
import RightSide from '../components/admin/RigtSide/RightSide'
import Sidebar from '../components/admin/Sidebar'
import '../styles/dashboard.css'

function AdminDashboard() {

  const { hotel } = useSelector(state => state)
  const token = localStorage.getItem('token')

  return (
    <div className="App">
      <div className="AppGlass">
        <Sidebar/>
        <MainDash hotel={hotel} token={token}/>
        <RightSide/>
      </div>
    </div>
  );
}

export default AdminDashboard;
