import React from "react";

function Contact() {
  return (
    <div>
      <section id="contact" className="contact">
        <div class="container">
          <div className="section-title">
            <h2 style={{ color: "#051e63" }}>Contact Us</h2>
          </div>

          <div className="row">
            <div
              className="col-lg-6 d-flex align-items-stretch"
              data-aos="fade-up"
            >
              <div className="info-box">
                <i className="bx bx-map" style={{ color: "#051e63" }}></i>
                <h3>Our Address</h3>
                <p>Ikeja, Lagos, Nigeria</p>
              </div>
            </div>

            <div
              className="col-lg-3 d-flex align-items-stretch"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="info-box">
                <i className="bx bx-envelope" style={{ color: "#051e63" }}></i>
                <h3>Email Us</h3>
                <p>info@copafemme.com</p>
              </div>
            </div>

            <div
              className="col-lg-3 d-flex align-items-stretch"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="info-box ">
                <i
                  className="bx bx-phone-call"
                  style={{ color: "#051e63" }}
                ></i>
                <h3>Call Us</h3>
                <p>+234 909 321 4807</p>
              </div>
            </div>

            <div className="col-lg-12" data-aos="fade-up" data-aos-delay="300">
              <form
                action=""
                id="profileForm"
                className="profile-form"
                method="post"
                novalidate
              >
                <div className="form-row">
                  <div class="col-lg-6 form-group">
                    <input
                      type="text"
                      name="username"
                      className="form-control"
                      id="username"
                      placeholder="Your Name"
                      data-rule="minlen:4"
                      data-msg="Please enter at least 4 chars"
                      required
                    />
                    <div className="validate"></div>
                  </div>
                  <div className="col-lg-6 form-group">
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="Your Email"
                      data-rule="email"
                      data-msg="Please enter a valid email"
                      required
                    />
                    <div className="validate"></div>
                  </div>
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    name="subject"
                    id="subject"
                    placeholder="Subject"
                    data-rule="minlen:4"
                    data-msg="Please enter at least 8 chars of subject"
                    required
                  />
                  <div className="validate"></div>
                </div>
                <div className="form-group">
                  <textarea
                    className="form-control"
                    name="message"
                    id="message"
                    rows="5"
                    data-rule="required"
                    data-msg="Please write something for us"
                    placeholder="Message"
                    required
                  ></textarea>
                  <div className="validate"></div>
                </div>
                <div className="text-center">
                  <button
                    type="submit"
                    style={{ backgroundColor: "#051e63", color: "#fff" }}
                    className="btn-profile btn"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
