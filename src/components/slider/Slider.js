import React, { useEffect, useState } from "react";
import SliderData from "./SliderData";
import * as styles from "./styles/slider.module.css";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);
  const quotes = SliderData();
  const slideLength = quotes.length;

  /* interval/timeout vars */
  const autoScroll = true;
  let intervalId;
  let fadeTimeoutId;
  let delay = 5000;
  let timeoutDelay = 4500;

  const nextSlide = () => {
    /**
     * reset on last index, otherwise increment count
     * (subtract slides array length by 1 to match count index position),
     */
    setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
  };

  function startInterval() {
    intervalId = setInterval(nextSlide, delay);
  }

  useEffect(() => {
    /* reset on render */
    setCurrentSlide(0);
  }, []);

  useEffect(() => {
    setFadeOut(false);
    /* initialize interval */
    if (autoScroll) {
      startInterval();
    }
    /* initialize timeout */
    fadeTimeoutId = setTimeout(function () {
      setFadeOut(true);
    }, timeoutDelay);
    /* cleanup */
    return () => {
      clearTimeout(fadeTimeoutId);
      clearInterval(intervalId);
    };
  }, [currentSlide]);

  const handleClick = (index) => {
    /* set current slide to clicked nav index */
    setCurrentSlide(index);
  };

  return (
    <div className="slide-container">
      <div className="quote-wrapper">
        {quotes.map((quote, index) => {
          return (
            <div
              className={
                index === currentSlide
                  ? `quote-block ${!fadeOut ? styles.current : ""}`
                  : `quote-block`
              }
              key={index}
            >
              {index === currentSlide && (
                <div className="quote-flex-wrap">
                  <div className="quote-image-container">
                    <div
                      className="quote-background-image"
                      style={{ backgroundImage: `url(${quote.image})` }}
                    ></div>
                  </div>
                  <div className="quote-content">
                    <p className="quote">{quote.body}</p>
                    <p>
                      <small>
                        {quote.name},
                        <br />
                        {quote.location}
                      </small>
                    </p>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
      <div className="quote-nav-container">
        <ul className="quote-nav">
          {quotes.map((quote, index) => {
            return (
              <li
                data-current={index === currentSlide ? true : false}
                key={index}
                onClick={() => handleClick(index)}
              ></li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Slider;
