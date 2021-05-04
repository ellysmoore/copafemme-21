import React from "react";

function RegisterTeam() {
  return (
    <div>
      <section id="contact" className="contact">
        <div className="container">
          <div className="section-title">
            <h2 style={{ color: "#051e63" }}>Register Team</h2>
          </div>

          <div className="card">
            <div className="card-body">
              <form className="form" action="#" method="post">
                {/* <div class="alert alert-success" role="alert">
                  <b>Registration successful!</b> Please check your email. Thank
                  you.
                </div> */}
                <div className="form-group">
                  <label for="">Team Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="team_name "
                    name="team_name"
                    placeholder="Enter team name..."
                  />
                </div>
                <div className="form-group">
                  <label for="">Contact Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    placeholder="Enter contact email..."
                    required
                  />
                </div>
                <div className="form-group">
                  <label for="">Contact Phone Number</label>
                  <input
                    type="text"
                    className="form-control"
                    id="phone_number"
                    name="phone_number"
                    placeholder="Enter contact phone number..."
                    required
                  />
                </div>
                <div className="form-group">
                  <label for="">
                    Names Of Players (7players each) skip if you do not have a
                    team
                  </label>
                  <textarea
                    name="player_names"
                    id="player_names"
                    rows="8"
                    className="form-control"
                    cols="80"
                    placeholder="Jane Done, Rose Mary, ..."
                  />
                </div>
                <div className="form-group">
                  <input
                    type="radio"
                    name="terms"
                    value="Yes"
                    id="terms"
                    required
                  />{" "}
                  I have read and accept the terms and conditions
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
