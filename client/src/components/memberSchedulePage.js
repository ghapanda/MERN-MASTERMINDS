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
  const addAttendant = (sessionIndex, sessionName, sessionDate, sessionLocation) => {
    const token = sessionStorage.getItem("token");
    const sessionUsername = sessionStorage.getItem("username");
    if (token) {
      const data1 = {
        index: sessionIndex,
        username: sessionUsername 
      };
      axios
      .post("http://localhost:3002/schedule/addAttendant", data1) //put localhost in a variable 
      .then((response) => {
        console.log("Attendant posted successfully:", response.data);
        setAttendants(attendants + 1);
      })
      .catch((error) => {
        console.error("Error posting attendant:", error);
      });
      const data2 = {
        username: sessionUsername ,
        name: sessionName,
        date: sessionDate,
        location: sessionLocation
      };
      axios
      .post("http://localhost:3002/schedule/addSession", data2) //put localhost in a variable 
      .then((response) => {
        console.log("Session posted to user successfully:", response.data);
        setAttendants(attendants + 1);
      })
      .catch((error) => {
        console.error("Error posting attendant to user:", error);
      });
    }
  };

  const deleteAttendant = (sessionIndex, sessionName, sessionDate, sessionLocation) => {
    const token = sessionStorage.getItem("token");
    const sessionUsername = sessionStorage.getItem("username");
    if (token) {
      const data1 = {
        index: sessionIndex,
        username: sessionUsername 
      };
      axios
      .post("http://localhost:3002/schedule/deleteAttendant", data1) //put localhost in a variable 
      .then((response) => {
        console.log("Attendant posted successfully:", response.data);
        setAttendants(attendants + 1);
      })
      .catch((error) => {
        console.error("Error posting attendant:", error);
      });
      const data2 = {
        username: sessionUsername ,
        name: sessionName,
        date: sessionDate,
        location: sessionLocation
      };
      axios
      .post("http://localhost:3002/schedule/deleteSession", data2) //put localhost in a variable 
      .then((response) => {
        console.log("Session deleted to user successfully:", response.data);
        setAttendants(attendants + 1);
      })
      .catch((error) => {
        console.error("Error deleting session to user:", error);
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
            <button className="addAttendant" onClick={() => addAttendant(session.index, session.name, session.date, session.location)}> + Add Self</button>
            <button className="deleteAttendant" onClick={() => deleteAttendant(session.index, session.name, session.date, session.location)}> - Delete Self</button>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
}

export default MemberSchedulePage;

//automatically update from database