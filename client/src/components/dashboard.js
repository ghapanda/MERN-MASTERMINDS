import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./dashboard.css";

export default function Navbar() {
  const location = useLocation();

  return (
    <div className="navbar">
      <Link to="/" className={location.pathname === "/" ? "active" : ""}>
        Log Out
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
      <Link to="/profile" className={location.pathname === "/profile" ? "active" : ""}>
        Profile
      </Link>
      <Link
        to="/searchbar"
        className={location.pathname === "/searchbar" ? "active" : ""}
      >
        Community
      </Link>
    </div>
  );
}
