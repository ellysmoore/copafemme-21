import React from "react";
import { Link } from "react-router-dom";

function Header() {
  const logo = require("../img/logo.png");

  return (
    <div>
      <section id="topbar" class="d-none d-lg-block">
        <div class="container clearfix">
          <div class="contact-info float-left">
            <i class="icofont-envelope" style={{ color: "#051e63" }}></i>
            <Link to="mailto:info@copafemme.com">info@copafemme.com</Link>
            <i class="icofont-phone" style={{ color: "#051e63" }}></i> +234 909
            321 4807
          </div>
          <div class="social-links float-right">
            <Link to="https://twitter.com/copafemme_?s=11" class="twitter">
              <i class="icofont-twitter"></i>
            </Link>
            <Link to="#" class="facebook">
              <i class="icofont-facebook"></i>
            </Link>
            <Link
              to="https://www.instagram.com/copafemme_/?igshid=12hneodp3zuft"
              class="instagram"
            >
              <i class="icofont-instagram"></i>
            </Link>
            <Link
              to="https://www.youtube.com/watch?v=IfTaPIVKE38&t=32s"
              class="instagram"
            >
              <i class="icofont-youtube"></i>
            </Link>
          </div>
        </div>
      </section>

      <header id="header">
        <div class="container">
          <div class="logo float-left">
            {/* <h1 class="text-light"><a href="index.html"><span>Mamba</span></a></h1> */}
            <a href="index.html" style={{ color: "#051e63" }}>
              <img src={logo} alt="" class="img-fluid" />
              Young Females in Sports Foundation
            </a>
          </div>

          <nav class="nav-menu float-right d-none d-lg-block">
            <ul>
              <li class="active">
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
