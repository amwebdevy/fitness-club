import React from "react";
import { graphql, Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Waypoint } from "react-waypoint";
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import Contact from "../components/Contact";
import Slider from "../components/slider/Slider";
import { handleOnEnter } from "../helpers/handleOnEnter";
import "../sass/main.scss";

const Services = ({ data, location }) => {
  const backgroundImgURLs = [data.bg1.publicURL, data.bg2.publicURL];
  const gatsbyImage = getImage(data.img1.childImageSharp.gatsbyImageData);

  return (
    <Layout location={location}>
      <section
        className="section-1"
        style={{ backgroundImage: `url(${backgroundImgURLs[0]})` }}
      >
        <Navbar location={location} />
        <div className="section-content section-1-content">
          <h1>what we do</h1>
          <h3>our services</h3>
        </div>
      </section>

      <section className="section-2">
        <div className="section-content section-2-content">
          <Waypoint
            onEnter={() => {
              handleOnEnter("service-wrapper-wp");
            }}
            bottomOffset="50%"
          >
            <div className="service-wrapper" id="service-wrapper-wp">
              <h1>our services</h1>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable.
              </p>
              <ul>
                <li>
                  <p>
                    <span className="fc-icon fc-checkmark"></span>
                  </p>
                  <h3>private &amp; group training sessions</h3>
                </li>
                <li>
                  <p>
                    <span className="fc-icon fc-checkmark"></span>
                  </p>
                  <h3>certified fitness instruction</h3>
                </li>
                <li>
                  <p>
                    <span className="fc-icon fc-checkmark"></span>
                  </p>
                  <h3>nutrition &amp; wellness learning</h3>
                </li>
                <li>
                  <p>
                    <span className="fc-icon fc-checkmark"></span>
                  </p>
                  <h3>resistance, strength &amp; restorative training</h3>
                </li>
              </ul>
              <div className="sign-up">
                <Link className="fc-btn-blk" to="/contact">
                  <span>sign up</span>
                </Link>
              </div>
            </div>
          </Waypoint>
          <div className="content-img">
            <GatsbyImage image={gatsbyImage} alt="Our Services" />
          </div>
        </div>
      </section>

      <section className="section-3">
        <div
          className="section-container"
          style={{ backgroundImage: `url(${backgroundImgURLs[1]})` }}
        >
          <div className="bg-overlay"></div>
          <div className="section-content section-3-content">
            <Slider />
          </div>
        </div>
      </section>
      <Contact location={location} />
    </Layout>
  );
};

export default Services;

export const query = graphql`
  query ServicesImages {
    bg1: file(relativePath: { eq: "background/services-bg.jpg" }) {
      publicURL
    }
    bg2: file(relativePath: { eq: "background/para2.jpeg" }) {
      publicURL
    }
    img1: file(relativePath: { eq: "png/services.png" }) {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP])
      }
    }
  }
`;
