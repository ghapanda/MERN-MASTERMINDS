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
  const [attendants, setAttendants] = useState([]);
  const addAttendant = () => {
    setAttendants([...attendants, <AttendantContainer key={attendants.length} />]); 
}; 


  // Fetches current session data 
  useEffect(() => { // Runs while rendering
    axios
      .get("http://localhost:3002/schedule/")
      .then((response) => {
        setSessions(response.data);
      })
      .catch((error) => {
        console.error("Error fetching sessions:", error);
      });
  }, []);

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
        </div>
        
      ))}
    <div className="attendants">
      <button className="addAttendant" onClick={addAttendant}> + Add Attendant</button>
      {attendants}
    </div>
    </div>
    </div>
  );
}

export default MemberSchedulePage;

//automatically update from database