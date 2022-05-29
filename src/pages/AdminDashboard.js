import MainDash from '../components/admin/MainDash/MainDash'
import RightSide from '../components/admin/RigtSide/RightSide'
import Sidebar from '../components/admin/Sidebar'
import '../Global.css'


function AdminDashboard() {
  return (
    <div className="App">
      <div className="AppGlass">
        <Sidebar/>
        <MainDash/>
        <RightSide/>
      </div>



    </div>
  );
}

export default AdminDashboard;
