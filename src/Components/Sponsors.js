import React from "react";
import SponsorsList from "../helpers/sponsors";
function Sponsors() {
  return (
    <div>
      <section className="contact">
        <div className="container">
          <div className="section-title">
            <h2 style={{ color: "#051e63" }}>Our Sponsors</h2>
          </div>

          <div className="row">
            {SponsorsList.map((sponsor) => (
              <div
                class="col-lg-3 d-flex align-items-stretch"
                data-aos="fade-up"
                data-aos-delay="100"
                key={sponsor.id}
              >
                <div class="info-box">
                  <img
                    src={sponsor.image}
                    style={{ height: 150, width: 150 }}
                  />
                  <h3>{sponsor.name}</h3>
                </div>
              </div>
            ))}
            {/* <div
              class="col-lg-3 d-flex align-items-stretch"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div class="info-box">
                <img
                  src="assets/img/cowrywise.jpeg"
                  alt=""
                  width="150"
                  height="150"
                />
                <h3>Cowrywise</h3>
              </div>
            </div> */}

            {/* <div
              class="col-lg-3 d-flex align-items-stretch"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div class="info-box">
                <img
                  src="assets/img/danfo.jpeg"
                  alt=""
                  width="150"
                  height="150"
                />
                <h3>Danfo Bistro & Dives</h3>
              </div>
            </div>

            <div
              class="col-lg-3 d-flex align-items-stretch"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div class="info-box">
                <img
                  src="assets/img/plug.jpeg"
                  alt=""
                  width="150"
                  height="150"
                />
                <h3>The Plug</h3>
              </div>
            </div>

            <div
              class="col-lg-3 d-flex align-items-stretch"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div class="info-box">
                <img
                  src="assets/img/sanitary.jpeg"
                  alt=""
                  width="120"
                  height="150"
                />
                <h3>Sanitary Aid Initiative</h3>
              </div>
            </div>

            <div
              class="col-lg-3 d-flex align-items-stretch"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div class="info-box">
                <img
                  src="assets/img/plus.jpeg"
                  alt=""
                  width="150"
                  height="150"
                />
                <h3>Plus TV Africa</h3>
              </div>
            </div>

            <div
              class="col-lg-3 d-flex align-items-stretch"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div class="info-box">
                <img
                  src="assets/img/brila.jpeg"
                  alt=""
                  width="200"
                  height="150"
                />
                <h3>Brila 88.9FM</h3>
              </div>
            </div> */}

            {/* <div
              class="col-lg-3 d-flex align-items-stretch"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div class="info-box">
                <img
                  src="assets/img/kayode.jpeg"
                  alt=""
                  width="200"
                  height="150"
                />
                <h3>Kayode Filani & Co.</h3>
              </div>
            </div> */}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Sponsors;
