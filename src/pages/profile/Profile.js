import React, { useEffect, useState } from 'react'
import { checkImage } from '../../utils/imageUpload'
import { useDispatch, useSelector } from 'react-redux'
import { GLOBALTYPES } from '../../redux/actions/globalTypes'
import "./profile.css"
import { getUser, updateUserProfile } from '../../redux/actions/userAction';
import { Link, useParams } from 'react-router-dom'
import ChangePassword from '../../components/auth/Changepassword'
const Profile = ({ token }) => {
    const dispatch = useDispatch()
    const { id } = useParams()
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
    const { user } = useSelector(state => state?.user)
    useEffect(() => {
        dispatch(getUser({ id, token }))
    }, [dispatch, token, id])
    useEffect(() => {
        setUserData(user)
    }, [user])
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
        dispatch(updateUserProfile({ userData, id, avatar, token, defaultAvatar: user.avatar }))
    }
    return (
        <>
            <div className="edit_user_profile"> 
            <Link to="/" className="btn btn-outline-primary btn-sm">Back</Link>
            <Link to="/changepassword" className="btn btn-outline-warning cpass">ChangePassword</Link>
            <form onSubmit={handleSubmit}>
                <div className="card user-profile m-auto mt-3">
                    <div className="card-body">
                        <div className="profile">
                            <div className="info_avatar">
                                <img src={avatar ? URL?.createObjectURL(avatar) : user?.avatar}
                                    alt="avatar" />
                                <span>
                                    <i className="fas fa-camera" />
                                    <p>Change</p>
                                    <input type="file" name="file" id="file_up"
                                        accept="image/*" onChange={changeAvatar} />
                                </span>
                            </div>
                            <div className="form-group">
                                <label htmlFor="fullname2">FullName</label>
                                <div className="position-relative">
                                    <input type="text" className="form-control"
                                        name="fullname" value={fullname} onChange={handleInput} />
                                    <small className="text-danger position-absolute"
                                        style={{ top: '50%', right: '5px', transform: 'translateY(-50%)' }}>
                                        {fullname?.length}/25
                                    </small>
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="username2">UserName</label>
                                <div className="position-relative">
                                    <input type="text" className="form-control"
                                        name="username" value={username} onChange={handleInput} />
                                    <small className="text-danger position-absolute"
                                        style={{ top: '50%', right: '5px', transform: 'translateY(-50%)' }}>
                                        {username?.length}/25
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
                            <div className="form-group">
                                <label htmlFor="gender">Gender</label>
                                <div className="input-group px-0 mb-4">
                                    <select name="gender" id="gender" value={gender}
                                        className="custom-select text-capitalize form-control"
                                        onChange={handleInput}>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                        <option value="Other">Other</option>
                                    </select>
                                </div>
                            </div>
                            <button className="btn btn-warning w-100 text-light" type="submit">Save</button>
                        </div>
                    </div>
                </div>
                </form>
            </div>
            </>
    )
}
export default Profile