import React from 'react'
import "./Footer.css"

function Footer() {
    return (
            <div>
              <div class="main"></div>
    <footer class="footer-distributed">

      <div class="footer-left">

        <h3>Cryptostate<span></span></h3>

        <p class="footer-links">
          <a href="#">Home</a>
          ·
          <a href="#">Blog</a>
          ·
          <a href="#">Pricing</a>
          ·
          <a href="#">About</a>
          ·
          <a href="#">Faq</a>
          ·
          <a href="#">Contact</a>
        </p>

        <p class="footer-company-name">Cryptostate &copy; 2021</p>
      </div>

      <div class="footer-center">

        <div>
          <i class="fa fa-map-marker"></i>
          <p><span>India</span> State</p>
        </div>

        <div>
          <i class="fa fa-phone"></i>
          <p>+91 555 000000000</p>
        </div>

        <div>
          <i class="fa fa-envelope"></i>
          <p><a href="mailto:support@company.com">cryptostate@gmail.com
</a></p>
        </div>

      </div>

      <div class="footer-right">

        <p class="footer-company-about">
          <span>About the company</span>
          Cryptostate is a blog for web designers, web develpor  &amp; SEO Learner.
        </p>

        <div class="footer-icons">

          <a href="#"><i class="fa fa-facebook"></i></a>
          <a href="#"><i class="fa fa-twitter"></i></a>
          <a href="#"><i class="fa fa-linkedin"></i></a>
          <a href="#"><i class="fa fa-github"></i></a>

        </div>

      </div>

    </footer>
    </div>
            
    )
}

export default Footer
