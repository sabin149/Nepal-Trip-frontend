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
                    <img src='https://www.xceltrip.com.np/1d10d595525eff1ba9a6994a8e61fede.png' alt="projectimages"/>
                    <img src='https://www.xceltrip.com.np/360850cdcfd7acf0c2e2b362284634a1.png' alt="projectimages"/>                               
                    </li>
             </ul>
          </div>
        </div>
      </div>
      <div className="row">
          <div className="col-md-12 copy">
            <p className="text-center">&copy; Copyright 2022 - Nepal Trip. All rights reserved.</p>
          </div>
        </div>
    </div>
  </footer>
  )
}

export default Footer