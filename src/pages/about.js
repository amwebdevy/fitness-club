import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Waypoint } from "react-waypoint";
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import Contact from "../components/Contact";
import { handleOnEnter } from "../helpers/handleOnEnter";
import "../sass/main.scss";

const About = ({ data, location }) => {
  const backgroundImgURLs = [data.bg1.publicURL, data.bg2.publicURL];
  const gatsbyImages = [
    getImage(data.img1.childImageSharp.gatsbyImageData),
    getImage(data.img2.childImageSharp.gatsbyImageData),
    getImage(data.img3.childImageSharp.gatsbyImageData),
    getImage(data.img4.childImageSharp.gatsbyImageData),
  ];
  return (
    <Layout location={location}>
      <section
        className="section-1"
        style={{ backgroundImage: `url(${backgroundImgURLs[0]})` }}
      >
        <Navbar location={location} />
        <div className="section-content section-1-content">
          <h1>meet our team</h1>
          <h3>meet our team</h3>
        </div>
      </section>

      <section className="section-2">
        <div className="section-content section-2-content">
          <Waypoint
            onEnter={() => {
              handleOnEnter("about-wrapper-wp");
            }}
            bottomOffset="50%"
          >
            <div className="about-wrapper" id="about-wrapper-wp">
              <h1>about us</h1>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable. There are many variations of passages of
                Lorem Ipsum available, but the majority have suffered alteration
                in some form, by injected humour, or randomised words which
                don't look even slightly believable.
              </p>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable. There are many variations of passages of
                Lorem Ipsum available, but the majority have suffered alteration
                in some form, by injected humour, or randomised words which
                don't look even slightly believable.
              </p>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable.{" "}
              </p>
            </div>
          </Waypoint>
          <div className="content-img">
            <GatsbyImage image={gatsbyImages[0]} alt="About Us" />
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
            <h1>our team</h1>
            <div className="about-block">
              <div className="content-img">
                <GatsbyImage image={gatsbyImages[1]} alt="Person 1" />
              </div>
              <div className="content-wrap">
                <div className="about-content">
                  <h2>Example Name</h2>
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which don't
                    look even slightly believable.
                  </p>
                </div>
                <div className="about-social">
                  <ul>
                    <li>
                      <a href="#" className="fc-icon fc-facebook"></a>
                    </li>
                    <li>
                      <a href="#" className="fc-icon fc-instagram"></a>
                    </li>
                    <li>
                      <a href="#" className="fc-icon fc-twitter"></a>
                    </li>
                    <li>
                      <a href="#" className="fc-icon fc-linkedin"></a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="block-alt">
              <div className="about-block">
                <div className="content-img">
                  <GatsbyImage image={gatsbyImages[2]} alt="Person 2" />
                </div>
                <div className="content-wrap">
                  <div className="about-content">
                    <h2>Example Name</h2>
                    <p>
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form, by injected humour, or randomised words which
                      don't look even slightly believable.
                    </p>
                  </div>
                  <div className="about-social">
                    <ul>
                      <li>
                        <a href="#" className="fc-icon fc-facebook"></a>
                      </li>
                      <li>
                        <a href="#" className="fc-icon fc-instagram"></a>
                      </li>
                      <li>
                        <a href="#" className="fc-icon fc-twitter"></a>
                      </li>
                      <li>
                        <a href="#" className="fc-icon fc-linkedin"></a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="about-block">
              <div className="content-img">
                <GatsbyImage image={gatsbyImages[3]} alt="Person 3" />
              </div>
              <div className="content-wrap">
                <div className="about-content">
                  <h2>Example Name</h2>
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which don't
                    look even slightly believable.
                  </p>
                </div>
                <div className="about-social">
                  <ul>
                    <li>
                      <a href="#" className="fc-icon fc-facebook"></a>
                    </li>
                    <li>
                      <a href="#" className="fc-icon fc-instagram"></a>
                    </li>
                    <li>
                      <a href="#" className="fc-icon fc-twitter"></a>
                    </li>
                    <li>
                      <a href="#" className="fc-icon fc-linkedin"></a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Contact location={location} />
    </Layout>
  );
};

export default About;

export const query = graphql`
  query AboutImages {
    bg1: file(relativePath: { eq: "background/about-bg.jpg" }) {
      publicURL
    }
    bg2: file(relativePath: { eq: "background/para2.jpeg" }) {
      publicURL
    }
    img1: file(relativePath: { eq: "png/about-us.png" }) {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP])
      }
    }
    img2: file(relativePath: { eq: "png/person-1.png" }) {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP])
      }
    }
    img3: file(relativePath: { eq: "png/person-2.png" }) {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP])
      }
    }
    img4: file(relativePath: { eq: "png/person-3.png" }) {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP])
      }
    }
  }
`;
