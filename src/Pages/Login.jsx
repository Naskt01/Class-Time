import React from "react";
import { FaSignInAlt } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";

import "./Login.css";

function Login() {
  const location = useLocation();
  const navigate = useNavigate();
  const params = new URLSearchParams(location.search);
  const role = params.get("role");

  const handleSubmit = (e) => {
    e.preventDefault();

    // 🔹 Later: add actual login validation (check username/password)
    // For now: redirect straight to dashboard
    navigate("/dashboard");
  };
  return (
    <div className="login-container">
      <h1 className="login-title">ClassTime</h1>
      <p style={{ textAlign: "center" }}>Logging in as <b>{role}</b></p>
      <hr />
      <form className="login-form" onSubmit={handleSubmit}>
        <label>Username</label>
        <input type="text" placeholder="Enter username" required />
        
        <label>Password</label>
        <input type="password" placeholder="Enter password" required />
        
        <button type="submit" className="login-button">
          <FaSignInAlt className="login_icon" /> SignIn
        </button>
      </form>
    </div>
  );
}

export default Login;    