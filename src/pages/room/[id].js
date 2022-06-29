import { useSelector } from "react-redux"
import CreateRoom from "../../components/room/CreateRoom"

const Room = () => {

  const { hotel } = useSelector(state => state)

  return (
    <div>
          <CreateRoom hotel={hotel} key={hotel._id} />
    </div>
  )
}

export default Room