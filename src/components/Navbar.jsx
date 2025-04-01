import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

//helo
const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="logo">EduVerse</h1>
      <ul className="nav-links">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/course"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            Courses
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/blog"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            Blog
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            About Us
          </NavLink>
        </li>
      </ul>
      <div className="auth-buttons">
        <button className="login">Log-in</button>
        <button className="signup">Sign Up</button>
      </div>
    </nav>
  );
};

export default Navbar;
