import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./dashboard.css";

export default function Navbar() {
  const location = useLocation();

  return (
    <div className="navbar">
      <Link
        to="/dashboard"
        className={location.pathname === "/dashboard" ? "active" : ""}
      >
        Dashboard
      </Link>
      <Link
        to="/update-schedule"
        className={location.pathname === "/update-schedule" ? "active" : ""}
      >
        Update Schedule
      </Link>
      <Link
        to="/memberSchedulePage"
        className={location.pathname === "/memberSchedulePage" ? "active" : ""}
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
        SearchBar
      </Link>
      <Link to="/" className={location.pathname === "/" ? "active" : ""}>
        Logout
      </Link>
    </div>
  );
}
