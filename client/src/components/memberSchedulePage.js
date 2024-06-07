import React, { useState, useEffect } from "react";
import "./memberSchedulePage.css";
import { Link } from "react-router-dom";
import NavbarNotAdmin from "./dashboardNotAdmin";
import Navbar from "./dashboard";
import SERVERPORT from "./portConfig";

import axios from "axios";

function MemberSchedulePage() {
  const [sessions, setSessions] = useState([]);
  const [attendants, setAttendants] = useState(0);
  const isAdmin = sessionStorage.getItem("isAdmin") == "true" ? true : false;
  // Fetches current session data
  useEffect(() => {
    // Runs while rendering
    axios
      .get(`http://localhost:${SERVERPORT}/schedule/`)
      .then((response) => {
        setSessions(response.data);
      })
      .catch((error) => {
        // console.error("Error fetching sessions:", error);
      });
  }, [attendants]);

  // Fetches data from sessionStorage
  const addAttendant = (
    sessionIndex,
    sessionName,
    sessionDate,
    sessionLocation
  ) => {
    const token = sessionStorage.getItem("token");
    const sessionUsername = sessionStorage.getItem("username");
    if (token) {
      const data1 = {
        index: sessionIndex,
        username: sessionUsername,
      };
      axios
        .post(`http://localhost:${SERVERPORT}/schedule/addAttendant`, data1) //put localhost in a variable
        .then((response) => {
          setAttendants(attendants + 1);
        })
        .catch((error) => {
          alert("Error posting attendant");
        });
      const data2 = {
        username: sessionUsername,
        name: sessionName,
        date: sessionDate,
        location: sessionLocation,
        index: sessionIndex,
      };
      axios
        .post(`http://localhost:${SERVERPORT}/schedule/addSession`, data2) //put localhost in a variable
        .then((response) => {
          setAttendants(attendants + 1);
        })
        .catch((error) => {
          // console.error("Error posting attendant to user:", error);
        });
    }
  };

  const deleteAttendant = (
    sessionIndex,
    sessionName,
    sessionDate,
    sessionLocation
  ) => {
    const token = sessionStorage.getItem("token");
    const sessionUsername = sessionStorage.getItem("username");
    if (token) {
      const data1 = {
        index: sessionIndex,
        username: sessionUsername,
      };
      axios
        .post(`http://localhost:${SERVERPORT}/schedule/deleteAttendant`, data1) //put localhost in a variable
        .then((response) => {
          setAttendants(attendants + 1);
        })
        .catch((error) => {
          alert("Error posting attendant:", error);
        });
      const data2 = {
        username: sessionUsername,
        name: sessionName,
        date: sessionDate,
        location: sessionLocation,
      };
      axios
        .post(`http://localhost:${SERVERPORT}/schedule/deleteSession`, data2) //put localhost in a variable
        .then((response) => {
          setAttendants(attendants + 1);
        })
        .catch((error) => {
          alert("Error deleting session to user:", error);
        });
    }
  };

  return (
    <>
      {" "}
      {isAdmin ? <Navbar /> : <NavbarNotAdmin />}
      <div className="Schedule">
        <h3 className="Title">Schedule</h3>
        <div className="sessions">
          {sessions.map((session, i) => (
            <div key={i} className="session">
              <p style={{ padding: "10px" }}>Name: {session.name}</p>
              <p style={{ padding: "10px" }}>Week: {session.week}</p>
              <p style={{ padding: "10px" }}>Day: {session.day}</p>
              <p style={{ padding: "10px" }}>Date: {session.date}</p>
              <p style={{ padding: "10px" }}>Time: {session.time}</p>
              <p style={{ padding: "10px" }}>Location: {session.location}</p>
              <p style={{ padding: "10px" }}>Contact: {session.contact}</p>
              <p
                style={{
                  padding: "10px",
                }}
              >
                Attendants:{" "}
                {session.listAttendants.map((attendant, index) => (
                  <div key={index} style={{ color: "#666" }}>
                    {attendant}
                  </div>
                ))}
              </p>
              <div className="attendants">
                <button
                  className="addAttendant"
                  style={{ margin: "10px" }}
                  onClick={() =>
                    addAttendant(
                      session.index,
                      session.name,
                      session.date,
                      session.location
                    )
                  }
                >
                  {" "}
                  + Add Self
                </button>
                <button
                  className="deleteAttendant"
                  style={{ margin: "10px" }}
                  onClick={() =>
                    deleteAttendant(
                      session.index,
                      session.name,
                      session.date,
                      session.location
                    )
                  }
                >
                  {" "}
                  - Delete Self
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default MemberSchedulePage;

//automatically update from database
