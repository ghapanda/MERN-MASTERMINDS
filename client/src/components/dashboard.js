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
    </div>
  );
}
