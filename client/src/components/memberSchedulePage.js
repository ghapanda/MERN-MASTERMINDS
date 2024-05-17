import React, { useState } from 'react';
import './memberSchedulePage.css';

function AttendantContainer() {
  return (
    <div className="attendant-container">
      <label htmlFor="Attendant">Attendant: </label> <input id="Attendant"/>
    </div>
  );
}

function Schedule() {
  {/* Import schedule from Admin Schedule Page using Schedule component*/}
  const [attendants, setAttendants] = useState([]);

  const addAttendant = () => {
      setAttendants([...attendants, <AttendantContainer key={attendants.length} />]); 
  }; 

  return (
    // Import Schedule from Admin Schedule Page
  <div className="Schedule">
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <p style={{ marginRight: '20px' }}> Week: </p>
      <p style={{ marginRight: '20px' }}> Day: </p>
      <p style={{ marginRight: '20px' }}> Date: </p>
      <p style={{ marginRight: '20px' }}> Time: </p>
      <p style={{ marginRight: '20px' }}> Location: </p>
      <p style={{ marginRight: '20px' }}> Contact: </p>
    </div>
    <div className="attendants">
      <button className="addAttendant" onClick={addAttendant}> + Add Attendant</button>
      {attendants}
    </div>
  </div>
  );
}

function MemberSchedulePage() {
  return (
    <div className="MemberSchedulePage">
      <h1 className="Title">Member Schedule Page</h1>
      <div>
        <Schedule /> {/* Includes component directly */}
      </div>  
    </div>
  );
}

export default MemberSchedulePage;