import React, { useState, useEffect } from "react";
import "./update-schedule.css";

import axios from "axios";

function SessionContainer({ index, sessionData, onSessionChange }) {
  const [data, setData] = useState(sessionData);

  useEffect(() => {
    setData(sessionData);
  }, [sessionData]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    const updatedData = { ...data, [id]: value };
    setData(updatedData);
    onSessionChange(index, updatedData);
  };

  return (
    <div className="session-container">
      <label htmlFor="name">Name: </label>{" "}
      <input id="name" value={data.name} onChange={handleChange} />
      <label htmlFor="week">Week: </label>{" "}
      <input id="week" value={data.week} onChange={handleChange} />
      <label htmlFor="day">Day: </label>{" "}
      <input id="day" value={data.day} onChange={handleChange} />
      <label htmlFor="date">Date: </label>{" "}
      <input id="date" value={data.date} onChange={handleChange} />
      <label htmlFor="time">Time: </label>{" "}
      <input id="time" value={data.time} onChange={handleChange} />
      <label htmlFor="location">Location: </label>{" "}
      <input id="location" value={data.location} onChange={handleChange} />
      <label htmlFor="contact">Contact: </label>{" "}
      <input id="contact" value={data.contact} onChange={handleChange} />
    </div>
  );
}

function UpdateSchedule() {
  const [sessions, setSessions] = useState([]);

  useEffect(() => {
    // Fetch session data from the backend when the component mounts
    axios
      .get("http://localhost:3002/api/update-schedule")
      .then((response) => {
        setSessions(response.data);
      })
      .catch((error) => {
        console.error("Error fetching sessions:", error);
      });
  }, []);

  const addSession = () => {
    const newSession = {
      name: "",
      week: "",
      day: "",
      date: "",
      time: "",
      location: "",
      contact: "",
    };
    setSessions([...sessions, newSession]);
  };

  const updateSession = (index, updatedData) => {
    const updatedSessions = sessions.map((session, i) =>
      i === index ? updatedData : session
    );
    setSessions(updatedSessions);
  };

  const update = () => {
    axios
      .post("http://localhost:3002/api/update-schedule", sessions)
      .then((response) => {
        console.log("Sessions posted successfully:", response.data);
        // Optionally, reset sessions state after successful post
        // setSessions([]);
      })
      .catch((error) => {
        console.error("Error posting sessions:", error);
      });
  };

  return (
    <div className="UpdateSchedule">
      <h1 className="Title">Schedule</h1>
      <button className="addSession" onClick={addSession}>
        {" "}
        + Add Session{" "}
      </button>
      <div className="sessions">
        {sessions.map((session, index) => (
          <SessionContainer
            key={index}
            index={index}
            sessionData={session}
            onSessionChange={updateSession}
          />
        ))}
      </div>
      <button className="update" onClick={update}>
        {" "}
        Update{" "}
      </button>
    </div>
    //have a delete session button and this should update/delete from the database
    //update only if it isnt already there else send a already updated message
    //dont update all the sessions, just the latest one
    //figure out the date data type
  );
}

export default UpdateSchedule;
