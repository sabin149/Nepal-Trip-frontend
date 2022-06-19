import TextField from '@mui/material/TextField';
import "./hotel.css";

const EditHotel = () => {
 
  return (   
    <div className="container ">
        <div className="row">
        <div className="d-flex align-items-center justify-content-center">

            <div className="col-6 add_hotel ">
            <div className="input_images">
              {/* {
                <>
                  <div className="file_upload">
                    <div className="d-flex">
                      <h6 className='btn btn-warning text-light me-2'>Upload Images</h6>
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
              } */}
            
            </div>

              <div className="hotel_label">
                {/* <label className="form-label">Hotel Name</label> */}
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
              <div className="hotel_label">
                <label className="form-label">Hotel Email</label>
                <input
                  type="text"
                  className="form-control hotel_input"
                  id="exampleInputEmail1"
                  name="hotel_email"
                />
              </div>

              <div className="hotel_label">
                <label className="form-label">Address</label>
                <input
                  type="text"
                  className="form-control hotel_input"
                  id="exampleInputEmail1"
                  name="address"
               
                />
              </div>

              <div className="hotel_label">
                <label className="form-label">Phone Number</label>
                <input
                  type="text"
                  className="form-control hotel_input "
                  id="exampleInputEmail1"
                  name="phone"
            
                />
              </div>

              <div className="hotel_label">
                <label className="form-label">PAN.No</label>
                <input
                  type="text"
                  className="form-control hotel_input"
                  id="exampleInputEmail1"
                  name="pan_no"
                
                />
              </div>

              <div className="hotel_label">
                <label className="form-label">Price</label>
                <input
                  type="text"
                  className="form-control hotel_input"
                  id="exampleInputEmail1"
                  name="price"
                //   value={price}
                //   onChange={handleChangeInput}
                />
              </div>

              <div className="hotel_label">
                <label className="form-label">Hotel Info</label>
                <input
                  type="text"
                  className="form-control hotel_input"
                  id="exampleInputEmail1"
                  name="hotel_info"
                //   value={hotel_info}
                //   onChange={handleChangeInput}
                />
              </div>
              <div className="hotel_label">
                <label className="form-label">Hotel Facilities</label>
                <input
                  type="text"
                  className="form-control hotel_input"
                  id="exampleInputEmail1"
                  name="hotel_facilities"
                //   value={hotel_facilities}
                //   onChange={handleChangeInput}
                />
              </div>
              <div className="hotel_policies">
                <label className="form-label">Hotel Policies</label>
                <input
                  type="text"
                  className="form-control hotel_input"
                  id="exampleInputEmail1"
                  name="hotel_policies"
                //   value={hotel_policies}
                //   onChange={handleChangeInput}
                />
              </div>
              <div className="d-flex justify-content-center">
                <button
                  type="submit"
                  className="btn btn-warning w-25 mb-4 mt-4"
                >
                  Save
                </button>
              </div>
            </div>

          
          </div>

        </div>
    </div>
  );
};

export default EditHotel;
