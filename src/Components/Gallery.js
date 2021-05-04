import React from "react";
import { Link } from "react-router-dom";

function Gallery() {
  return (
    <div>
      <section id="portfolio" className="portfolio section-bg">
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="section-title">
            <h2 style={{ color: "#051e63" }}>Our Gallery</h2>
            <p>Check out our activities from last year</p>
          </div>

          <div className="row">
            <div className="col-lg-12">
              <ul id="portfolio-flters">
                <li
                  data-filter="*"
                  className="filter-active"
                  style={{ backgroundColor: "#051e63" }}
                >
                  All
                </li>
                <li data-filter=".filter-football">Football</li>
                <li data-filter=".filter-entertainment">
                  Games & Entertainments
                </li>
                <li data-filter=".filter-music">Music Performances</li>
              </ul>
            </div>
          </div>

          <div className="row portfolio-container">
            <div className="col-lg-4 col-md-6 portfolio-item filter-football">
              <div className="portfolio-wrap">
                <img
                  src="assets/img/portfolio/portfolio-1.jpg"
                  class="img-fluid"
                  alt=""
                />
                <div className="portfolio-info">
                  <h4>Football Tournament</h4>
                  <p>Football</p>
                  <div className="portfolio-links">
                    <Link
                      to="assets/img/portfolio/portfolio-1.jpg"
                      data-gall="portfolioGallery"
                      className="venobox"
                    >
                      <i class="icofont-eye"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 portfolio-item filter-music">
              <div className="portfolio-wrap">
                <img
                  src="assets/img/portfolio/portfolio-2.jpg"
                  className="img-fluid"
                  alt=""
                />
                <div class="portfolio-info">
                  <h4>Performance</h4>
                  <p>Music Performances</p>
                  <div className="portfolio-links">
                    <a
                      href="assets/img/portfolio/portfolio-2.jpg"
                      data-gall="portfolioGallery"
                      className="venobox"
                    >
                      <i class="icofont-eye"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-md-6 portfolio-item filter-football">
              <div class="portfolio-wrap">
                <img
                  src="assets/img/portfolio/portfolio-3.jpg"
                  class="img-fluid"
                  alt=""
                />
                <div class="portfolio-info">
                  <h4>Football Tournament</h4>
                  <p>Football</p>
                  <div class="portfolio-links">
                    <a
                      href="assets/img/portfolio/portfolio-3.jpg"
                      data-gall="portfolioGallery"
                      class="venobox"
                    >
                      <i class="icofont-eye"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-md-6 portfolio-item filter-entertainment">
              <div class="portfolio-wrap">
                <img
                  src="assets/img/portfolio/portfolio-7.jpg"
                  class="img-fluid"
                  alt=""
                />
                <div class="portfolio-info">
                  <h4>Entertainment</h4>
                  <p>Games & Entertainments</p>
                  <div class="portfolio-links">
                    <a
                      href="assets/img/portfolio/portfolio-7.jpg"
                      data-gall="portfolioGallery"
                      class="venobox"
                    >
                      <i class="icofont-eye"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-md-6 portfolio-item filter-music">
              <div class="portfolio-wrap">
                <img
                  src="assets/img/portfolio/portfolio-5.jpg"
                  class="img-fluid"
                  alt=""
                />
                <div class="portfolio-info">
                  <h4>Performance</h4>
                  <p>Music Performances</p>
                  <div class="portfolio-links">
                    <a
                      href="assets/img/portfolio/portfolio-5.jpg"
                      data-gall="portfolioGallery"
                      class="venobox"
                    >
                      <i class="icofont-eye"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-md-6 portfolio-item filter-football">
              <div class="portfolio-wrap">
                <img
                  src="assets/img/portfolio/portfolio-6.jpg"
                  class="img-fluid"
                  alt=""
                />
                <div class="portfolio-info">
                  <h4>Football Tournament</h4>
                  <p>Football</p>
                  <div class="portfolio-links">
                    <a
                      href="assets/img/portfolio/portfolio-6.jpg"
                      data-gall="portfolioGallery"
                      class="venobox"
                    >
                      <i class="icofont-eye"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-md-6 portfolio-item filter-entertainment">
              <div class="portfolio-wrap">
                <img
                  src="assets/img/portfolio/portfolio-4.jpg"
                  class="img-fluid"
                  alt=""
                />
                <div class="portfolio-info">
                  <h4>Entertainment</h4>
                  <p>Games & Entertainments</p>
                  <div class="portfolio-links">
                    <a
                      href="assets/img/portfolio/portfolio-4.jpg"
                      data-gall="portfolioGallery"
                      class="venobox"
                    >
                      <i class="icofont-eye"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-md-6 portfolio-item filter-entertainment">
              <div class="portfolio-wrap">
                <img
                  src="assets/img/portfolio/portfolio-8.jpg"
                  class="img-fluid"
                  alt=""
                />
                <div class="portfolio-info">
                  <h4>Entertainment</h4>
                  <p>Games & Entertainments</p>
                  <div class="portfolio-links">
                    <a
                      href="assets/img/portfolio/portfolio-8.jpg"
                      data-gall="portfolioGallery"
                      class="venobox"
                    >
                      <i class="icofont-eye"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-md-6 portfolio-item filter-music">
              <div class="portfolio-wrap">
                <img
                  src="assets/img/portfolio/portfolio-9.jpg"
                  class="img-fluid"
                  alt=""
                />
                <div class="portfolio-info">
                  <h4>Performance</h4>
                  <p>Music Performance</p>
                  <div class="portfolio-links">
                    <a
                      href="assets/img/portfolio/portfolio-9.jpg"
                      data-gall="portfolioGallery"
                      class="venobox"
                    >
                      <i class="icofont-eye"></i>
                    </a>
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

export default Gallery;
