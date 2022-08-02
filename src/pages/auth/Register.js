import React, { useState } from 'react'
import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import { register } from "../../redux/actions/authAction"
import "./auth.css"
const Register = () => {
    const dispatch = useDispatch()

    const initialState = {
        fullname: '', username: '', email: '', phone: '', password: '', password_confirmation: '', gender: 'Male', role: "",
    }
    const [userData, setUserData] = useState(initialState)
    const { fullname, username, email, phone, password, role, password_confirmation } = userData
    const [typePass, setTypePass] = useState(false)
    const [typeCfPass, setTypeCfPass] = useState(false)

    const handleChangeInput = e => {
        const { name, value } = e.target
        setUserData({ ...userData, [name]: value })
    }
    const handleSubmit = e => {
        e.preventDefault()
        dispatch(register(userData))
        window.href("/")
    }
    return (
        <div className='auth_page' style={{ minHeight: "100vh", borderRadius: "20%" }}>
            <form onSubmit={handleSubmit} id="AuthForm">
                <h3 className='text-uppercase text-center text-warning'>REGISTER
                    <span className='text-dark'>FORM</span>
                </h3>
                <div className="form-group">
                    <label htmlFor="fullname">Full Name</label>
                    <input type="text" className="form-control" id="fullname" name="fullname"
                        onChange={handleChangeInput} value={fullname}
                        style={{ background: `${alert.fullname ? '#fd2d6a14' : ''}` }} />
                    <small className="form-text text-danger">
                        {alert.fullname ? alert.fullname : ''}
                    </small>
                </div>
                <div className="form-group">
                    <label htmlFor="username">User Name</label>
                    <input type="text" className="form-control" id="username" name="username"
                        onChange={handleChangeInput} value={username.toLowerCase().replace(/ /g, '')}
                        style={{ background: `${alert.username ? '#fd2d6a14' : ''}` }} />
                    <small className="form-text text-danger">
                        {alert.username ? alert.username : ''}
                    </small>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail2">Email address</label>
                    <input type="email" id="remail" name="email" className="form-control" 
                        onChange={handleChangeInput} value={email}
                        style={{ background: `${alert.email ? '#fd2d6a14' : ''}` }} />
                    <small className="form-text text-danger">
                        {alert.email ? alert.email : ''}
                    </small>
                </div>

                <div className="form-group">
                    <label htmlFor="exampleInputphone">Phone Number</label>
                    <input type="text" className="form-control" id="phone" name="phone"
                        onChange={handleChangeInput} value={phone}
                        style={{ background: `${alert.phone ? '#fd2d6a14' : ''}` }} />
                    <small className="form-text text-danger">
                        {alert.phone ? alert.phone : ''}
                    </small>
                </div>

                <div className="form-group">
                    <label htmlFor="exampleInputPassword2">Password</label>
                    <div className="pass">
                        <input type={typePass ? "text" : "password"}
                            className="form-control" id="password"
                            onChange={handleChangeInput} value={password} name="password"
                            style={{ background: `${alert.password ? '#fd2d6a14' : ''}` }} />
                        <small onClick={() => setTypePass(!typePass)}>
                            {typePass ?

                                <i className='fas fa-eye mt-1'></i> :
                                <i className='fas fa-eye-slash mt-1'></i>
                            }
                        </small>
                    </div>
                    <small className="form-text text-danger">
                        {alert.password ? alert.password : ''}
                    </small>
                </div>
                <div className="form-group">
                    <label htmlFor="password_confirmation">Confirm Password</label>
                    <div className="pass">
                        <input type={typeCfPass ? "text" : "password"}
                            className="form-control" id="password_confirmation"
                            onChange={handleChangeInput} value={password_confirmation} name="password_confirmation"
                            style={{ background: `${alert.password_confirmation ? '#fd2d6a14' : ''}` }} />
                        <small onClick={() => setTypeCfPass(!typeCfPass)}>
                            {typeCfPass ?
                                <i className='fas fa-eye mt-1'></i> :
                                <i className='fas fa-eye-slash mt-1'></i>}
                        </small>
                    </div>
                    <small className="form-text text-danger">
                        {alert.password_confirmation ? alert.password_confirmation : ''}
                    </small>
                </div>
                <div className=" d-flex justify-content-between mx-0 mt-1">
                    <label htmlFor="male">
                        Male: <input type="radio" id="male" name="gender"
                            value="male" defaultChecked onChange={handleChangeInput} />
                    </label>
                    <label htmlFor="female">
                        Female: <input type="radio" id="female" name="gender"
                            value="female" onChange={handleChangeInput} />
                    </label>
                    <label htmlFor="other">
                        Other: <input type="radio" id="other" name="gender"
                            value="other" onChange={handleChangeInput} />
                    </label>
                </div>
                <div className="form-group mt-1">
                    <select className="form-control" id="role" name="role" value={role} onChange={handleChangeInput} style={{ background: `${alert.role ? '#fd2d6a14' : ''}` }}>
                        <option value="">Select Role</option>
                        <option value="user">User</option>
                        <option value="vendor">Vendor</option>
                        {/* <option value="admin">Admin</option> */}
                    </select>
                    <small className="form-text text-danger">
                        {alert.role ? alert.role : ''}
                    </small>
                </div>

                <button type="submit" id="registerBtn" className="btn btn-warning w-100 mt-3">
                    Register
                </button>
                <p className='my-2'>
                    Already have an account? <Link to="#" style={{ color: "crimson" }} data-bs-target="#exampleModal" data-bs-toggle="modal">Login Now</Link>
                </p>
            </form>
        </div>
    )
}
export default Register