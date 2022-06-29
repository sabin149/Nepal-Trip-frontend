import React, { useState} from 'react'
const ChangePassword = () => {
    const initialState = {
        npassword: '', cpassword: '',
    }
    const [userData,setUserData] = useState(initialState)
    const [typePass, setTypePass] = useState(false)
    const [typeCPass, setTypeCfPass] = useState(false)
    const { npassword,cpassword } = userData

    const handleChangeInput = e => {
        const { name, value } = e.target
        setUserData({ ...userData, [name]: value })
    }
  return (
    <div className="auth_page">
      <form>
        <h3 className="text-uppercase text-center mb-4 text-warning">
          Change
          <span className="text-dark">Password</span>
        </h3>
        <hr />
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Old Password </label>
          <input
            type="opass"
            className="form-control auth_input"
            onChange={handleChangeInput}
            id="exampleInputPassword1"
            name="opass"
          />
        </div>

        <div className="form-group">
          <label htmlFor="exampleInputPassword2">New Password</label>
          <div className="pass">
            <input
              type={typePass ? "text" : "npassword"}
              className="form-control"
              id="exampleInputPassword2"
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
              type={typeCPass ? "text" : "npassword"}
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

        <button type="submit" className="btn btn-warning w-100 mt-2">
          Change
        </button>
      </form>
    </div>
  );
};
export default ChangePassword;
