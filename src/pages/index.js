import React from "react";
import { graphql, Link } from "gatsby";
import { Waypoint } from "react-waypoint";
import { Parallax } from "react-parallax";
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import Contact from "../components/Contact";
import { handleOnEnter } from "../helpers/handleOnEnter";
import "../sass/main.scss";

const Home = ({ data, location }) => {
  const backgroundImgURLs = [
    data.bg1.publicURL,
    data.bg2.publicURL,
    data.bg3.publicURL,
  ];
  const parallaxImgURL = data.para1.publicURL;

  return (
    <Layout location={location}>
      <section
        className="section-1"
        style={{ backgroundImage: `url(${backgroundImgURLs[0]})` }}
      >
        <Navbar location={location} />
        <div className="section-content section-1-content">
          <h1>
            premium <span>fitness training</span>
          </h1>
          <h3>your path to success</h3>
          <Link className="fc-btn-wht" to="/contact">
            <span>sign up</span>
          </Link>
        </div>
      </section>

      <section className="section-2">
        <div
          className="section-container"
          style={{ backgroundImage: `url(${backgroundImgURLs[1]})` }}
        >
          <Waypoint
            onEnter={() => {
              handleOnEnter("section-2-wp");
            }}
            bottomOffset="50%"
          >
            <div
              className="section-content section-2-content"
              id="section-2-wp"
            >
              <h1>Achieve your greatness.</h1>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable.
              </p>
              <Link className="fc-btn-blk" to="/services">
                <span>learn more</span>
              </Link>
            </div>
          </Waypoint>
        </div>
      </section>

      <Parallax
        bgImage={`${parallaxImgURL}`}
        bgImageAlt="weightlifting"
        bgClassName="para1"
      >
        <section className="section-3">
          <div className="bg-overlay"></div>
          <div className="section-content section-3-content">
            <div className="fc-info">
              <p>
                <span className="fc-icon fc-stopwatch"></span>
              </p>
              <h1>fast results</h1>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable.
              </p>
            </div>
            <div className="fc-info">
              <p>
                <span className="fc-icon fc-heart"></span>
              </p>
              <h1>healthier lifestyle</h1>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable.
              </p>
            </div>
            <div className="fc-info">
              <p>
                <span className="fc-icon fc-group"></span>
              </p>
              <h1>private sessions</h1>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable.
              </p>
            </div>
          </div>
        </section>
      </Parallax>

      <section className="section-4">
        <div
          className="section-container"
          style={{ backgroundImage: `url(${backgroundImgURLs[2]})` }}
        >
          <Waypoint
            onEnter={() => {
              handleOnEnter("section-4-wp");
            }}
            bottomOffset="50%"
          >
            <div
              className="section-content section-4-content"
              id="section-4-wp"
            >
              <h1>meet the trainers</h1>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable.
              </p>
              <Link className="fc-btn-blk" to="/about">
                <span>learn more</span>
              </Link>
            </div>
          </Waypoint>
        </div>
      </section>
      <Contact location={location} />
    </Layout>
  );
};

export default Home;

export const query = graphql`
  query HomeImages {
    bg1: file(relativePath: { eq: "background/home-bg.jpg" }) {
      publicURL
    }
    bg2: file(relativePath: { eq: "background/home-bg2.jpg" }) {
      publicURL
    }
    bg3: file(relativePath: { eq: "background/home-bg3.jpg" }) {
      publicURL
    }
    para1: file(relativePath: { eq: "background/para1.jpg" }) {
      publicURL
    }
  }
`;
