import React, { useState } from "react";

function RegisterTeam() {
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [phone, setPhone] = useState("");
  // const [players, setPlayers] = useState([]);
  // const [contactPerson, setContactPerson] = useState("");
  const [successMessage, setSuccessMessage] = useState(false);
  // const [errorMessage, setErrorMessage] = useState(false);
  const [form, setForm] = useState({
    teamName: "",
    email: "",
    phoneNumber: "",
    players: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    // console.log('form', form)
    let err = {};
    if (!form.teamName) {
      err.teamName = "teamName is required";
    }
    if (!form.email) {
      err.email = "email is required";
    }
    if (!form.phoneNumber) {
      err.phoneNumber = "phoneNumber is required";
    }
    // if (!form.players) {
    //   err.players = "players is required";
    // }
    return err;
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // const registerTeam = async (data) => {
  //   await fetch(
  //     "https://api/",
  //     {
  //       method: "POST",
  //       headers: {
  //         Accept: "application/json",
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(data),
  //     }
  //   );
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch("/api", {
      method: "POST",
      body: JSON.stringify({ form }),
      headers: { "Content-Type": "application/json" },
    }).then((res) => res.json());
    console.log(res.data);
    // .then((json) => setForm(json.form));
  };

  const showError = (errorObj) => {
    let errMsg = "";
    for (let err in errorObj) {
      errMsg += `${errorObj[err]}. `;
    }
    alert(`Errors ${errMsg}`);
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
              <form className="form" onSubmit={handleSubmit}>
                {/* <div class="alert alert-success" role="alert">
                  <b>Registration successful!</b> Please check your email. Thank
                  you.
                </div> */}
                <div className="form-group">
                  <label for="">Team Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="teamName"
                    placeholder="Enter team name..."
                    onChange={handleChange}
                    value={form.teamName}
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
                    value={form.email}
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
                    value={form.phoneNumber}
                  />
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
                    value={form.players}
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
                <div class="form-group">
                  <button
                    type="sumbit"
                    className="btn btn-success"
                    name="submit"
                    value="Register"
                  >
                    Proceed
                  </button>
                  {isSubmitting ? (
                    <div
                      className="spinner-border"
                      role="status"
                      style={{ marginLeft: 10 }}
                    >
                      <span className="sr-only">Loading...</span>
                    </div>
                  ) : null}
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
