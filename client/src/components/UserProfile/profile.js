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
    listSessions: JSON.parse(sessionStorage.getItem("listSessions")),
  });

  const [editMode, setEditMode] = useState(false);

  return (
    <>
      {info.isAdmin ? (
        <>
          <AdminH />
        </>
      ) : (
        <>
          <NotAdminH />
        </>
      )}
      <div className="container">
        <div className="Profile">
          {editMode ? (
            <>
              <div>{editMode}</div>
              <EditableProfile
                info={info}
                setInfo={setInfo}
                setEditMode={setEditMode}
              />
            </>
          ) : (
            <>
              <DisplayProfile
                info={info}
                setInfo={setInfo}
                startEdit={() => setEditMode(true)}
              />
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Profile;
