import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from "react-router-dom"
import { login } from '../../redux/actions/authAction'
import { useDispatch, useSelector } from "react-redux"
import "./auth.css"
const Login = () => {
  const initialState = { email: "", password: "" }
  const [userData, setUserData] = useState(initialState)
  const { email, password } = userData
  const [typePass, setTypePass] = useState(false)
  const { auth } = useSelector(state => state)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  useEffect(() => {
    if (auth.token) navigate("/")
  }, [auth.token, navigate])
  const handleChangeInput = e => {
    const { name, value } = e.target
    setUserData({ ...userData, [name]: value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    dispatch(login(userData))
  }
  return (
    <div className='auth_page'>
      <form onSubmit={handleSubmit}>
        <h3 className='text-uppercase text-center mb-4 text-warning'>LOGIN
          <span className='text-dark'>FORM</span>
        </h3>
        <hr />
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1"
            name="email" onChange={handleChangeInput} value={email} />

        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <div className="pass">
            <input type={typePass ? "text" : "password"} className="form-control" id="exampleInputPassword1" name='password'
              onChange={handleChangeInput} value={password}
            />
            <small onClick={() => setTypePass(!typePass)}>
              {typePass ?

                <span class="material-symbols-rounded">
                  visibility
                </span> :
                <span class="material-symbols-rounded">
                  visibility_off

                </span>


              }
            </small>
          </div>
        </div>
        <p className='my-2'>
          <Link to="/register" style={{ color: "blue" }}>Forgot Password?</Link>
        </p>
        <button type="submit" className="btn btn-warning w-100 mt-2"
          disabled={email && password ? false : true}
        >Login</button>
        <p className='my-2'>
          You don't have an account? <Link to="#" style={{ color: "crimson" }} data-bs-target="#exampleModal2" data-bs-toggle="modal">Register Now</Link>
        </p>
      </form>
    </div>
  )
}
export default Login