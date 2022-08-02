import React, { useState } from 'react'
import { Link } from "react-router-dom"
import { login } from '../../redux/actions/authAction'
import { useDispatch } from "react-redux"
import "./auth.css"
const Login = () => {
  const initialState = { email: "", password: "" }
  const [userData, setUserData] = useState(initialState)
  const { email, password } = userData
  const [typePass, setTypePass] = useState(false)

  const dispatch = useDispatch()

  const handleChangeInput = e => {
    const { name, value } = e.target
    setUserData({ ...userData, [name]: value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    dispatch(login(userData))
  }
  return (
    <div className='auth_page' data-testid="todo-1">
      <form onSubmit={handleSubmit} id="AuthForm">
        <h3 className='text-uppercase text-center mb-4 text-warning'>LOGIN
          <span className='text-dark'>FORM</span>
        </h3>
        <hr />
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input type="email" className="form-control auth_input" id="email"
            name="email" onChange={handleChangeInput} value={email} />

        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <div className="pass">
            <input type={typePass ? "text" : "password"} className="form-control auth_input" id="password" name='password'
              onChange={handleChangeInput} value={password}
            />
            <small onClick={() => setTypePass(!typePass)}>
              {typePass ?
                <i className='fas fa-eye'></i> :
                <i className='fas fa-eye-slash'></i>
              }
            </small>
          </div>
        </div>
        <p className='my-2'>
          <Link to="/send-reset-password-email" style={{ color: "blue" }}>Forgot Password?</Link>
        </p>
        <button type="submit" className="btn btn-warning w-100 mt-2"
          disabled={email && password ? false : true}
        id="loginBtn">Login</button>
        <p className='my-2'>
          You don't have an account? <Link to="#" style={{ color: "crimson" }} data-bs-target="#exampleModal2" data-bs-toggle="modal" id="NewregisterBtn">Register Now</Link>
        </p>
      </form>
    </div>
  )
}
export default Login