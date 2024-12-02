import React from 'react';
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <div className="contact-info">
          <h4>Contact Us</h4>
          <p>123 Main St, Anytown, USA</p>
          <p>555-555-5555</p>
          <p>
            <a href="mailto:info@example.com">info@example.com</a>
          </p>
        </div>
        <div className="social-media-links">
          <h4>Follow Us</h4>
          <ul>
            <li>
              <a href="http://www.facebook.com/example">Facebook</a>
            </li>
            <li>
              <a href="http://www.twitter.com/example">Twitter</a>
            </li>
            <li>
              <a href="http://www.instagram.com/example">Instagram</a>
            </li>
          </ul>
        </div>
        <div className="quick-links">
          <h4>Quick Links</h4>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Products</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2023 Example Company. All rights reserved.</p>
        <p>
          Payment Options:
          <img src="/path/to/visa.png" alt="Visa" />
          <img src="/path/to/mastercard.png" alt="Mastercard" />
          <img src="/path/to/paypal.png" alt="PayPal" />
        </p>
        <p>
          Security Information: SSL Encryption | Secure Payment Processing
        </p>
      </div>
    </footer>
  );
};

export default Footer;