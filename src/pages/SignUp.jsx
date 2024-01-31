import React from "react";
import { Link } from "react-router-dom";
import CustomNavbar from "../components/Navbar";
import fcmlogo from "../images/logo/fcmlogo.jpeg";
import "../styles/SignUpPage.css";

function SignUp() {
  return (
    <div>
      <CustomNavbar />
      <div className="row">
        {" "}
        {/* Row containing image and form */}
        {/* Column for the image */}
        <div className="col-md-6">
          <img
            src={fcmlogo}
            alt="Description"
            className="img-fluid" // Bootstrap class for responsive images
          />
        </div>
        {/* Column for the form */}
        <div className="col-md-6">
          <div className="card custom-signup-box">
            <div className="card-header p-5">Sign up for <em className="fw-bold fs-3">FREE</em> membership!</div>
            <div className="card-body">
              <form>
                <div className="form-group p-1">
                  <label htmlFor="email">Email:</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password:</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    placeholder="Enter your password"
                  />
                </div>
                <button type="submit" className="custom-signup-registermembershipbuttton">
                  Register membership
                </button>
                <Link to="/">
                  <button className="custom-signup-takeatour">
                    Still not so sure? Take a tour in our online shop!
                  </button>
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
