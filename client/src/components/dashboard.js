import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./dashboard.css";

export default function dashboard() {
  return (
    <div className="Home">
      <h1 className="Title">Dashboard</h1>
      <Link
        to="/update-schedule"
        style={{ fontSize: "24px", color: "#38cce6" }}
      >
        Update Schedule
      </Link>
      <Link
        to="/memberSchedulePage"
        style={{ fontSize: "24px", color: "#38cce6" }}
      >
        Schedule
      </Link>
      <Link to="/profile" style={{ fontSize: "24px", color: "#38cce6" }}>
        Profile
      </Link>
      <Link to="/searchbar" style={{ fontSize: "24px", color: "#38cce6" }}>
        SearchBar
      </Link>
    </div>
  );
}
