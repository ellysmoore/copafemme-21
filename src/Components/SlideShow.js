import React from "react";
import { Link } from "react-router-dom";
import img1 from "../img/slide/slide-1.jpg";
import img2 from "../img/slide/slide-2.jpg";
import img3 from "../img/slide/slide-3.jpg";

function SlideShow() {
  return (
    <div>
      <section id="hero">
        <div className="hero-container">
          <div
            id="heroCarousel"
            className="carousel slide carousel-fade"
            data-ride="carousel"
          >
            <ol
              className="carousel-indicators"
              id="hero-carousel-indicators"
            ></ol>

            <div className="carousel-inner" role="listbox">
              {/* <!-- Slide 1 --> */}
              <div className="carousel-item active" style={{backgroundImage: "url("+img1+")"}}>
                <div className="carousel-container">
                  <div className="carousel-content container">
                    <h2 className="animated fadeInDown">
                      <span>
                        C<i className="icofont-soccer"></i>PA FEMME
                      </span>
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
                  backgroundImage: "url("+img2+")"
                }}
              >
                <div className="carousel-container">
                  <div className="carousel-content container">
                    <h2 className="animated fadeInDown">
                      RAISE MONEY FOR CHARITY
                    </h2>
                    <p className="animated fadeInUp">
                      We Aim To Support Various Female Focused Causes In Nigeria
                      And All Profits Generated Will Be Donated To Charity.
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

              {/* <!-- Slide 3 --> */}
              <div
                className="carousel-item"
                style={{
                  backgroundImage: "url("+img3+")"
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
                    <Link
                      to="#about"
                      className="btn-get-started animated fadeInUp scrollto"
                      style={{ backgroundColor: "#051e63" }}
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <Link
              className="carousel-control-prev"
              to="#heroCarousel"
              role="button"
              data-slide="prev"
            >
              <span
                className="carousel-control-prev-icon icofont-rounded-left"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Previous</span>
            </Link>
            <Link
              className="carousel-control-next"
              to="#heroCarousel"
              role="button"
              dataSlide="next"
            >
              <span
                class="carousel-control-next-icon icofont-rounded-right"
                aria-hidden="true"
              ></span>
              <span class="sr-only">Next</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SlideShow;
