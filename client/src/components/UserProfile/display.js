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
          backgroundColor: "lightgrey",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <div
          style={{
            maxWidth: "500px",
            width: "100%",
            margin: "auto",
            borderRadius: "5px",
            border: "2px solid #323232",
            padding: "20px",
            fontWeight: "600",
            backgroundColor: "#FFF",
            boxShadow: "4px 4px #323232"
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
            <div className="ProfileBoxInner" style={{ flexGrow: 1, marginLeft: "20px", color: '#323232', backgroundColor: '#fff' }}>
              <h2>{info.displayName}</h2>
              <i>{info.bio}</i>
              <p>Dance Style: {info.danceStyle}</p>
              <ul style={{ listStyleType: "none", padding: 0, backgroundColor:"#D3D3D3", boxShadow: "4px 4px #323232", fontWeight: "600", color:"#323232" }}>
                {info.listSessions.map((event, index) => (
                  <li
                    key={index}
                    style={{
                      border: "2px solid #323232",
                      borderRadius: "2px",
                      padding: "10px",
                      marginBottom: "10px",
                      backgroundColor: "#D3D3D3",
                    }}
                  >
                    <h2 style={{ color: "#323232" }}>{event[0]}</h2>
                    <p style={{ color: "#323232", fontWeight: "bold" }}>
                      Date: {event[1]}
                    </p>
                    <p style={{ color: "#323232", fontWeight: "bold" }}>Location: {event[2]}</p>
                  </li>
                ))}
              </ul>
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
