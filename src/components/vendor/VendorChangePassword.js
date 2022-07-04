import React, { useState} from 'react'
const VendorChangePassword = () => {
    const initialState = {
        vnpassword: '', vcpassword: '',
    }
    const [userData,setUserData] = useState(initialState)
    const [typeVPass, setTypeVPass] = useState(false)
    const [typeVCPass, setTypeVCfPass] = useState(false)
    const { vnpassword,vcpassword } = userData

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
              type={typeVPass ? "text" : "vnpassword"}
              className="form-control"
              id="exampleInputPassword2"
              onChange={handleChangeInput}
              value={vnpassword}
              
              name="vnpassword"
              
            />
            <small onClick={() => setTypeVPass(!typeVPass)}>
              {typeVPass ? (
                <i className="fas fa-eye mt-1"></i>
              ) : (
                <i className="fas fa-eye-slash mt-1"></i>
              )}
            </small>
          </div>
          
        </div>
        <div className="form-group">
          <label htmlFor="vcpassword">Confirm Password</label>
          <div className="pass">
            <input
              type={typeVCPass ? "text" : "vnpassword"}
              className="form-control"
              id="vcpassword"
              onChange={handleChangeInput}
              value={vcpassword}
              name="vcpassword"
              
            />
            <small onClick={() => setTypeVCfPass(!typeVCPass)}>
              {typeVCPass ? (
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
export default VendorChangePassword;