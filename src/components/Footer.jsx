import React from "react";
import Subscribe from "../assests/Subscribe.png";
import Logo1 from "../assests/Logo1.png";
import Logo2 from "../assests/Logo2.png";
import Collection from "../assests/Collection.png";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          <h3>Be the first to know</h3>
          <p>Sign up for updates from Phanom.</p>
          <img src={Subscribe} alt="img" />
        </div>
        <div className="footer-top-right">
          <h3>CONTACT US</h3>
          <p>+44 221 133 5360</p>
          <p>customercare@phanom.com</p>
          <h3>Currency</h3>
          <img src={Logo1} alt="img" />
          <p>
            Transactions will be completed in Euros and a currency reference is
            available on hover.
          </p>
        </div>
      </div>
      <hr className="footer-divider" />
      <div className="footer-bottom">
        <div className="footer-bottom-left">
          <h3>Phanom</h3>
          <p>About Us</p>
          <p>Stories</p>
          <p>Artisans</p>
          <p>Boutiques</p>
          <p>Contact Us</p>
          <p>EU Compliances Docs</p>
        </div>
        <div className="footer-bottom-center">
          <h3>Quick Links</h3>
          <p>Orders & Shipping</p>
          <p>Join/Login as a Seller</p>
          <p>Payment & Pricing</p>
          <p>Return & Refunds</p>
          <p>FAQs</p>
          <p>Privacy Policy</p>
          <p>Terms & Conditions</p>
        </div>
        <div className="footer-bottom-right">
          <h3>Follow Us</h3>
          <img src={Logo2} alt="img" />
          <h1>Phanom Accepts</h1>
          <img src={Collection} alt="img" />
        </div>
      </div>
      <div className="footer-bottom-extra">
        <p>Copyright © 2024 Phanom. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
