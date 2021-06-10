import React from "react";
import { Link } from "react-router-dom";
import dami from "../img/damilola.jpg";
import ore from "../img/ore.jpeg";
import jegede from "../img/jegede.jpeg";
import abiodun from "../img/abiodun.jpeg";
import moyo from "../img/moyo.jpeg";

function Teams() {
  return (
    <div>
      <section id="team" className="team">
        <div className="container">
          <div className="section-title">
            <h2 style={{ color: "#051e63" }}>Meet Our Team</h2>
            <p>Meet the people responsible for putting Copa Femme together.</p>
          </div>

          <div className="row">
            <div className="col-xl-3 col-lg-4 col-md-6" data-aos="fade-up">
              <div className="member">
                <div className="pic">
                  <img
                    src="assets/img/team/team-1.jpg"
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div className="member-info">
                  <h4>Filani Demilade </h4>
                  <span>Co-Founder</span>
                  <div className="social">
                    <Link to="">
                      <i className="icofont-twitter"></i>
                    </Link>
                    <Link to="">
                      <i className="icofont-instagram"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="col-xl-3 col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="member">
                <div className="pic">
                  <img src={dami} className="img-fluid" alt="" />
                </div>
                <div className="member-info">
                  <h4>Sofidiya Damilola</h4>
                  <span>Co-Founder</span>
                  <div className="social">
                    <Link to="">
                      <i claclassNamess="icofont-twitter"></i>
                    </Link>
                    <Link to="">
                      <i className="icofont-instagram"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="col-xl-3 col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="member">
                <div className="pic">
                  <img src={ore} className="img-fluid" alt="" />
                </div>
                <div className="member-info">
                  <h4>Ore-ofe Oluwajobi</h4>
                  <span>Media & Communications</span>
                  <div className="social">
                    <Link to="https://twitter.com/Oreofeloveth">
                      <i className="icofont-twitter"></i>
                    </Link>
                    <Link to="https://instagram.com/Oreofeloveth_">
                      <i className="icofont-instagram"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="col-xl-3 col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="member">
                <div className="pic">
                  <img src={jegede} className="img-fluid" alt="" />
                </div>
                <div className="member-info">
                  <h4>Jegede Olumide </h4>
                  <span>Logistics & Event Planning Head</span>
                  <div className="social">
                    <Link to="https://twitter.com/MaaziMide">
                      <i className="icofont-twitter"></i>
                    </Link>
                    <Link to="https://instagram.com/maazi_mide">
                      <i className="icofont-instagram"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="col-xl-3 col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="member">
                <div className="pic">
                  <img src={abiodun} className="img-fluid" alt="" />
                </div>
                <div className="member-info">
                  <h4>Abiodun Salami</h4>
                  <span>Human Resources Head</span>
                  <div className="social">
                    <Link to="https://twitter.com/biodunn_">
                      <i className="icofont-twitter"></i>
                    </Link>
                    <Link to="https://instagram.com/biodunn_">
                      <i className="icofont-instagram"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="col-xl-3 col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="member">
                <div className="pic">
                  <img src={moyo} className="img-fluid" alt="" />
                </div>
                <div className="member-info">
                  <h4>Moyo Adeniji</h4>
                  <span>Media & Communications</span>
                  <div className="social">
                    <Link to="#">
                      <i className="icofont-twitter"></i>
                    </Link>
                    <Link to="https://instagram.com/Moyoadeniji">
                      <i className="icofont-instagram"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Teams;
