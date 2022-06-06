import React, { useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import "./hotel.css";

const EditHotel = () => {
 
  return (
      
      
    <div class="container ">
      <form>
        <h2 class="text-danger text-center mt-3">Add hotel</h2>
        <div class="row">
          <div class="d-flex justify-content-around mx-0 mb-1">
            <div class="col-2">
                
              
            </div>
            <div class="col-6 add_hotel ">
            <div class="input_images">
              {
                <>
                  <div class="file_upload">
                    <div class="d-flex">
                      <h6 class='btn btn-warning text-light me-2'>Upload Images</h6>
                    </div>
                    <input
                      type="file"
                      name="file"
                      id="file"
                      multiple
                      accept="image/*,video/*"
                    
                    />
                  </div>
                </>
              }
            
            </div>

              <div class="hotel_label">
                {/* <label class="form-label">Hotel Name</label> */}
                {/* <TextField label="Hotel Name" color="warning" focused /> */}
                <TextField id="outlined-basic" label="Hotel Name" color="warning" fullWidth 
                // size="small"
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
                 variant="outlined" />
              </div>
              <div class="hotel_label">
                <label class="form-label">Hotel Email</label>
                <input
                  type="text"
                  class="form-control hotel_input"
                  id="exampleInputEmail1"
                  name="hotel_email"
                />
              </div>

              <div class="hotel_label">
                <label class="form-label">Address</label>
                <input
                  type="text"
                  class="form-control hotel_input"
                  id="exampleInputEmail1"
                  name="address"
               
                />
              </div>

              <div class="hotel_label">
                <label class="form-label">Phone Number</label>
                <input
                  type="text"
                  class="form-control hotel_input "
                  id="exampleInputEmail1"
                  name="phone"
            
                />
              </div>

              <div class="hotel_label">
                <label class="form-label">PAN.No</label>
                <input
                  type="text"
                  class="form-control hotel_input"
                  id="exampleInputEmail1"
                  name="pan_no"
                
                />
              </div>

              <div class="hotel_label">
                <label class="form-label">Price</label>
                <input
                  type="text"
                  class="form-control hotel_input"
                  id="exampleInputEmail1"
                  name="price"
                //   value={price}
                //   onChange={handleChangeInput}
                />
              </div>

              <div class="hotel_label">
                <label class="form-label">Hotel Info</label>
                <input
                  type="text"
                  class="form-control hotel_input"
                  id="exampleInputEmail1"
                  name="hotel_info"
                //   value={hotel_info}
                //   onChange={handleChangeInput}
                />
              </div>
              <div class="hotel_label">
                <label class="form-label">Hotel Facilities</label>
                <input
                  type="text"
                  class="form-control hotel_input"
                  id="exampleInputEmail1"
                  name="hotel_facilities"
                //   value={hotel_facilities}
                //   onChange={handleChangeInput}
                />
              </div>
              <div class="hotel_policies">
                <label class="form-label">Hotel Policies</label>
                <input
                  type="text"
                  class="form-control hotel_input"
                  id="exampleInputEmail1"
                  name="hotel_policies"
                //   value={hotel_policies}
                //   onChange={handleChangeInput}
                />
              </div>
              <div class="d-flex justify-content-center">
                <button
                  type="submit"
                  class="btn btn-warning w-25 mb-4 mt-4"
                >
                  Save
                </button>
              </div>
            </div>

          <div class="d-flex align-items-center justify-content-center">

        
          <div class="col-6">
            
            
          </div>
  </div>
          </div>

        </div>
      </form>
    </div>
  );
};

export default EditHotel;
