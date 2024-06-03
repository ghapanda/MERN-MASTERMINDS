import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { React, useState, useEffect } from "react";
import axios from "axios";
import "./profile.css"

const DisplayProfile = ({ info, setInfo, startEdit }) => {
  // const listSessionsJSON = JSON.parse(info.listSessions);
  // console.log("parsed back to jason", listSessionsJSON);
  const defaultImage = "https://img.icons8.com/ios-glyphs/90/user--v1.png"; // Default image URL

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = { userId: info.userId, password: info.password };
        const response = await axios.post(
          "http://localhost:3002/api/fetchData",
          data
        );
        setInfo(response.data);
      } catch (error) {
        alert("failed to connect to the server");
        console.log("failed to connect to the server", error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <div
        style={{
          //backgroundColor: "lightgrey",

          height: "100vh",
          overflowY: "scroll",
          fontFamily: "sans-serif",
          border: "none",
          //boxShadow: "4px 4px #323232",
          padding: "20px",
          fontFamily: "P"
        }}
      >
        <h1 style={{ textAlign: "center", fontFamily: "P", fontSize: "30px"}}>Profile</h1>

        <div
          style={{
            backgroundColor: "white",
            maxWidth: "500px",
            width: "100%",
            margin: "auto",
            borderRadius: "5px",
            border: "2px solid #323232",
            padding: "20px",
            fontWeight: "600",
            boxShadow: "4px 4px #323232",
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
            <div
              className="ProfileBoxInner"
              style={{
                flexGrow: 1,
                marginLeft: "20px",
                color: "#323232",
                backgroundColor: "#fff",
                fontFamily: "P"
              }}
            >
              <h2 style={{ fontSize: "20px"}}>{info.displayName}</h2>
              <i style={{ fontSize: "18px"}}>{info.bio}</i>
              <p style={{ fontSize: "18px"}}>Dance Style: {info.danceStyle}</p>
              <ul
                style={{
                  listStyleType: "none",
                  padding: 0,
                  //boxShadow: "4px 4px #323232",
                  //borderRadius: "5px",
                  //border: "2px solid #323232",
                  fontWeight: "600",
                  color: "#323232",
                  fontFamily: "P"
                }}
              >
                {info.listSessions.map((event, index) => (
                  <li
                    key={index}
                    style={{
                      border: "2px solid #323232",
                      borderRadius: "5px",
                      boxShadow: "4px 4px #323232",
                      padding: "10px",
                      marginBottom: "10px",
                      backgroundColor: "#D3D3D3",
                      fontFamily: "P",
                    }}
                  >
                    <h2 style={{ color: "#323232", fontFamily: "P", fontSize: "20px"}}>{event[0]}</h2>
                    <p style={{ color: "#323232", fontWeight: "bold", fontFamily: "P", fontSize: "18px"}}>
                      Date: {event[1]}
                    </p>
                    <p style={{ color: "#323232", fontWeight: "bold",fontFamily: "P", fontSize: "18px"}}>
                      Location: {event[2]}
                    </p>
                  </li>
                ))}
              </ul>
              <button className="edit-button" onClick={startEdit}>
                <FontAwesomeIcon icon={faEdit} />
                <span
                  style={{
                    color: "#323232",
                    fontSize: "16px",
                    fontWeight: "bold",
                    fontFamily: "P",
                    fontSize: "20px"
                  }}
                >
                  Edit Profile
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="body" style={{ marginTop: "20px", fontFamily: "P"}}>
        {info.listSessions ? (
          <></>
        ) : (
          <h1 style={{ textAlign: "center", color: "#323232", fontFamily: "P" }}>
            No events yet
          </h1>
        )}
      </div>
    </>
  );
};

export default DisplayProfile;
