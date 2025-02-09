import React from "react";
import { Button } from "./Button";
import "./footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer-container">
      <section className="footer-subcription">
        <p className="footer-subcription-heading">
          Join the Music newsletter to receive our best Music  deals
        </p>
        <p className="footer-subcription-text">You can unsubscribe anytime</p>
        <div className="input-areas">
          <form action="">
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="footer-input"
            />
            <Button pat="/" buttonStyle="btn--outline">
              Subscribe
            </Button>
          </form>
        </div>
      </section>
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>About Us</h2>
            <Link to="/">How it works</Link>
            <Link to="/">Testimonials</Link>
            <Link to="/">Career</Link>
            <Link to="/">Investors</Link>
            <Link to="/">Terms of Service</Link>
          </div>
          <div className="footer-link-items">
            <h2>Contact Us</h2>
            <Link to="/">How it works</Link>
            <Link to="/">Testimonials</Link>
            <Link to="/">Career</Link>
            <Link to="/">Investors</Link>
            <Link to="/">Terms of Service</Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>Vidoes</h2>
            <Link to="/">Submit Video</Link>
            <Link to="/">Ambassadors</Link>
            <Link to="/">Agency</Link>
            <Link to="/">Influencer</Link>
          </div>
          <div className="footer-link-items">
            <h2>Social Media</h2>
            <Link to="/">Instagram</Link>
            <Link to="/">Facebook</Link>
            <Link to="/">Youtube</Link>
            <Link to="/">Twitter</Link>
          </div>
        </div>
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link to="/" className="social-logo">
             <img
            src="images/logo.png"
            height="150px"
            width="150px"
            alt=""
            className="fa-typo3"
          />
            </Link>
          </div>
            <small className="website-rights">Sargam c 2022</small>
            <div className="social-icons">
              <Link
                className="social-icon-link facebook"
                to="/"
                target="_blank"
              >
                <i className="fab fa-facebook-f"></i>
              </Link>
              <Link
                className="social-icon-link instagram"
                to="/"
                target="_blank"
              >
                <i className="fab fa-instagram"></i>
              </Link>
              
              <Link
                className="social-icon-link twitter"
                to="/"
                target="_blank"
              >
                <i className="fab fa-twitter"></i>
              </Link>
            </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
