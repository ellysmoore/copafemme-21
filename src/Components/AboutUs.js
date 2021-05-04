import React from "react";
import { Link } from "react-router-dom";
import img from "../img/about.jpg";
function Aboutus() {
  // const aboutImage = require("../img/about.jpg");

  return (
    <div>
      <section id="about" className="about">
        <div className="container">
          <div className="row no-gutters">
            <div className="col-lg-6 video-box">
              <img src={img} className="img-fluid" alt="" />
              <Link
                to="https://youtu.be/IfTaPIVKE38"
                className="venobox play-btn mb-4"
                data-vbtype="video"
                data-autoplay="true"
                style={{ backgroundColor: "#051e63" }}
              ></Link>
            </div>

            <div className="col-lg-6 d-flex flex-column justify-content-center about-content">
              <div className="section-title">
                <h2 style={{ color: "#051e63" }}>About Us</h2>
                <p>
                  COPA FEMME is an all-girls football tournament in Lagos,
                  Nigeria. We are a non-profit organisation that creates a safe
                  and encouraging space for girls and women in Nigeria to
                  express their athletic skills and be celebrated.
                </p>
              </div>

              <div className="icon-box" data-aos="fade-up" data-aos-delay="100">
                <div className="icon">
                  <i
                    class="icofont-user-female"
                    style={{ color: "#051e6" }}
                  ></i>
                </div>
                <h4 className="title">
                  <Link to="">The Girls we do this for</Link>
                </h4>
                <p className="description">
                  Voluptatum deleniti atque corrupti quos dolores et quas
                  molestias excepturi sint occaecati cupiditate non provident
                </p>
              </div>

              <div className="icon-box" data-aos="fade-up" data-aos-delay="100">
                <div className="icon">
                  <i class="bx bx-gift" style={{ color: "#051e6" }}></i>
                </div>
                <h4 className="title">
                  <Link to="">What we want to offer</Link>
                </h4>
                <p className="description">
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui
                  blanditiis praesentium voluptatum deleniti atque
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="about-lists">
        <div class="container">
          <div class="text-center">
            <h2>Why we do this</h2>
          </div>

          <div class="row no-gutters">
            <div class="col-lg-4 col-md-6 content-item" data-aos="fade-up">
              <span
                class="icofont-gift text-center"
                style={{ color: "#051e63" }}
              ></span>
              <h4>RAISE MONEY FOR CHARITY</h4>
              <p>
                We Aim To Support Various Female Focused Causes In Nigeria And
                All Profits Generated Will Be Donated To Charity.
              </p>
            </div>

            <div
              class="col-lg-4 col-md-6 content-item"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <span
                class="icofont-user-female text-center"
                style={{ color: "#051e63" }}
              ></span>
              <h4>BREAK THE STEREOTYPE OF GIRLS IN SPORTS</h4>
              <p>
                We Aim To Break The Stereotype That Women Are Not Equipped For
                Sports Through Creating A Platform For Them To Show Their
                Skills.
              </p>
            </div>

            <div
              class="col-lg-4 col-md-6 content-item"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <span
                class="icofont-trophy text-center"
                style={{ color: "#051e63" }}
              ></span>
              <h4>CELEBRATE TALENTED GIRLS IN SPORTS</h4>
              <p>
                We Aim To Celebrate Talented Girls In Sports Through
                Acknowledging Them And Giving Awards.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Aboutus;
