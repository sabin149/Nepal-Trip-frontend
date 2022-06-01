import React from 'react'
import "../Home/footer.css"

const Footer = () => {
  return (
    <footer class="mainfooter" role="contentinfo">
    <div class="footer-middle">
      <div class="container">
        <div class="row">
          <div class="col-md-3 col-sm-6">
            <div class="footer-pad">
              <h6>Our Product</h6>
              <ul class="list-unstyled">
                <li><a href="#">Hotels</a></li>
                <li><a href="#">Flights</a></li>
              </ul>
            </div>
          </div>
          <div class="col-md-3 col-sm-6">
            <div class="footer-pad">
              <h6>About Nepal Trip</h6>
              <ul class="list-unstyled">
                <li><a href="#">About Us</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Contact Us</a></li>
                <li><a href="#">Terms of Service</a></li>
                <li><a href="#">FAQs</a></li>
              </ul>
            </div>
          </div>
          <div class="col-md-3 col-sm-6">
              <div class="footer-pad">
              <h6>Help & Support</h6>
              <ul class="list-unstyled">
                  <div class="contact">
                <li><a href="#"> <i class='fab fa-viber'> | </i> </a> 
                <a href='#'> <i class="fa-brands fa-whatsapp"> </i></a> </li>
                <li><a href="#"><p>9860648523/01-554875 supportNepaltrip@gmail.com</p></a></li>
                </div>
              </ul>
                </div>
            </div>
             <div class="col-md-3 col-sm-6">
            {/* <h4>Follow Us</h4>
            <ul class="social-network social-circle">
              <li><a href="#" class="icoFacebook" title="Facebook"><i class="fa fa-facebook"></i></a></li>
              <li><a href="#" class="icoLinkedin" title="Linkedin"><i class="fa fa-linkedin"></i></a></li>
            </ul> */}
             <h6>Payment Method</h6>
             <ul class="flex footer_payment">
                 <li class="mr-2">
                    <img src='https://www.xceltrip.com.np/1d10d595525eff1ba9a6994a8e61fede.png' alt=""/>
                    <img src='https://www.xceltrip.com.np/360850cdcfd7acf0c2e2b362284634a1.png' alt=""/>                               
                    </li>
             </ul>
          </div>
        </div>
      </div>
      <div class="row">
          <div class="col-md-12 copy">
            <p class="text-center">&copy; Copyright 2022 - Nepal Trip. All rights reserved.</p>
          </div>
        </div>
    </div>
  </footer>
  )
}

export default Footer