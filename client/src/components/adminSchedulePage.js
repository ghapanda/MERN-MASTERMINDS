import React, { useState } from 'react';
import './adminSchedulePage.css';

function SessionContainer() {
  return (
    <div className="session-container">
      <label htmlFor="Week">Week: </label> <input id="Week"/>
      <label htmlFor="Day">Day: </label> <input id="Day"/>
      <label htmlFor="Date">Date: </label> <input id="Date"/>
      <label htmlFor="Time">Time: </label> <input id="Time"/>
      <label htmlFor="Location">Location: </label> <input id="Location"/>
      <label htmlFor="Contact">Contact: </label> <input id="Contact"/>
    </div>
  );
}

function AdminSchedulePage() {

  const [sessions, setSessions] = useState([]);

  const addSession = () => {
    setSessions([...sessions, <SessionContainer key={sessions.length} />]); // Array
  }; 
  
  return (
    <div className="AdminSchedulePage">
      <h1 className="Title">Admin Schedule Page</h1>
      <button className="addSession" onClick={addSession}> + Add Session </button>
      <div className="sessions">
        {sessions}
      </div>
    </div>
  );
}

export default AdminSchedulePage;
