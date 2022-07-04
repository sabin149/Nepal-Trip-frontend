import MainDash from '../components/vendor/components/VendorMainDash/MainDash'
import RightSide from '../components/vendor/components/VendorRigtSide/RightSide'
import Sidebar from '../components/vendor/components/VendorSidebar'
import '../styles/dashboard.css'
import { useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { getBookingsByHotel } from '../redux/actions/bookingAction'

function VendorDashboard() {
  const dispatch=useDispatch();
  const { hotel,booking } = useSelector(state => state)
  const token = localStorage.getItem('token')
  const userID = localStorage.getItem('userID')


  const hotelId=hotel && hotel?.hotels && hotel?.hotels.filter (hotel=>hotel?.user?._id===userID)[0]?._id;

  useEffect(() => {
    dispatch(getBookingsByHotel({ hotelId, token }));
  }, [dispatch,hotelId, token])
  return (
    <div className="App">
      <div className="AppGlass">
        <Sidebar hotel={hotel} token={token} booking={booking} />
        <MainDash hotel={hotel} token={token} booking={booking}/>
        <RightSide/>
      </div>
    </div>
  );
}

export default VendorDashboard;
