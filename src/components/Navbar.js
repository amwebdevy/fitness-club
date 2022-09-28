import React, { useEffect, useState } from "react";
import { graphql, Link, useStaticQuery } from "gatsby";
import { Helmet } from "react-helmet";
import { getPageName } from "../helpers/getPageName";
import useWindowSize from "../hooks/useWindowSize";

const Navbar = ({ location }) => {
  const isBrowser = () => typeof window !== "undefined"; // check before using 'window' with SSR
  const { windowSize } = useWindowSize(isBrowser() && window);
  const [toggled, setToggled] = useState(false);
  let path = location.pathname;

  const data = useStaticQuery(graphql`
    query SiteInfo {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `);
  const { title, description } = data.site.siteMetadata;

  useEffect(() => {
    const navList = document.querySelectorAll(".fc-nav ul li");
    navList.forEach((navItem) => {
      /** set 'active' class */
      if (navItem.innerText.toLowerCase() === getPageName(path)) {
        navItem.classList.add("active");
      }
    });
  }, []);

  useEffect(() => {
    /* toggle nav on mobile breakpoint */
    if (windowSize && windowSize.innerWidth > 901) {
      setToggled(false);
    }
  }, [windowSize]);

  /* toggle mobile nav */
  const handleClick = (e) => {
    e.preventDefault();
    setToggled(toggled ? false : true);
  };

  return (
    <>
      <Helmet
        bodyAttributes={{
          style: toggled ? "overflow: hidden" : "overflow: unset",
        }}
        title={title}
        meta={[
          {
            name: "description",
            content: description,
          },
        ]}
      />
      <header className="fc-header">
        <div className="fc-header-wrapper">
          <div className="toggle">
            <a className="btn-toggle" onClick={(e) => handleClick(e)}>
              <span className="fcicon fc-burger"></span>
            </a>
          </div>
          <div className="logo">
            <Link to="/">
              <span className="fcicon fc-logo"></span>
            </Link>
          </div>
          <div className={`fc-nav ${toggled ? "close" : "open"}`}>
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
        </div>
      </header>
      <div className="bg-overlay"></div>
    </>
  );
};

export default Navbar;
