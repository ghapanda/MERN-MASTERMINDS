import React, { useState, useEffect } from 'react';
import './memberSchedulePage.css';

import axios from "axios";

function AttendantContainer() {
  return (
    <div className="attendant-container">
      <label htmlFor="Attendant">Attendant: </label> <input id="Attendant"/>
    </div>
  );
}

function MemberSchedulePage() {
  const [sessions, setSessions] = useState([]);
  const [attendants, setAttendants] = useState(0);

  // Fetches current session data 
  useEffect(() => { // Runs while rendering
    axios
      .get("http://localhost:3002/schedule/")
      .then((response) => {
        setSessions(response.data);
        console.log(response.data)
      })
      .catch((error) => {
        console.error("Error fetching sessions:", error);
      });
  }, [attendants]);

  // Fetches data from sessionStorage
  const addAttendant = (sessionIndex) => {
    const token = sessionStorage.getItem("token");
    const sessionUsername = sessionStorage.getItem("username");
    if (token) {
      const data = {
        index: sessionIndex,
        username: sessionUsername 
      };
      axios
      .post("http://localhost:3002/schedule/addAttendant", data) //put localhost in a variable 
      .then((response) => {
        console.log("Attendant posted successfully:", response.data);
        setAttendants(attendants + 1);
      })
      .catch((error) => {
        console.error("Error posting attendant:", error);
      });
    }
  };

  return (
    <div className="Schedule">
    <h1 className="Title">Schedule</h1>
    <div className="sessions">
      {sessions.map((session, i) => (
        <div key={i} className="session">
          <p>Name: {session.name}</p>
          <p>Week: {session.week}</p>
          <p>Day: {session.day}</p>
          <p>Date: {session.date}</p>
          <p>Time: {session.time}</p>
          <p>Location: {session.location}</p>
          <p>Contact: {session.contact}</p>
          <p>Attendants: {session.listAttendants}</p>
          <div className="attendants">
            <button className="addAttendant" onClick={() => addAttendant(session.index)}> + Add Self</button>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
}

export default MemberSchedulePage;

//automatically update from database