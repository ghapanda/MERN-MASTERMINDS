import React, { useState } from "react";
import Group from "./Group";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
const DisplayProfile = ({ info, startEdit }) => {
  console.log("list sessions:", info.listSessions);
  // const listSessionsJSON = JSON.parse(info.listSessions);
  // console.log("parsed back to jason", listSessionsJSON);
  console.log("profile pic path in display:", info.portrait);
  const defaultImage = "https://img.icons8.com/ios-glyphs/90/user--v1.png"; // Default image URL
  if (info.portrait === "null") {
    console.log("portrait is null");
  } else {
    console.log("portrait isNOT NULL", typeof info.portrait);
  }
  return (
    <>
      <div
        className="vh-100"
        style={{
          backgroundColor: "#fff",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            maxWidth: "500px",
            width: "100%",
            margin: "auto",
            borderRadius: "15px",
            backgroundColor: "#fff",
            padding: "20px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          }}
        >
          <div
            style={{ display: "flex", alignItems: "center", textAlign: "left" }}
          >
            <div style={{ flexShrink: 0 }}>
              <img
                style={{ width: "90px", borderRadius: "90px" }}
                src={
                  info.portrait !== "null"
                    ? `http://localhost:3002${info.portrait}`
                    : "https://img.icons8.com/ios-glyphs/90/user--v1.png"
                }
                alt={`${info.displayName} profile`}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    "https://img.icons8.com/ios-glyphs/90/user--v1.png";
                }}
              />
            </div>
            <div style={{ flexGrow: 1, marginLeft: "20px" }}>
              <h2>{info.displayName}</h2>
              <i>{info.bio}</i>
              <p>Dance Style: {info.danceStyle}</p>
              <button className="edit-button" onClick={startEdit}>
                <FontAwesomeIcon icon={faEdit} />
                <span style={{ color: '#323232', fontSize: '16px', fontWeight: 'bold', fontFamily: 'Arial, sans-serif' }}>Edit Profile</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="body" style={{ marginTop: "20px" }}>
        {info.listSessions ? (
          <>
            <h1 style={{ textAlign: "center", color: "#323232" }}>
              Events you have joined
            </h1>
            <ul style={{ listStyleType: "none", padding: 0 }}>
              {info.listSessions.map((event, index) => (
                <li
                  key={index}
                  style={{
                    border: "1px solid #4169E1",
                    borderRadius: "5px",
                    padding: "10px",
                    marginBottom: "10px",
                    backgroundColor: "#f0f8ff",
                  }}
                >
                  <h2 style={{ color: "#323232" }}>{event[0]}</h2>
                  <p style={{ color: "#323232", fontWeight: "bold" }}>
                    Date: {event[1]}
                  </p>
                  <p style={{ color: "#323232" }}>Location: {event[2]}</p>
                </li>
              ))}
            </ul>
          </>
        ) : (
          <h1 style={{ textAlign: "center", color: "#323232" }}>
            No events yet
          </h1>
        )}
      </div>
    </>
  );
};

export default DisplayProfile;
