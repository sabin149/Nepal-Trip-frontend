import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { getHotels } from '../redux/actions/hotelAction'
import Hoteltable from '../components/Admin/Hoteltable'
import "../styles/admin.css"

const AdminDashboard = () => {
  const dispatch = useDispatch()
  const { auth, hotel } = useSelector(state => state)

  useEffect(() => {
    dispatch(getHotels(auth.token))
  }, [auth, dispatch])


  return (
    <div className='container'>
      
    <Hoteltable hotel={hotel} auth={auth}/>

    </div>
  )
}

export default AdminDashboard