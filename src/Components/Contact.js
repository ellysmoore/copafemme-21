import React, { useState } from "react";
import axios from "axios";

function Contact() {
  const [values, setValues] = useState({
    fullname: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isDisplayed, setIsDisplayed] = useState(false);
  const [messages, setMessages] = useState(null);
  const [disable, setDisable] = useState(false);

  function handleChange(e) {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  }

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    const data = {
      fullname: values.fullname,
      email: values.email,
      subject: values.subject,
      message: values.message,
    };

    try {
      setIsSubmitted(true);
      setDisable(true);
      const res = await axios.post("http://copafemme.com:3060/send", data);
      console.log(res);
      setMessages(res.request.response);
      setIsSubmitted(false);
      setIsDisplayed(true);
      setDisable(false);
      setValues({
        fullname: "",
        email: "",
        subject: "",
        message: "",
      });
      setTimeout(function () {
        setIsDisplayed(false);
        setMessages(null);
      }, 3000);
    } catch (err) {
      console.log(err);
    }
  };

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
              {isDisplayed && <h3 className="my-3 text-success">{messages}</h3>}
              <form
                id="profileForm"
                className="profile-form"
                novalidate
                onSubmit={(e) => onSubmitHandler(e)}
              >
                <div className="form-row">
                  <div class="col-lg-6 form-group">
                    <input
                      type="text"
                      name="fullname"
                      className="form-control"
                      id="fullname"
                      placeholder="Your Name"
                      data-rule="minlen:4"
                      data-msg="Please enter at least 4 chars"
                      onChange={handleChange}
                      value={values.fullname}
                      required
                    />
                    <div className="validate"></div>
                  </div>
                  <div className="col-lg-6 form-group">
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      id="email"
                      placeholder="Your Email"
                      data-rule="email"
                      data-msg="Please enter a valid email"
                      onChange={handleChange}
                      value={values.email}
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
                    onChange={handleChange}
                    value={values.subject}
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
                    onChange={handleChange}
                    value={values.message}
                    required
                  ></textarea>
                  <div className="validate"></div>
                </div>
                <div className="text-center">
                  <button
                    type="submit"
                    style={{ backgroundColor: "#051E63", color: "#FFF" }}
                    className="btn-profile btn"
                    disabled={disable}
                  >
                    Send Message
                  </button>
                  {isSubmitted && (
                    <div>
                      <span
                        className="spinner-border mt-3"
                        role="status"
                        style={{ color: "#051E63" }}
                      >
                        <span className="sr-only">Loading...</span>
                      </span>
                    </div>
                  )}
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
