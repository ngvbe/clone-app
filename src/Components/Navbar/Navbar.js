import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            BLAIR OWENS
          </Link>
          <ul className="nav-menu">
            <li className="nav-item">
              <Link to="/" className="nav-links">
                Our Properties
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-links">
                MLS Search
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/services" className="nav-links">
                Communities
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/services" className="nav-links">
                News
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/services" className="nav-links">
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/services" className="nav-links">
                About Blair
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/services" className="nav-links">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <svg
          //   className="svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          stroke="#212b36"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          fill="none"
        >
          <circle cx="12" cy="8" r="5" />
          <path d="M3,21 h18 C 21,12 3,12 3,21" />
        </svg>
      </nav>
    </>
  );
}

export default Navbar;
