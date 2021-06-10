import React from "react";
import { Link } from "react-router-dom";
import img1 from "../img/slide/slide-1.jpg";
import img2 from "../img/slide/slide-2.jpg";
import img3 from "../img/slide/slide-3.jpg";

function SlideShow() {
  const slides = [
    {
      id: 1,
      img: img1,
      text1: "WELCOME TO COPAFEMME",
      text2:
        "We are a non-profit organisation that creates a safe and encouraging space for young women in Nigeria to express their athletic skills and be celebrated.",
    },
    {
      id: 2,
      img: img2,
      text1: "RAISE MONEY FOR CHARITY",
      text2:
        "We Aim To Support Various Female Focused Causes In Nigeria and All Profits Generated Will Be Donated To Charity.",
    },
    {
      id: 3,
      img: img3,
      text1: "CELEBRATE TALENTED YOUNG WOMEN IN SPORTS",
      text2:
        "We aim to celebrate talented young women in sports through acknowledging them and giving awards.",
    },
  ];
  return (
    <div>
      <section id="hero">
        <div className="hero-container">
          <div
            id="heroCarousel"
            className="carousel slide carousel-fade"
            data-ride="carousel"
          >
            <ol className="carousel-indicators" id="hero-carousel-indicators"></ol>

            <div className="carousel-inner" role="listbox">
              {/* <!-- Slide 1 --> */}
              <div
                className="carousel-item active"
                style={{
                  backgroundImage: `url(require("../img/slide/slide-1.jpg"))`,
                }}
              >
                <div className="carousel-container">
                  <div className="carousel-content container">
                      <h2 className="animated fadeInDown">
                        {/* <span>
                        C<i className="icofont-soccer"></i>PA FEMME
                      </span> */}
                      </h2>
                    <p className="animated fadeInUp">
                      We are a non-profit organisation that creates a safe and
                      encouraging space for young women in Nigeria to express
                      their athletic skills and be celebrated.
                    </p>
                    <Link
                      to="/about"
                      className="btn-get-started animated fadeInUp scrollto"
                      style={{ backgroundColor: "#051e63" }}
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </div>

              {/* <!-- Slide 2 --> */}
              <div
                className="carousel-item"
                style={{
                  backgroundImage: `url(require("../img/slide/slide-2.jpg"))`,
                }}
              >
                <div className="carousel-container">
                  <div className="carousel-content container">
                    <h2 className="animated fadeInDown">RAISE MONEY FOR CHARITY</h2>
                    <p className="animated fadeInUp">
                      We Aim To Support Various Female Focused Causes In Nigeria
                      And All Profits Generated Will Be Donated To Charity.
                    </p>
                    <a
                      href="#about"
                      className="btn-get-started animated fadeInUp scrollto"
                      style={{ backgroundColor: "#051e63" }}
                    >
                      Read More
                    </a>
                  </div>
                </div>
              </div>

              {/* <!-- Slide 3 --> */}
              <div
                className="carousel-item"
                style={{
                  backgroundImage: `url(require("../img/slide/slide-3.jpg"))`,
                }}
              >
                <div className="carousel-container">
                  <div className="carousel-content container">
                    <h2 className="animated fadeInDown">
                      CELEBRATE TALENTED YOUNG WOMEN IN SPORTS
                    </h2>
                    <p className="animated fadeInUp">
                      We aim to celebrate talented young women in sports through
                      acknowledging them and giving awards.
                    </p>
                    <a
                      href="#about"
                      className="btn-get-started animated fadeInUp scrollto"
                      style={{ backgroundColor: "#051e63" }}
                    >
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <a
              className="carousel-control-prev"
              href="#heroCarousel"
              role="button"
              data-slide="prev"
            >
              <span
                className="carousel-control-prev-icon icofont-rounded-left"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="carousel-control-next"
              href="#heroCarousel"
              role="button"
              data-slide="next"
            >
              <span
                className="carousel-control-next-icon icofont-rounded-right"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SlideShow;
