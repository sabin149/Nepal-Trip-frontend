import React,{useState} from 'react'
// import "../../styles/hotel.css"
import uploadImage from "../../images/Upload_Image.png"

const Hotel = () => {
  const initialState = { 
    fullname: '', username: '', email: '', phone: '' ,password: '', password_confirmation: '', gender: 'Male'
}
const [userData, setUserData] = useState(initialState)
const { hotel_name,address,phone,hotel_email,pan_number,price,hotel_info,hotel_facilities,hotel_policies, hotel_images } = userData

 const handleChangeInput = e => {
   const { name, value } = e.target
   setUserData({ ...userData, [name]: value })
 }
 const handleSubmit = e => {
   e.preventDefault()

 }
 //hotel_name,address,phone,hotel_email,pan_number,price,hotel_info,hotel_facilities,hotel_policies, hotel_images
 return (
   <div className="container ">
     <form>
  
  <div class="d-flex justify-content-between mx-0 mb-1">

    <div class="col-3">
        One of three columns
    </div>

    <div class="col-6">
      <div className='hotel_label'>
        <label class="form-label">Hotel Name</label>
        <input type="text" class="form-control hotel_input" id="exampleInputEmail1" name="hotel_name" value={hotel_name} />
      </div>

      <div className='hotel_label'>   
        <label class="form-label">Hotel Email</label>
        <input type="text" class="form-control hotel_input" id="exampleInputEmail1" name="hotel_email" value={hotel_email} />
      </div>

      <div className='hotel_label'>   
        <label class="form-label">Address</label>
        <input type="text" class="form-control hotel_input" id="exampleInputEmail1" name="address" value={address} />
      </div>

      <div className='hotel_label'>   
        <label class="form-label">Phone Number</label>
        <input type="text" class="form-control hotel_input" id="exampleInputEmail1" name="phone" value={phone} />
      </div>

      <div className='hotel_label'>   
        <label class="form-label">PAN.No</label>
        <input type="text" class="form-control hotel_input" id="exampleInputEmail1" name="pan_number" value={pan_number} />
      </div>

      <div className='hotel_label'>   
        <label class="form-label">Price</label>
        <input type="text" class="form-control hotel_input" id="exampleInputEmail1" name="price" value={price} />
      </div>

      <div className='hotel_label'>   
        <label class="form-label">Hotel Info</label>
        <input type="text" class="form-control hotel_input" id="exampleInputEmail1" name="hotel_info" value={hotel_info} />
      </div>

      <div>
        <label className='form-label'> Hotel Facilites</label>
      </div>

      <div className='d-flex justify-content-between mx-0 mb-1'>
        <div className='col-4 '>
          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
            <label class="form-check-label" for="flexCheckDefault">
                Airport Transfer
            </label>
          </div>

          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
            <label class="form-check-label" for="flexCheckDefault">
                24hr Check In
            </label>
          </div>

          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
            <label class="form-check-label" for="flexCheckDefault">
                Family
            </label>
          </div>
        </div>


        <div className='col-4'>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
          <label class="form-check-label" for="flexCheckDefault">
              Lockers
          </label>
        </div>

        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
          <label class="form-check-label" for="flexCheckDefault">
              Restaurant
          </label>
        </div>

        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
          <label class="form-check-label" for="flexCheckDefault">
              Free Wifi in All Room
          </label>
        </div>    
        </div>


        <div className='col-4'>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
          <label class="form-check-label" for="flexCheckDefault">
              Laundry Service
          </label>
        </div>

        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
          <label class="form-check-label" for="flexCheckDefault">
              Car Hire
          </label>
        </div>

        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
          <label class="form-check-label" for="flexCheckDefault">
              Early Check-In
          </label>
        </div>
        </div>

      </div >   

      <div>
        <label className='form-label'> Hotel Policies</label>

        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
          <label class="form-check-label" for="flexCheckDefault">
              Check in and Check out Policy
          </label>
        </div>

        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
          <label class="form-check-label" for="flexCheckDefault">
              Payment Method Accepted
          </label>
        </div>

        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
          <label class="form-check-label" for="flexCheckDefault">
              Child Policy
          </label>
        </div>

        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
          <label class="form-check-label" for="flexCheckDefault">
              More Policies
          </label>
        </div>
      </div>

         <div className='d-flex justify-content-center align-items-center ' >
         <button type="submit" class="btn hotel">Submit</button>
         </div>
    

    </div>

    <div class="col-3">
        
      {/* <img src={uploadImage} alt="Flowers in Chania" className='uploadimage'/> */}

      <div className='container hotel_chose'>
          <input type='file' id="file-input " accept='image/png,image/jpeg,' multiple/>
          {/* <input type="file" id="myfile" name="myfile"></input> */}
          <label for="file-input" className='choose_file'>Chhose A Photo</label>
        
      </div>

    </div>

    

  </div>

  </form>
   </div>
 )
}

export default Hotel