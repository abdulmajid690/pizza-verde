import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="new-footer">
      <div className="container max-w-[1200px] mx-auto px-5">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <img 
                src="/pizza-verde-logo.svg" 
                alt="Pizza Verde Logo" 
                width="60" 
                height="60"
                className="footer-logo-image"
              />
              <h3>Pizza Verde</h3>
            </div>
            <p>
              Artisan pizzas made with locally sourced ingredients and cooked to
              perfection in our stone-fired ovens.
            </p>
            <div className="social-icons">
              <a href="#"><i className="fab fa-facebook-f"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-tiktok"></i></a>
            </div>
          </div>
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul className="footer-links">
              <li><Link href="/menu">Our Menu</Link></li>
              <li><Link href="#">Current Deals</Link></li>
              <li><Link href="#">About Us</Link></li>
              <li><Link href="#">Contact Us</Link></li>
              <li><Link href="#">Careers</Link></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Contact Us</h3>
            <p><i className="fas fa-phone"></i> (123) 456-7890</p>
            <p><i className="fas fa-envelope"></i> order@pizzaverde.com</p>
            <p><i className="fas fa-map-marker-alt"></i> 123 Pizza Street, Foodville</p>
          </div>
          <div className="footer-section">
            <h3>Opening Hours</h3>
            <p>Monday - Thursday: 11am - 10pm</p>
            <p>Friday - Saturday: 11am - 11pm</p>
            <p>Sunday: 12pm - 9pm</p>
          </div>
          <div className="footer-section">
            <h3>We Accept</h3>
            <div className="payment-methods">
              <i className="fab fa-cc-visa"></i>
              <i className="fab fa-cc-mastercard"></i>
              <i className="fab fa-cc-amex"></i>
              <i className="fab fa-cc-paypal"></i>
              <i className="fab fa-cc-apple-pay"></i>
            </div>
          </div>
        </div>
        <div className="copyright">
          <p>&copy; 2024 Pizza Verde. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
