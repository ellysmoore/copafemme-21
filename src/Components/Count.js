import React from "react";

function Count() {
  return (
    <div>
      <section className="counts section-bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 text-center" data-aos="fade-up">
              <div className="count-box">
                <i
                  className="icofont-simple-smile"
                  style={{ color: "#20b38e" }}
                ></i>
                <span data-toggle="counter-up">232</span>
                <p>Supporters</p>
              </div>
            </div>

            <div
              className="col-lg-3 col-md-6 text-center"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="count-box">
                <i className="icofont-gift" style={{ color: "#c042ff" }}></i>
                <span data-toggle="counter-up">21</span>
                <p>Donations</p>
              </div>
            </div>

            <div
              className="col-lg-3 col-md-6 text-center"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div className="count-box">
                <i
                  className="icofont-user-female"
                  style={{ color: "#46d1ff" }}
                ></i>
                <span data-toggle="counter-up">40</span>
                <p>Female Players</p>
              </div>
            </div>

            <div
              className="col-lg-3 col-md-6 text-center"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              <div className="count-box">
                <i
                  className="icofont-users-alt-5"
                  style={{ color: "#ffb459" }}
                ></i>
                <span data-toggle="counter-up">8</span>
                <p>Teams</p>
              </div>
            </div>
          </div>
          <section id="contact" className="contact">
            <div className="container">
              <div className="section-title">
                <h2 style={{ color: "#051e63" }}>Donations</h2>
              </div>
              <center>
                <div
                  className="col-lg-10 d-flex align-items-stretch"
                  data-aos="fade-up"
                >
                  <div className="info-box">
                    <div className="form-group">
                      <h3>Please help us by donating</h3>
                    </div>
                    <form
                      action="https://paystack.com/pay/copafemme"
                      method="post"
                      className="form"
                    >
                      <div class="form-group">
                        <button
                          type="submit"
                          name="button"
                          className="btn btn-success"
                        >
                          Donate
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </center>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
}

export default Count;
