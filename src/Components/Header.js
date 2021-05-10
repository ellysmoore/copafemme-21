import React from "react";
import { Link } from "react-router-dom";

function Header() {
  const logo = require("../img/logo.png");

  return (
    <div>
      <section id="topbar" className="d-none d-lg-block">
        <div className="container clearfix">
          <div className="contact-info float-left">
            <i className="icofont-envelope" style={{ color: "#051e63" }}></i>
            <Link to="mailto:info@copafemme.com">info@copafemme.com</Link>
            <i className="icofont-phone" style={{ color: "#051e63" }}></i> +234 909
            321 4807
          </div>
          <div className="social-links float-right">
            <Link to="https://twitter.com/copafemme_?s=11" className="twitter">
              <i className="icofont-twitter"></i>
            </Link>
            <Link to="#" className="facebook">
              <i className="icofont-facebook"></i>
            </Link>
            <Link
              to="https://www.instagram.com/copafemme_/?igshid=12hneodp3zuft"
              className="instagram"
            >
              <i className="icofont-instagram"></i>
            </Link>
            <Link
              to="https://www.youtube.com/watch?v=IfTaPIVKE38&t=32s"
              className="instagram"
            >
              <i className="icofont-youtube"></i>
            </Link>
          </div>
        </div>
      </section>

      <header id="header">
        <div className="container">
          <div className="logo float-left">
            {/* <h1 className="text-light"><a href="index.html"><span>Mamba</span></a></h1> */}
            <a href="index.html" style={{ color: "#051e63" }}>
              <img src={logo} alt="" className="img-fluid" />
              Young Females in Sports Foundation
            </a>
          </div>

          <nav className="nav-menu float-right d-none d-lg-block">
            <ul>
              <li className="active">
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="gallery">Gallery</Link>
              </li>
              <li>
                <Link to="/team">Team</Link>
              </li>
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
              <li>
                <Link to="/register-team">Register Team</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
}

export default Header;
