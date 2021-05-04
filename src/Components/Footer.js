import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div>
      <footer id="footer" style={{ backgroundColor: "#051e63" }}>
        <div class="container">
          <div class="copyright">
           <p>2021
            <strong>
              <span> Copa Femme</span>
            </strong>
            .
            </p>
          </div>
          <div class="credits">
            Delivered by
            <Link to="https://techspice.com.ng/"> Techspice Limited</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
