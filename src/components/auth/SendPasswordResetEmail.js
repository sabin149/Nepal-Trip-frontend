import { Box, Button } from "@mui/material";
import { useState } from 'react';
import { useDispatch } from "react-redux";
import { sendResetPasswordEmail } from "../../redux/actions/userAction";

const SendPasswordResetEmail = () => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      dispatch(sendResetPasswordEmail({ email }))
    }
  }

  return (
    <>
      <div className="position-relative"
        style={{ minHeight: 'calc(52vh - 70px)' }} >
        <div className="d-flex justify-content-center align-items-center">
            <div className="col-md-6 col-12">
              <p className="mt-4 h2">Reset Password</p>
              <form-group>
                <label htmlFor="email">Email Address</label>
                <input type="email" className="form-control" id="email" placeholder="Enter email" value={email} onChange={(e) => { setEmail(e.target.value) }} />
              </form-group>
              <Box textAlign='center'>
                <Button type='submit' variant='contained' sx={{ mt: 3, mb: 2, px: 5 }} onClick={handleSubmit}>Send</Button>
              </Box>
            </div>
          
        </div>
      </div>
    </>);
};

export default SendPasswordResetEmail;