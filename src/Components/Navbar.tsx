import { useState } from "react";
import { IoIosNotificationsOutline } from "react-icons/io";
import profilePic from "../assets/image 4.png";
import { FaCaretDown } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";
import logo from "../assets/Group.svg";
import "../Styles/Navbar.css";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";

function Navbar() {
  const [showResponsiveNav, setShowResponsiveNav] = useState(false);

  return (
    <div className="navbar">
      <img src={logo} alt="" className="dashboard-logo" />
      {showResponsiveNav ? (
        <ul className="nav-links-responsive">
          <Link to="/" className="list">
            <li className="navsel2">Switch Organization</li>
          </Link>
          <Link to="/about" className="list">
            <li className="navsel2">Dashboard</li>
          </Link>
          <Link to="/services" className="list">
            <li className="navsel2">Notification</li>
          </Link>
          <Link to="/projects" className="list">
            <li className="navsel2">Users</li>
          </Link>
          <Link to="/contact-us" className="list">
            <li className="navsel2">Guarantors</li>
          </Link>
          <Link to="/contact-us" className="list">
            <li className="navsel2">Loans</li>
          </Link>
          <Link to="/contact-us" className="list">
            <li className="navsel2">Decision Models</li>
          </Link>
          <Link to="/contact-us" className="list">
            <li className="navsel2">Savings</li>
          </Link>
          <Link to="/contact-us" className="list">
            <li className="navsel2">Loan Requests</li>
          </Link>
          <Link to="/contact-us" className="list">
            <li className="navsel2">Whitelist</li>
          </Link>
          <Link to="/contact-us" className="list">
            <li className="navsel2">Karma</li>
          </Link>
          <Link to="/contact-us" className="list">
            <li className="navsel2">Organization</li>
          </Link>
          <Link to="/contact-us" className="list">
            <li className="navsel2">Loan Products</li>
          </Link>
          <Link to="/contact-us" className="list">
            <li className="navsel2">Savings Product</li>
          </Link>
          <Link to="/contact-us" className="list">
            <li className="navsel2">Fees and Charges</li>
          </Link>
          <Link to="/contact-us" className="list">
            <li className="navsel2">Transactions</li>
          </Link>
          <Link to="/contact-us" className="list">
            <li className="navsel2">Services</li>
          </Link>
          <Link to="/contact-us" className="list">
            <li className="navsel2">Service Account</li>
          </Link>
          <Link to="/contact-us" className="list">
            <li className="navsel2">Settlement</li>
          </Link>
          <Link to="/contact-us" className="list">
            <li className="navsel2">Reports</li>
          </Link>
          <Link to="/contact-us" className="list">
            <li className="navsel2">References</li>
          </Link>
          <Link to="/contact-us" className="list">
            <li className="navsel2">Fees and Pricing</li>
          </Link>
          <Link to="/contact-us" className="list">
            <li className="navsel2">Audit Logs</li>
          </Link>
        </ul>
      ) : (
        <>
          <form action="" className="search-form">
            <input
              type="text"
              placeholder="Search for anything"
              className="input-navbar"
            />
            <button className="search-button">
              <IoSearchOutline className="search-icon-" />
            </button>
          </form>
          <div className="navbar-end">
            <a>Docs</a>
            <IoIosNotificationsOutline className="notification-icon" />
            <div className="navbar-profile">
              <img src={profilePic} alt="" className="profile-pic" />
              <div className="profile-name">Adedeji</div>
              <FaCaretDown className="caretdown" />
            </div>
          </div>
        </>
      )}
      <div
        className="burger"
        onClick={() => setShowResponsiveNav(!showResponsiveNav)}
      >
        <FaBars color="#213F7D" />
      </div>
    </div>
  );
}

export default Navbar;
