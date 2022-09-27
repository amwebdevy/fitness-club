import React, { useEffect } from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Waypoint } from "react-waypoint";
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import { handleOnEnter } from "../helpers/handleOnEnter";
import * as styles from "./styles/contact.module.css";
import "../sass/main.scss";

const Contact = ({ data, location }) => {
  const backgroundImgURLs = [data.bg1.publicURL, data.bg2.publicURL];
  const selectArrowURL = data.arrow.publicURL;
  const gatsbyImage = getImage(data.img1.childImageSharp.gatsbyImageData);

  useEffect(() => {
    /* set css variable */
    const section = document.querySelector(".section-3 .bg-overlay");
    section.style.setProperty("--bg2URL", "URL(" + backgroundImgURLs[1] + ")");
  }, []);

  return (
    <Layout location={location}>
      <section
        className="section-1"
        style={{ backgroundImage: `url(${backgroundImgURLs[0]})` }}
      >
        <Navbar location={location} />
        <div className="section-content section-1-content">
          <h1>let's work together</h1>
          <h3>contact us</h3>
        </div>
      </section>

      <section className="section-2">
        <div className="section-content section-2-content">
          <div className="contact-wrapper">
            <h1>let's work together</h1>
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable. There are many variations of passages of
              Lorem Ipsum available, but the majority have suffered alteration
              in some form, by injected humour, or randomised words which don't
              look even slightly believable.
            </p>
            <Waypoint
              onEnter={() => {
                handleOnEnter("contact-info-wp");
              }}
              bottomOffset="50%"
            >
              <div className="fc-contact-info" id="contact-info-wp">
                <div className="info-block">
                  <p>
                    <span className="fc-icon fc-location"></span>
                  </p>
                  <h3>
                    123 lorem ipsum, example st.{" "}
                    <span>Something, New Jersey, USA 08093</span>
                  </h3>
                </div>
                <div className="info-block">
                  <p>
                    <span className="fc-icon fc-phone"></span>
                  </p>
                  <h3>
                    call us <span>987-234-0098</span>
                  </h3>
                </div>
                <div className="info-block">
                  <p>
                    <span className="fc-icon fc-envelope"></span>
                  </p>
                  <h3>
                    mail us <span>example@examplemail.com</span>
                  </h3>
                </div>
              </div>
            </Waypoint>
          </div>
        </div>
      </section>

      <section
        className="section-3"
        style={{ backgroundImage: `url(${backgroundImgURLs[1]})` }}
      >
        <div className={`bg-overlay ${styles.bg}`}></div>
        <div className="section-content section-3-content">
          <div className="content-img">
            <GatsbyImage image={gatsbyImage} alt="Contact" />
          </div>
          <div className="contact-form-container">
            <form
              id="fcContactForm"
              className="fc-contact-form"
              action="/fitness-club/includes/contact.php"
              method="post"
            >
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  className="form-control fc-form-control"
                  id="mail-name"
                  name="name"
                />
                <small className="text-danger form-control-msg">
                  Your Name is Required
                </small>
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  className="form-control fc-form-control"
                  id="mail-email"
                  name="email"
                />
                <small className="text-danger form-control-msg">
                  Your Email is Required
                </small>
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input
                  type="text"
                  className="form-control fc-form-control"
                  id="mail-phone"
                  name="phone"
                />
                <small className="text-danger form-control-msg">
                  Your Phone Number is Required
                </small>
              </div>
              <div className="form-group">
                <label>Interested In</label>
                <select
                  name="interest"
                  id="mail-interest"
                  style={{ backgroundImage: `url(${selectArrowURL})` }}
                >
                  <option>Personal Training</option>
                  <option>Group Training</option>
                  <option>Nutrition Counseling</option>
                  <option>Online Consultation</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  name="message"
                  id="mail-message"
                  className="form-control fc-form-control"
                ></textarea>
                <small className="text-danger form-control-msg">
                  A Message is Required
                </small>
              </div>
              <div className="submit-container">
                <button
                  id="mail-submit"
                  type="submit"
                  className="fc-submit"
                  name="submit"
                >
                  <span>submit</span>
                </button>
                <small className="text-info form-control-msg js-form-submission">
                  Submission in process, please wait..
                </small>
                <small className="text-success form-control-msg js-form-success">
                  Message successfully submitted, thank you!
                </small>
                <small className="text-danger form-control-msg js-form-error">
                  There was a problem with the Contact Form, please try again!
                </small>
              </div>
              <p id="form-message"></p>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;

export const query = graphql`
  query ContactImages {
    bg1: file(relativePath: { eq: "background/contact-bg.jpg" }) {
      publicURL
    }
    bg2: file(relativePath: { eq: "background/para2.jpeg" }) {
      publicURL
    }
    img1: file(relativePath: { eq: "png/contact.png" }) {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP])
      }
    }
    arrow: file(relativePath: { eq: "png/select.png" }) {
      publicURL
    }
  }
`;
