import { useEffect } from 'react'
import {useDispatch, useSelector } from 'react-redux'
import MainDash from '../components/admin/MainDash/MainDash'
import RightSide from '../components/admin/RigtSide/RightSide'
import Sidebar from '../components/admin/Sidebar'
import { getBookings } from '../redux/actions/bookingAction'
import '../styles/dashboard.css'


function AdminDashboard() {
  const dispatch = useDispatch()

  const { hotel,booking } = useSelector(state => state)
  const token = localStorage.getItem('token')

  useEffect(() => {
    dispatch(getBookings({ token }))
  }, [dispatch, token])

  return (
    <div className="App">
      <div className="AppGlass"> 
        <Sidebar/>
        <MainDash hotel={hotel} token={token} />
        <RightSide hotel={hotel} booking={booking.bookings}/>
      </div>
    </div>
  );
}

export default AdminDashboard;
