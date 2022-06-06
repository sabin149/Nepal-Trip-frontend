import MainDash from '../components/vendor/components/VendorMainDash/MainDash'
import RightSide from '../components/vendor/components/VendorRigtSide/RightSide'
import Sidebar from '../components/vendor/components/VendorSidebar'
import '../styles/dashboard.css'

function VendorDashboard() {
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

export default VendorDashboard;
