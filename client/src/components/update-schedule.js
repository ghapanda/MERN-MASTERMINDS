import React, { useState, useEffect } from "react";
import "./update-schedule.css";
import { Link } from "react-router-dom";
import Navbar from "./dashboard";

import axios from "axios";
import { v4 as uuidv4 } from "uuid";

function SessionContainer({
  index,
  session,
  onSessionUpdate,
  onSessionDelete,
}) {
  const [sessionDict, setDict] = useState(session);

  useEffect(() => {
    setDict(session);
  }, [session]); // Runs while session changes
  // why is this important?

  const handleChange = (event) => {
    const { id, value } = event.target; // Event target: refers to the element that triggered the event
    const updatedSessionDict = { ...sessionDict, [id]: value }; // [id]: value updates the correct key value pair in sessionData
    setDict(updatedSessionDict);
    onSessionUpdate(index, updatedSessionDict);
  };

  return (
    <div className="session-container">
      <div className="input-container">
        <label htmlFor="name">Name: </label>{" "}
        <input id="name" value={sessionDict.name} onChange={handleChange} />
      </div>
      <div className="input-container">
        <label htmlFor="week">Week: </label>{" "}
        <input id="week" value={sessionDict.week} onChange={handleChange} />
      </div>
      <div className="input-container">
        <label htmlFor="day">Day: </label>{" "}
        <input id="day" value={sessionDict.day} onChange={handleChange} />
      </div>
      <div className="input-container">
        <label htmlFor="date">Date: </label>{" "}
        <input id="date" value={sessionDict.date} onChange={handleChange} />
      </div>
      <div className="input-container">
        <label htmlFor="time">Time: </label>{" "}
        <input id="time" value={sessionDict.time} onChange={handleChange} />
      </div>
      <div className="input-container">
        <label htmlFor="location">Location: </label>{" "}
        <input
          id="location"
          value={sessionDict.location}
          onChange={handleChange}
        />
      </div>
      <div className="input-container">
        <label htmlFor="contact">Contact: </label>{" "}
        <input
          id="contact"
          value={sessionDict.contact}
          onChange={handleChange}
        />
      </div>
      <div className="input-container">
        <button className="delete" onClick={() => onSessionDelete(index)}>
          Delete Permanently
        </button>
      </div>
    </div>
  );
}

function Schedule() {
  const [sessions, setSessions] = useState([]);

  // Fetches current session data
  useEffect(() => {
    // Runs while rendering
    axios
      .get("http://localhost:3002/schedule/")
      .then((response) => {
        setSessions(response.data);
      })
      .catch((error) => {
        console.error("Error fetching sessions:", error);
      });
  }, []);

  const addSession = () => {
    const newSession = {
      // Dictionary type object
      index: uuidv4(),
      name: "",
      week: "",
      day: "",
      date: "",
      time: "",
      location: "",
      contact: "",
    };
    setSessions([...sessions, newSession]); // ... Spread operator: expands array into elements
  };

  const updateSession = (index, updatedSessionDict) => {
    const updatedSessions = sessions.map((session, i) =>
      i === index ? updatedSessionDict : session
    );
    setSessions(updatedSessions);
  };

  const deleteSession = (index) => {
    const updatedSessions = [...sessions];
    const deletedSession = updatedSessions[index];
    updatedSessions.splice(index, 1);
    setSessions(updatedSessions);
    axios
      .post("http://localhost:3002/schedule/delete", deletedSession)
      .then((response) => {
        console.log("Sessions posted successfully:", response.data);
      })
      .catch((error) => {
        console.error("Error posting sessions:", error);
      });
    axios
      .post("http://localhost:3002/schedule/deleteUserSession", deletedSession)
      .then((response) => {
        console.log("Session deleted from user successfully:", response.data);
      })
      .catch((error) => {
        console.error("Error deleting sessions:", error);
      });
  };

  const update = () => {
    axios
      .post("http://localhost:3002/schedule/update", sessions) //put localhost in a variable
      .then((response) => {
        console.log("Sessions posted successfully:", response.data);
      })
      .catch((error) => {
        console.error("Error posting sessions:", error);
      });
  };

  return (
    <>
      {" "}
      <Navbar />
      <div className="UpdateSchedule">
        <h1 className="Title">Schedule</h1>
        <button className="addSession" onClick={addSession}>
          + Add Session
        </button>
        <div className="sessions">
          {sessions.map((session, i) => (
            <SessionContainer
              index={i}
              session={session}
              onSessionUpdate={updateSession}
              onSessionDelete={deleteSession}
            />
          ))}
        </div>
        <button className="update" onClick={update}>
          Update
        </button>
        <h3 className="SubTitle">
          Return to{" "}
          <Link
            to="/dashboard"
            style={{ color: "#2d8cf0", textDecoration: "underline" }}
          >
            dashboard
          </Link>
        </h3>
      </div>
    </>
  );
}

export default Schedule;
