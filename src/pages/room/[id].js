import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import CreateRoom from "../../components/room/CreateRoom"
import { getHotels } from "../../redux/actions/hotelAction"

const Room = () => {
  const dispatch = useDispatch()
  const token = localStorage.getItem("token")



  useEffect(() => {
    dispatch(getHotels(token))
  }, [token, dispatch]);
  const { hotel } = useSelector(state => state)

  return (
    <div>
     
          <CreateRoom hotel={hotel} key={hotel._id} />

    </div>
  )
}

export default Room