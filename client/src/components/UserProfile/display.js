import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { React, useState, useEffect } from "react";
import axios from "axios";
import SERVERPORT from "../portConfig";

const DisplayProfile = ({ info, setInfo, startEdit }) => {
  const defaultImage = "https://img.icons8.com/ios-glyphs/90/user--v1.png";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = { userId: info.userId, password: info.password };
        const response = await axios.post(
          `http://localhost:${SERVERPORT}/api/fetchData`,
          data
        );
        setInfo(response.data);
      } catch (error) {
        alert("failed to connect to the server");
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <div
        style={{
          backgroundColor: "lightgrey",
          height: "100vh",
          overflowY: "scroll",
          fontFamily: "'Poetsen One', sans-serif",
          padding: "20px",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            color: "#323232",
            fontWeight: "900",
            fontSize: "25px",
          }}
        >
          Profile
        </h1>

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
                    ? `http://localhost:${SERVERPORT}${info.portrait}`
                    : defaultImage
                }
                alt={`${info.displayName} profile`}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = defaultImage;
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
                fontSize: "18px",
              }}
            >
              <h2 style={{ fontSize: "20px" }}>{info.displayName}</h2>
              <i>{info.bio}</i>
              <p>Dance Style: {info.danceStyle}</p>
              <ul
                style={{
                  listStyleType: "none",
                  padding: 0,

                  fontWeight: "600",
                  color: "#323232",
                }}
              >
                {info.listSessions.map((event, index) => (
                  <li
                    key={index}
                    style={{
                      border: "2px solid #323232",
                      borderRadius: "5px",
                      padding: "10px",
                      marginBottom: "10px",
                      backgroundColor: "#D3D3D3",
                      boxShadow: "4px 4px #323232",
                    }}
                  >
                    <h2 style={{ color: "#323232", fontSize: "18px" }}>
                      {event[0]}
                    </h2>
                    <p
                      style={{
                        color: "#323232",
                        fontWeight: "bold",
                        fontSize: "18px",
                      }}
                    >
                      Date: {event[1]}
                    </p>
                    <p
                      style={{
                        color: "#323232",
                        fontWeight: "bold",
                        fontSize: "18px",
                      }}
                    >
                      Location: {event[2]}
                    </p>
                  </li>
                ))}
              </ul>
              <button
                className="edit-button"
                onClick={startEdit}
                style={{
                  width: "125px",
                  height: "50px",
                  borderRadius: "5px",
                  border: "2px solid #323232",
                  backgroundColor: "#fff",
                  boxShadow: "4px 4px #323232",
                  fontSize: "18px",
                  fontWeight: "600",
                  color: "#323232",
                  cursor: "pointer",
                  outline: "none",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  transition: "transform 0.1s",
                  fontFamily: "Poetsen One",
                }}
                onMouseDown={(e) => {
                  e.target.style.transform = "translate(3px, 3px)";
                  e.target.style.boxShadow = "0px 0px #323232";
                }}
                onMouseUp={(e) => {
                  e.target.style.transform = "translate(0px, 0px)";
                  e.target.style.boxShadow = "4px 4px #323232";
                }}
              >
                <FontAwesomeIcon icon={faEdit} />
                <span
                  style={{
                    marginLeft: "5px",
                    color: "#323232",
                    fontSize: "18px",
                    fontWeight: "bold",
                    fontFamily: "Poetsen One",
                  }}
                >
                  Edit Profile
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="body" style={{ marginTop: "20px" }}>
        {info.listSessions ? (
          <></>
        ) : (
          <h1
            style={{ textAlign: "center", color: "#323232", fontSize: "20px" }}
          >
            No events yet
          </h1>
        )}
      </div>
    </>
  );
};

export default DisplayProfile;
