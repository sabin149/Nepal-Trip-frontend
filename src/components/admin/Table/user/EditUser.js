import React, { useEffect, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { GLOBALTYPES } from '../../../../redux/actions/globalTypes'
import { useDispatch } from 'react-redux'
import { checkImage } from '../../../../utils/imageUpload'
import "./profile.css"
import { updateUser } from '../../../../redux/actions/userAction'

const EditUser = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const location = useLocation()

    const userDetails = location.state.userData
    const token = localStorage.getItem('token')

    const initialState = ({
        fullname: "",
        username: "",
        address: "",
        phone: "",
        gender: ""
    })
    const [userData, setUserData] = useState(initialState)
    const { fullname, username, address, phone, gender } = userData

    const [avatar, setAvatar] = useState("");

    useEffect(() => {
        setUserData(userDetails)
    }, [userDetails])

    const handleInput = e => {
        const { name, value } = e.target
        setUserData({ ...userData, [name]: value })
    }
    const changeAvatar = (e) => {
        const file = e.target.files[0]

        const err = checkImage(file)
        if (err) return dispatch({
            type: GLOBALTYPES.ALERT, payload: { error: err }
        })
        setAvatar(file)
    }
    const handleSubmit = e => {
        e.preventDefault();
        dispatch(updateUser({ userData, avatar, id: userDetails._id, token, defaultAvatar: userDetails.avatar }))
        navigate("/users")
    }
    return (
        <div className="edit_profile">
            <form onSubmit={handleSubmit}>
                <div className="info_avatar">
                    <img src={avatar ? URL.createObjectURL(avatar) : userDetails.avatar}
                        alt="avatar" />
                    <span>
                        <i className="fas fa-camera" />
                        <p>Change</p>
                        <input type="file" name="file" id="file_up"
                            accept="image/*" onChange={changeAvatar} />
                    </span>
                </div>
                <div className="form-group">
                    <label htmlFor="fullname">FullName</label>
                    <div className="position-relative">
                        <input type="text" className="form-control" id="fullname"
                            name="fullname" value={fullname} onChange={handleInput} />
                        <small className="text-danger position-absolute"
                            style={{ top: '50%', right: '5px', transform: 'translateY(-50%)' }}>
                            {fullname.length}/25
                        </small>
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="fullname">UserName</label>
                    <div className="position-relative">
                        <input type="text" className="form-control" id="fullname"
                            name="username" value={username} onChange={handleInput} />
                        <small className="text-danger position-absolute"
                            style={{ top: '50%', right: '5px', transform: 'translateY(-50%)' }}>
                            {username.length}/25
                        </small>
                    </div>
                </div>


                <div className="form-group">
                    <label htmlFor="phone">Phone</label>
                    <input type="text" name="phone" value={phone}
                        className="form-control" onChange={handleInput} />
                </div>

                <div className="form-group">
                    <label htmlFor="address">Address</label>
                    <input type="text" name="address" value={address}
                        className="form-control" onChange={handleInput} />
                </div>

                <label htmlFor="gender">Gender</label>
                <div className="input-group px-0 mb-4">
                    <select name="gender" id="gender" value={gender}
                        className="custom-select text-capitalize"
                        onChange={handleInput}>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                    </select>
                </div>

                <button className="btn btn-info w-100" type="submit">Save</button>
            </form>
        </div>
    )
}




export default EditUser