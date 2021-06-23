import React, { useState } from "react";
import axios from "axios";

function RegisterTeam() {
  const [values, setValues] = useState({
    teamName: "",
    email: "",
    phoneNumber: "",
    playerNames: "",
    sportType: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDisplayed, setIsDisplayed] = useState(false);
  const [messages, setMessages] = useState(null);
  const [disable, setDisable] = useState(false);

  const validate = () => {
    let err = {};
    if (!values.teamName) {
      err.teamName = "team Name is required";
    }
    if (!values.email) {
      err.email = "email is required";
    }
    if (!values.phoneNumber) {
      err.phoneNumber = "phone Number is required";
    }
    if (!values.sportType) {
      err.sportType = "Sport Type is required";
    }
    return err;
  };

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    validate();
    const data = {
      teamName: values.teamName,
      email: values.email,
      phoneNumber: values.phoneNumber,
      sportType: values.sportType,
      playerNames: values.playerNames,
    };
    try {
      setIsSubmitting(true);
      const res = await axios.post("https://copafemme.com:3004/send", data);
      setMessages(res.data);
      setIsSubmitting(false);
      setIsDisplayed(true);
      setDisable(false);
      setValues({
        teamName: "",
        email: "",
        phoneNumber: "",
        sportType: "",
        playerNames: "",
      });
      setTimeout(function () {
        setIsDisplayed(false);
        setMessages(null);
      }, 3000);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      <section id="contact" className="contact">
        <div className="container">
          <div className="section-title">
            <h2 style={{ color: "#051e63" }}>Register Team</h2>
          </div>

          <div className="card">
            <div className="card-body">
              <form className="form" onSubmit={(e) => handleSubmit(e)}>
              {isDisplayed && <h3 className="my-3 text-success">{messages}</h3>}
                <div className="form-group">
                  <label for="">Team Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="teamName"
                    placeholder="Enter team name..."
                    onChange={handleChange}
                    value={values.teamName}
                  />
                </div>
                <div className="form-group">
                  <label for="">Contact Email</label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    placeholder="Enter contact email..."
                    required
                    onChange={handleChange}
                    value={values.email}
                  />
                </div>
                <div className="form-group">
                  <label for="">Contact Phone Number</label>
                  <input
                    type="text"
                    className="form-control"
                    name="phoneNumber"
                    placeholder="Enter contact phone number..."
                    required
                    onChange={handleChange}
                    value={values.phoneNumber}
                  />
                </div>
                <div className="form-group">
                  <label for="">Sport Type</label>
                  <select
                    className="form-control"
                    name="sportType"
                    placeholder="Eg Basketball"
                    required
                    onChange={handleChange}
                    value={values.sportType}
                  >
                    <option value="">Select Sport</option>
                    <option value="Football">Football</option>
                    <option value="Basketball">Basketball</option>
                  </select>
                </div>
                <div className="form-group">
                  <label for="">
                    Names Of Players (7players each) skip if you do not have a
                    team
                  </label>
                  <textarea
                    name="playerNames"
                    rows="8"
                    className="form-control"
                    cols="80"
                    placeholder="Jane Done, Rose Mary, ..."
                    onChange={handleChange}
                    value={values.playerNames}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="radio"
                    name="terms"
                    value="Yes"
                    id="terms"
                    required
                  />
                  <span> I have read and accept the terms and conditions</span>
                </div>
                <div className="form-group">
                  <button
                    type="sumbit"
                    className="btn btn-success"
                    name="submit"
                    value="Register"
                  >
                    Proceed
                  </button>
                  {isSubmitting && (
                    <div
                      className="spinner-border"
                      role="status"
                      style={{ marginLeft: 10 }}
                    >
                      <span className="sr-only">Loading...</span>
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
export default RegisterTeam;
