import { useState } from "react";
import Group from "./Group";

const DisplayProfile = ({ info, startEdit }) => {
  const defaultImage = "./image/temp.pngcd";
  return (
    <>
      <div
        className="vh-100"
        style={{
          backgroundColor: "#4169E1",
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
                src={info.portrait}
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
              <button
                style={{
                  height: "36px",
                  overflow: "visible",
                  border: "1px solid black",
                  backgroundColor: "transparent",
                  color: "black",
                  borderRadius: "5px",
                  padding: "0 12px",
                }}
                onClick={startEdit}
              >
                Edit profile
              </button>
              {/*
                    <div style={{ display: 'flex', justifyContent: 'space-between', backgroundColor: '#efefef', padding: '10px', borderRadius: '10px' }}>
                    <div>
                        <p className="small text-muted mb-1"># of attend</p>
                        <p>{info.count}</p>
                    </div>
                    <div>
                        <p className="small text-muted mb-1">I am going to </p>
                        <p>{info.going}</p>
                    </div>
                    <div>
                        <p className="small text-muted mb-1">instagram</p>
                        <a>{info.instaUrl}</a>
                    </div>
                    </div>*/}
            </div>
          </div>
        </div>
      </div>
      <div className="body">
        <h1 style={{ textAlign: "center" }}>No post yet</h1>
      </div>
    </>
  );
};

export default DisplayProfile;
