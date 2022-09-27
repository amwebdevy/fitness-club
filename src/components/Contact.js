import React from "react";
import { graphql, Link, useStaticQuery } from "gatsby";
import { Parallax } from "react-parallax";
import { getPageName } from "../helpers/getPageName";
import * as styles from "./styles/contact.module.css";

const Contact = ({ location }) => {
  const path = location.pathname;
  const data = useStaticQuery(graphql`
    query ImageURL {
      para2: file(relativePath: { eq: "background/para2.jpeg" }) {
        publicURL
      }
    }
  `);
  const parallaxImgURL = data.para2.publicURL;

  return (
    <Parallax
      bgImage={`${parallaxImgURL}`}
      bgImageAlt="gym"
      bgClassName="para2"
    >
      <section
        className={`${
          getPageName(path) !== "home" ? "section-4" : "section-5"
        }`}
      >
        <div className="bg-overlay"></div>
        <div
          className={`section-content ${styles.content} ${
            getPageName(path) !== "home"
              ? "section-4-content"
              : "section-5-content"
          } `}
        >
          <h1>
            Interested? <span>let's get in touch</span>
          </h1>
          <Link className="fc-btn-wht" to="/contact">
            <span>contact</span>
          </Link>
        </div>
      </section>
    </Parallax>
  );
};

export default Contact;
