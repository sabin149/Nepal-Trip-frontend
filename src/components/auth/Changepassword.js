import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { changePassword } from '../../redux/actions/userAction';
import { Link } from 'react-router-dom';

const ChangePassword = ({ token }) => {
  const dispatch = useDispatch();

  const initialState = {
    opassword: "", npassword: '', cpassword: '',
  }
  const [userData, setUserData] = useState(initialState)
  const [typeOldPass, setOldTypePass] = useState(false)
  const [typePass, setTypePass] = useState(false)
  const [typeCPass, setTypeCfPass] = useState(false)
  const { opassword, npassword, cpassword } = userData

  const handleChangeInput = e => {
    const { name, value } = e.target
    setUserData({ ...userData, [name]: value })
  }
  const handlePasswordSubmit = (e) => {
    e.preventDefault()
    dispatch(changePassword({ old_password:opassword, password:npassword, password_confirmation:cpassword, token }))
  }
  
  return (
    <>
    <Link to="/" className='btn btn-outline-primary btn-sm'>Back</Link>
    <div className="auth_page mt-5"> 
      <form onSubmit={handlePasswordSubmit} className="mt-5">
        <h3 className="text-uppercase text-center text-warning">
          Change
          <span className="text-dark">Password</span>
        </h3>
        <hr />
        <div className="form-group">
          <label htmlFor="exampleInputPassword5">Old Password</label>
          <div className="pass">
            <input
              type={typeOldPass ? "text" : "password"}
              className="form-control"
              id="exampleInputPassword5"
              onChange={handleChangeInput}
              value={opassword}
              name="opassword"

            />
            <small onClick={() => setOldTypePass(!typeOldPass)}>
              {typeOldPass ? (
                <i className="fas fa-eye mt-1"></i>
              ) : (
                <i className="fas fa-eye-slash mt-1"></i>
              )}
            </small>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="exampleInputPassword7">New Password</label>
          <div className="pass">
            <input
              type={typePass ? "text" : "password"}
              className="form-control"
              id="exampleInputPassword7"
              onChange={handleChangeInput}
              value={npassword}
              name="npassword"

            />
            <small onClick={() => setTypePass(!typePass)}>
              {typePass ? (
                <i className="fas fa-eye mt-1"></i>
              ) : (
                <i className="fas fa-eye-slash mt-1"></i>
              )}
            </small>
          </div>

        </div>
        <div className="form-group">
          <label htmlFor="cpassword">Confirm Password</label>
          <div className="pass">
            <input
              type={typeCPass ? "text" : "password"}
              className="form-control"
              id="cpassword"
              onChange={handleChangeInput}
              value={cpassword}
              name="cpassword"
            />
            <small onClick={() => setTypeCfPass(!typeCPass)}>
              {typeCPass ? (
                <i className="fas fa-eye mt-1"></i>
              ) : (
                <i className="fas fa-eye-slash mt-1"></i>
              )}
            </small>
          </div>
        </div>
        <button type="submit" className="btn btn-warning w-100 mt-2 text-light">
          Change
        </button>
      </form>
    </div>
    </>
  );
};
export default ChangePassword;
