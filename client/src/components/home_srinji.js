import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./home_srinji.css";

export default function HomeSchedule() {
  return (
    <div className="Home">
      <h1 className="Title">Home Page</h1>
      <Link
        to="/adminSchedulePage"
        style={{ fontSize: "24px", color: "#38cce6" }}
      >
        Admin Schedule Page
      </Link>
      <Link
        to="/memberSchedulePage"
        style={{ fontSize: "24px", color: "#38cce6" }}
      >
        Member Schedule Page
      </Link>
    </div>
  );
}
