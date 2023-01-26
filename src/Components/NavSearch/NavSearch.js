import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Navbar/Navbar.css";
import "./NavSearch.css";

function NavSearch() {
  const options = [];
  const [selectedOption, setSelectedOption] = useState("");
  return (
    <>
      <nav className="nav-search">
        {/* <div className="navbar-container"> */}
        <form>
          {/* </div>onSubmit={handleSubmit}> */}
          <ul className="nav-search-menu">
            <li className="nav-search">
              <input
                type="text"
                //   value={searchTerm}
                //   onChange={handleChange}
                placeholder="Street, City, State, or Zip"
                className="search-input"
              />
            </li>
            <li className="nav-search">
              <select
                value={selectedOption}
                // onChange={handleChange}
                className="search-input"
              >
                <option value="" disabled>
                  All Statuses
                </option>
                {options.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </li>
            <li className="nav-search">
              <select
                value={selectedOption}
                // onChange={handleChange}
                className="search-input"
              >
                <option value="" disabled>
                  All Cities
                </option>
                {options.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </li>
            <li className="nav-search">
              <select
                value={selectedOption}
                // onChange={handleChange}
                className="search-input"
              >
                <option value="" disabled>
                  All Zipcodes
                </option>
                {options.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </li>
            <li className="nav-search">
              <button type="submit">Search</button>
            </li>
            <li className="nav-search">
              <button type="submit" style={{ width: "50%" }}>
                More
              </button>
            </li>
          </ul>
        </form>
      </nav>
    </>
  );
}

export default NavSearch;
