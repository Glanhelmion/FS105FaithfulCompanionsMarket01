import React from "react";
import { Link } from "react-router-dom";
import NavbarForLoginPage from "../components/NavbarForLoginPage";
import fcmlogo from "../images/logo/fcmlogo.jpeg";
import "../styles/Login.css";

function Login() {
  return (
    <div>
      <NavbarForLoginPage />
      <div className="row">
        {/* Column for the image */}
        <div className="col-md-6">
          <img
            src={fcmlogo}
            alt="Description"
            className="img-fluid" // Bootstrap class for responsive images1`
          />
        </div>

        <div className="col-md-6">
          <div className="card custom-login-box">
            <div className="card-header p-5">Login</div>
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
                <button type="submit" className="custom-login-loginbutton">
                  Login
                </button>
                <Link to="/signup">
                  <button className="custom-login-registerbutton">
                    Don't have an account yet? Sign ups here!
                  </button>
                </Link>
                <br></br>
                <Link to="/resetpassword" style={{textDecoration: "none", color: "black"}}>
                  <em className="custom-login-forgotpassword">Forgot your password? No worries. Reset now!</em>
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
