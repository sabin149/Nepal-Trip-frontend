import React from 'react'
import "../Home/footer.css"
import {Link} from "react-router-dom"

const Footer = () => {
  return (
    <footer className="mainfooter" role="contentinfo">
    <div className="footer-middle">
      <div className="container">
        <div className="row">
          <div className="col-md-3 col-sm-6">
            <div className="footer-pad">
              <h6>Our Product</h6>
              <ul className="list-unstyled">
                <li><Link to="#">Hotels</Link></li>
                <li><Link to="#">Flights</Link></li>
              </ul>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="footer-pad">
              <h6>About Nepal Trip</h6>
              <ul className="list-unstyled">
                <li><Link to="#">About Us</Link></li>
                <li><Link to="#">Blog</Link></li>
                <li><Link to="#">Contact Us</Link></li>
                <li><Link to="#">Terms of Service</Link></li>
                <li><Link to="#">FAQs</Link></li>
              </ul>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
              <div className="footer-pad">
              <h6>Help & Support</h6>
              <ul className="list-unstyled">
                  <div className="contact">
                <li><Link to="#"> <i className='fab fa-viber'> | </i> </Link> 
                <Link to='#'> <i className="fa-brands fa-whatsapp"> </i></Link> </li>
                <li><Link to="#"><p>9860648523/01-554875 supportNepaltrip@gmail.com</p></Link></li>
                </div>
              </ul>
                </div>
            </div>
             <div className="col-md-3 col-sm-6">
            {/* <h4>Follow Us</h4>
            <ul className="social-network social-circle">
              <li><a href="#" className="icoFacebook" title="Facebook"><i className="fa fa-facebook"></i></a></li>
              <li><a href="#" className="icoLinkedin" title="Linkedin"><i className="fa fa-linkedin"></i></a></li>
            </ul> */}
             <h6>Payment Method</h6>
             <ul className="flex footer_payment">
                 <li className="mr-2">
                    <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Khalti_Digital_Wallet_Logo.jpg/800px-Khalti_Digital_Wallet_Logo.jpg' alt="projectimages"/>
                    <img src='https://asianalp.org/wp-content/uploads/2021/06/fonepayhr-9-5-2014-17-05-53eSewa-1.jpg' alt="projectimages"/>                               
                    </li>
             </ul>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center align-content-center">
      <hr className='copyright_hr' />
          <div className="copyright pt-3">
            <p>&copy; Copyright 2022 - Nepal Trip. All rights reserved.</p>
          </div>
        </div>
    </div>
  </footer>
  )
}

export default Footer