import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./dashboard.css";

export default function NavbarNotAmin() {
  const location = useLocation();
  const displayName = sessionStorage.getItem("displayName");

  return (
    <div className="header">
      <div className="headerT">OFFBEAT SESSIONS</div>
      <div className="headerA">
        Hello {displayName}, welcome to your account!
      </div>

      <div className="navbar">
        <Link to="/" className={location.pathname === "/" ? "active" : ""}>
          Home
        </Link>
        <Link
          to="/dashboardPage"
          className={location.pathname === "/dashboardPage" ? "active" : ""}
        >
          Dashboard
        </Link>

        <Link
          to="/memberSchedulePage"
          className={
            location.pathname === "/memberSchedulePage" ? "active" : ""
          }
        >
          Schedule
        </Link>
        <Link
          to="/profile"
          className={location.pathname === "/profile" ? "active" : ""}
        >
          Profile
        </Link>
        <Link
          to="/searchbar"
          className={location.pathname === "/searchbar" ? "active" : ""}
        >
          Search for Companions{" "}
        </Link>
        <Link to="/" className={location.pathname === "/" ? "active" : ""}>
          Logout
        </Link>
      </div>
    </div>
  );
}
