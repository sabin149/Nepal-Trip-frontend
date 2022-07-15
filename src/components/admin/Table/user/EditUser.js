import React, { useEffect, useState } from 'react'
import { useNavigate, useLocation, Link } from 'react-router-dom'
import { GLOBALTYPES } from '../../../../redux/actions/globalTypes'
import { useDispatch } from 'react-redux'
import { checkImage } from '../../../../utils/imageUpload'
import "./profile.css"
import { updateAdminUser } from '../../../../redux/actions/userAction'
import { Paper } from '@mui/material'

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
        gender: "",
        email: "",
        role: "",
    })
    const [userData, setUserData] = useState(initialState)
    const { fullname, username, email, address, phone, gender, role } = userData

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
        dispatch(updateAdminUser({ userData, avatar, id: userDetails._id, token, defaultAvatar: userDetails.avatar }))
        navigate("/admin/users")
    }
    return (
        <div className="edit_profile">
            <Link to="/admin/users" className="btn btn-outline-primary btn-sm">Back</Link>
            <form onSubmit={handleSubmit}> <Paper elevation={3} sx={{
                padding: "20px",
                borderRadius: "10px",
                backgroundColor: "white",
                boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.2)"
            }}>
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
                    <label htmlFor="userName">UserName</label>
                    <div className="position-relative">
                        <input type="text" className="form-control" id="userName"
                            name="username" value={username} onChange={handleInput} />
                        <small className="text-danger position-absolute"
                            style={{ top: '50%', right: '5px', transform: 'translateY(-50%)' }}>
                            {username.length}/25
                        </small>
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <div className="position-relative">
                        <input type="text" className="form-control" id="fullname"
                            name="email" value={email} onChange={handleInput} />

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
                    <div className="input-group px-0">
                        <select name="gender" id="gender" value={gender}
                            className="custom-select text-capitalize form-control"
                            onChange={handleInput}>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>
                </div>

                <div className="form-group">
                    <label htmlFor="role">Role</label>
                    <div className="input-group px-0">
                        <select name="role" id="role" value={role}
                            className="custom-select text-capitalize form-control"
                            onChange={handleInput}
                            disabled={
                                role === "vendor" ? true : false
                            }>
                            <option value="user">User</option>
                            {role === "vendor" && <option value="vendor">Vendor</option>}
                            <option value="admin">Admin</option>
                        </select>
                    </div>
                </div>

                <button className="btn btn-info w-100 text-light mt-4" type="submit">Save</button></Paper>
            </form>
        </div>
    )
}




export default EditUser