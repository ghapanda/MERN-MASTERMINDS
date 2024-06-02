import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./dashboard.css";

export default function Navbar() {
  const location = useLocation();
  const displayName = sessionStorage.getItem("displayName");

  return (
    <div className="header">
      <div className="headerT">OFFBEAT SESSIONS</div>
      <div className="headerA">
        Hello {displayName}, welcome to your admin account!
      </div>

      <div className="navbar">
        <Link
          to="/dashboardPage"
          className={location.pathname === "/dashboardPage" ? "active" : ""}
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
          className={
            location.pathname === "/memberSchedulePage" ? "active" : ""
          }
        >
          Weekly Schedule
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
          Search for Companions
        </Link>
        <Link
          to="/posts"
          className={location.pathname === "/posts" ? "active" : ""}
        >
          Make an Announcement
        </Link>
        <Link to="/" className={location.pathname === "/" ? "active" : ""}>
          Logout
        </Link>
      </div>
    </div>
  );
}
