import { React, useState, useEffect } from "react";

import { useParams, useNavigate } from "react-router-dom";

import { Link } from "react-router-dom";

import axios from "axios";

import "./profile.css";

import DisplayProfile from "./display.js";

import EditableProfile from "./edit.js";

import AdminH from "./adminH.js";

import NotAdminH from "./notAdminH.js";

const Profile = () => {
  //console.log("email is ", sessionStorage.getItem("email"));

  const [info, setInfo] = useState({
    userId: sessionStorage.getItem("userId"),
    username: sessionStorage.getItem("username"),
    password: sessionStorage.getItem("password"),
    email: sessionStorage.getItem("email"),
    displayName: sessionStorage.getItem("displayName"),
    isAdmin: sessionStorage.getItem("isAdmin"),
    danceStyle: sessionStorage.getItem("danceStyle"),
    danceClip: sessionStorage.getItem("danceClip"),
    portrait: sessionStorage.getItem("portrait"),
    bio: sessionStorage.getItem("bio") || "No bio",
    events: sessionStorage.getItem("events"),
  });

  const [editMode, setEditMode] = useState(false);

  const [name, setName] = useState(info.username);

  const [style, setStyle] = useState(info.style);
  function handleEditComplete(result) {
    console.log("handleEditComplete", result);
    if (result != null) {
      setName(result.name);
      setStyle(result.style);
    }
    setEditMode(false);
  }
  //setEditMode(false);

  //const EditProfile = () => {};

  return (
    <>
      {info.isAdmin ? (
        <>
          <NotAdminH />
        </>
      ) : (
        <>
          <AdminH />
        </>
      )}
      <div className="container">
        {/*editMode
            ?<>
            </>
            :<>
                <sidebar />
            </> */}
        <div className="Profile">
          {editMode ? (
            <>
              <div>{editMode}</div>
              <EditableProfile
                info={info}
                editComplete={handleEditComplete}
                editMode={editMode}
                setEditMode={setEditMode}
              />
            </>
          ) : (
            <>
              <h1 style={{ textAlign: "center" }}>Profile</h1>
              <DisplayProfile info={info} startEdit={() => setEditMode(true)} />
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Profile;
