
 import {useNavigate,Link} from "react-router-dom"
 import TextField from '@mui/material/TextField';

 import "./auth.css"
 const Try = () => {
     return (
       <div className='auth_page' style={{  minHeight: "90vh"}}>
         <form>
         {/* <h3 className='text-uppercase text-center mb-4 text-warning'>REGISTER  
           <span className='text-dark'>FORM</span>
           </h3> */}
           <div className="form-group">
                    <label htmlFor="fullname">Full Name</label>
                    <TextField id="outlined-basic" label="Hotel Name" color="warning" fullWidth 
                    
                    sx={{
                        '& .MuiOutlinedInput-root': {
                            '& fieldset': {
                              borderColor: 'red',
                            },
                            '&:hover fieldset': {
                              borderColor: 'yellow',
                            },
                            '&.Mui-focused fieldset': {
                              borderColor: 'green',
                            },
                          },
                      }}
                    
                    />
                    
                </div>
                <div className="form-group">
                    <label htmlFor="username">User Name</label>
                    <TextField id="outlined-basic" label="Hotel Name" color="warning" fullWidth 
                    
                    sx={{
                        '& .MuiOutlinedInput-root': {
                            '& fieldset': {
                              borderColor: 'red',
                            },
                            '&:hover fieldset': {
                              borderColor: 'yellow',
                            },
                            '&.Mui-focused fieldset': {
                              borderColor: 'green',
                            },
                          },
                      }}
                    
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail2">Email address</label>
                    <TextField id="outlined-basic" label="Hotel Name" color="warning" fullWidth 
                    
                    sx={{
                        '& .MuiOutlinedInput-root': {
                            '& fieldset': {
                              borderColor: 'red',
                            },
                            '&:hover fieldset': {
                              borderColor: 'yellow',
                            },
                            '&.Mui-focused fieldset': {
                              borderColor: 'green',
                            },
                          },
                      }}
                    
                    />
                    
                </div>

                <div className="form-group">
                    <label htmlFor="exampleInputphone">Phone Number</label>
                    <TextField id="outlined-basic" label="Hotel Name" color="warning" fullWidth 
                    
                    sx={{
                        '& .MuiOutlinedInput-root': {
                            '& fieldset': {
                              borderColor: 'red',
                            },
                            '&:hover fieldset': {
                              borderColor: 'yellow',
                            },
                            '&.Mui-focused fieldset': {
                              borderColor: 'green',
                            },
                          },
                      }}
                    
                    />
                    
                </div>

                <div className="form-group">
                    <label htmlFor="exampleInputPassword2">Password</label>
                    <div className="pass">
                        <input type=""
                        className="form-control" id="exampleInputPassword2"
                        
                        style={{background: `${alert.password ? '#fd2d6a14' : ''}`}} />
                        
                    </div>
                    <small className="form-text text-danger">
                        {alert.password ? alert.password : ''}
                    </small>
                </div>
                <div className="form-group">
                    <label htmlFor="password_confirmation">Confirm Password</label>
                    <div className="pass">
                        <input type="" 
                        className="form-control" id="password_confirmation"
                        
                        style={{background: `${alert.password_confirmation ? '#fd2d6a14' : ''}`}} />
                    
                    </div>
                    
                </div>
                <button type="submit" className="btn btn-warning w-100">
                    Register
                </button>
           <p className='my-2'>
             Already have an account? <Link to="#" style={{ color: "crimson" }} data-bs-target="#exampleModal" data-bs-toggle="modal">Login Now</Link>
           </p>
         </form>
       </div>
     )
 }
 export default Try