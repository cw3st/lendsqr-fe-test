import React, { useState } from "react";
import logo from "../assets/Group.svg";
import loginImg from "../assets/pablo-sign-in 1.svg";
import "../Styles/login.css";
import { Link } from "react-router-dom";

const PasswordInput: React.FC<{ placeholder?: string }> = ({ placeholder }) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div style={{ position: "relative", width: "285px" }}>
      <input
        type={showPassword ? "text" : "password"}
        placeholder={placeholder || "Password"}
        required
        className="input2"
      />
      <span
        onClick={togglePasswordVisibility}
        style={{
          position: "absolute",
          right: "10px",
          top: "50%",
          transform: "translateY(-50%)",
          cursor: "pointer",
          fontSize: "12px",
          color: "#39CDCC",
          fontWeight: 700,
          userSelect: "none",
        }}
      >
        {showPassword ? "Hide" : "Show"}
      </span>
    </div>
  );
};

function Login() {
  return (
    <div>
      <img src={logo} alt="lendsqr" className="logo" />
      <div className="image-form">
        <img src={loginImg} alt="pablo-sign-in" />
        <form className="login-form">
          <h2>Welcome!</h2>
          <div className="instructions">Enter details to login</div>
          <input type="text" className="input1" placeholder="Email" required />
          <PasswordInput placeholder="Password" />
          <div className="forgot-password">FORGOT PASSWORD</div>
          <Link to = '/Dashboard'><button type="submit">LOG IN</button></Link>
        </form>
      </div>
    </div>
  );
}

export default Login;