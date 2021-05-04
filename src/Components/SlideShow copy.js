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
        <div class="hero-container">
          <div
            id="heroCarousel"
            class="carousel slide carousel-fade"
            data-ride="carousel"
          >
            <ol class="carousel-indicators" id="hero-carousel-indicators"></ol>

            <div class="carousel-inner" role="listbox">
              {/* <!-- Slide 1 --> */}
              <div
                class="carousel-item active"
                style={{
                  backgroundImage: `url(require("../img/slide/slide-1.jpg"))`,
                }}
              >
                <div class="carousel-container">
                  <div class="carousel-content container">
                      <h2 className="animated fadeInDown">
                        {/* <span>
                        C<i class="icofont-soccer"></i>PA FEMME
                      </span> */}
                      </h2>
                    <p className="animated fadeInUp">
                      We are a non-profit organisation that creates a safe and
                      encouraging space for young women in Nigeria to express
                      their athletic skills and be celebrated.
                    </p>
                    <Link
                      to="/about"
                      class="btn-get-started animated fadeInUp scrollto"
                      style={{ backgroundColor: "#051e63" }}
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </div>

              {/* <!-- Slide 2 --> */}
              <div
                class="carousel-item"
                style={{
                  backgroundImage: `url(require("../img/slide/slide-2.jpg"))`,
                }}
              >
                <div class="carousel-container">
                  <div class="carousel-content container">
                    <h2 class="animated fadeInDown">RAISE MONEY FOR CHARITY</h2>
                    <p class="animated fadeInUp">
                      We Aim To Support Various Female Focused Causes In Nigeria
                      And All Profits Generated Will Be Donated To Charity.
                    </p>
                    <a
                      href="#about"
                      class="btn-get-started animated fadeInUp scrollto"
                      style={{ backgroundColor: "#051e63" }}
                    >
                      Read More
                    </a>
                  </div>
                </div>
              </div>

              {/* <!-- Slide 3 --> */}
              <div
                class="carousel-item"
                style={{
                  backgroundImage: `url(require("../img/slide/slide-3.jpg"))`,
                }}
              >
                <div class="carousel-container">
                  <div class="carousel-content container">
                    <h2 class="animated fadeInDown">
                      CELEBRATE TALENTED YOUNG WOMEN IN SPORTS
                    </h2>
                    <p class="animated fadeInUp">
                      We aim to celebrate talented young women in sports through
                      acknowledging them and giving awards.
                    </p>
                    <a
                      href="#about"
                      class="btn-get-started animated fadeInUp scrollto"
                      style={{ backgroundColor: "#051e63" }}
                    >
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <a
              class="carousel-control-prev"
              href="#heroCarousel"
              role="button"
              data-slide="prev"
            >
              <span
                class="carousel-control-prev-icon icofont-rounded-left"
                aria-hidden="true"
              ></span>
              <span class="sr-only">Previous</span>
            </a>
            <a
              class="carousel-control-next"
              href="#heroCarousel"
              role="button"
              data-slide="next"
            >
              <span
                class="carousel-control-next-icon icofont-rounded-right"
                aria-hidden="true"
              ></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SlideShow;
