import React from "react";
import { Link } from "gatsby";

const Footer = () => {
  return (
    <footer className="fc-footer">
      <div className="fc-footer-wrapper">
        <div className="footer-brand">
          <div className="brand-wrapper">
            <div className="logo">
              <span className="fcicon fc-logo"></span>
            </div>
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum, you need to be sure there isn't anything embarrassing
              hidden in the middle of text.
            </p>
          </div>
        </div>
        <div className="footer-info">
          <div className="fc-footer-nav">
            <ul>
              <li>
                <Link to="/">home</Link>
              </li>
              <li>
                <Link to="/about">about</Link>
              </li>
              <li>
                <Link to="/services">services</Link>
              </li>
              <li>
                <Link to="/contact">contact</Link>
              </li>
            </ul>
          </div>

          <div className="separator"></div>

          <div className="fc-contact">
            <h2>CONTACT INFO</h2>
            <div className="info-block">
              <p>
                <span className="fc-icon fc-home"></span>
              </p>
              <h3>
                123 LOREM IPSUM, EXAMPLE St.{" "}
                <span>Something, New Jersey, USA 08093</span>
              </h3>
            </div>
            <div className="info-block">
              <p>
                <span className="fc-icon fc-phone"></span>
              </p>
              <h3>
                CALL US <span>987-234-0098</span>
              </h3>
            </div>
            <div className="info-block">
              <p>
                <span className="fc-icon fc-envelope"></span>
              </p>
              <h3>
                MAIL US <span>example@examplemail.com</span>
              </h3>
            </div>
            <div className="info-block">
              <p>
                <span className="fc-icon fc-clock"></span>
              </p>
              <h3>
                OPERATING HOURS <span>Mon - Sat 09:00am to 10:00pm</span>
              </h3>
            </div>
          </div>

          <div className="separator"></div>

          <div className="fc-social">
            <h2>FOLLOW US</h2>
            <ul>
              <li>
                <a
                  href="#"
                  className="fc-icon fc-facebook"
                  aria-label="Facebook"
                ></a>
              </li>
              <li>
                <a
                  href="#"
                  className="fc-icon fc-instagram"
                  aria-label="Instagram"
                ></a>
              </li>
              <li>
                <a
                  href="#"
                  className="fc-icon fc-youtube"
                  aria-label="Youtube"
                ></a>
              </li>
              <li>
                <a
                  href="#"
                  className="fc-icon fc-twitter"
                  aria-label="Twitter"
                ></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="copyright">
        <p>
          <small>
            Copyright &copy; {new Date().getFullYear()} Example.{" "}
            <span>All Rights Reserved</span>
          </small>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
