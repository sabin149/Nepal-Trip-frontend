import React from 'react'
import "./profile.css"

const Profile = () => {
  return (
    <>
    <div className='col-4 bg-dark'>
        <h3>hello 1</h3>
    </div>

     <div className="card user-profile m-auto">
        <div className="card-body">
          <div className="mt-2 text-center profile">
            <h3 style={{ textDecoration:"underline" }}>Profile</h3>

            <div className="col-md-4 d-block m-auto mt-4 mb-4 img-holder">
              <img
              className="rounded-circle"
                src="https://celebmezzo.com/wp-content/uploads/2020/05/Rajesh-Hamal.jpg"
                alt="Profile_Image"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  
                }}
              />
            </div>

            <div className="profile-input">
              <div>
                <input className="name mb-4" placeholder="FullName"></input>
              </div>

              <div>
                <input className="name mb-4" placeholder="UserName"></input>
              </div>

              <div>
                <input className="name mb-4" placeholder="Email"></input>
              </div>

              <div>
                <input className="name mb-4" placeholder="Contact"></input>
              </div>
            </div>

            <div className=" d-flex m-auto col-md-4">
              <label htmlFor="male" className="radio-label">
                Male:{" "}
                <input
                  className="radio"
                  type="radio"
                  id="male"
                  name="gender"
                  value="male"
                  defaultChecked
                />
              </label>
              <label htmlFor="female" className="radio-label">
                Female:{" "}
                <input
                  className="radio"
                  type="radio"
                  id="female"
                  name="gender"
                  value="female"
                />
              </label>
              <label htmlFor="other" className="radio-label">
                Other:{" "}
                <input
                  className="radio"
                  type="radio"
                  id="other"
                  name="gender"
                  value="other"
                />
              </label>
            </div>
            <button type="submit" className="btn btn-warning mt-3 mb-3">
              Register
            </button>
          </div>
        </div>
      </div></>
  )
}

export default Profile