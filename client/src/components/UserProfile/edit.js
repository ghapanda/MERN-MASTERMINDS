import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ProfilePicture from "./uploadProfilePic";
import "./profile.css";
import SERVERPORT from "../portConfig";

const EditableProfile = ({ info, setInfo, setEditMode }) => {
  const navigate = useNavigate();

  const [username, setUsername] = useState(info.username);
  const [password, setPassword] = useState(info.password);
  const [email, setEmail] = useState(info.email);
  const [displayName, setDisplayName] = useState(info.displayName);
  const [isAdmin, setIsAdmin] = useState(info.isAdmin);
  const [danceStyle, setDanceStyle] = useState(info.danceStyle);
  const [bio, setBio] = useState(info.bio);
  const [portrait, setPortrait] = useState(null);
  const [danceClip, setDanceClip] = useState(info.danceClip);

  const handleSaveClicked = async () => {
    try {
      sessionStorage.setItem("password", password);
      sessionStorage.setItem("email", email);
      sessionStorage.setItem("username", username);
      sessionStorage.setItem("danceStyle", danceStyle);
      sessionStorage.setItem("portrait", portrait);
      sessionStorage.setItem("bio", bio);
      sessionStorage.setItem("displayName", displayName);
      sessionStorage.setItem("danceClip", danceClip);
      const newData = {
        userId: info.userId,
        username,
        password,
        email,
        displayName,
        isAdmin,
        danceStyle,
        danceClip,
        portrait: info.portrait,
        bio,
      };
      const response = await axios.post(
        `http://localhost:${SERVERPORT}/api/editprofile`,
        newData
      );
      setInfo(response.data);
      setEditMode(false);
    } catch (error) {
      alert("Error updating profile");
    }
  };

  const handleCancel = () => {
    setEditMode((prevEditMode) => !prevEditMode);
  };

  return (
    <div
      style={{ backgroundColor: "lightgrey", padding: "20px", height: "100vh" }}
    >
      <h2
        style={{
          textAlign: "center",
          color: "#323232",
          fontWeight: "900",
          fontSize: "25px",
        }}
      >
        Edit Profile
      </h2>
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
          fontFamily: "'Poetsen One', sans-serif",
        }}
      >
        <div className="input-group" style={{ marginBottom: "15px" }}>
          <label
            style={{
              display: "block",
              color: "#323232",
              fontSize: "18px",
              marginBottom: "5px",
            }}
          >
            Username:
          </label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "5px",
              border: "2px solid #323232",
              boxShadow: "4px 4px #323232",
              fontSize: "18px",
              fontFamily: "'Poetsen One', sans-serif",
              color: "#323232",
            }}
          />
        </div>
        <div className="input-group" style={{ marginBottom: "15px" }}>
          <label
            style={{
              display: "block",
              color: "#323232",
              fontSize: "18px",
              marginBottom: "5px",
            }}
          >
            Password:
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "5px",
              border: "2px solid #323232",
              boxShadow: "4px 4px #323232",
              fontSize: "18px",
              fontFamily: "'Poetsen One', sans-serif",
              color: "#323232",
            }}
          />
        </div>
        <div className="input-group" style={{ marginBottom: "15px" }}>
          <label
            style={{
              display: "block",
              color: "#323232",
              fontSize: "18px",
              marginBottom: "5px",
            }}
          >
            Email:
          </label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "5px",
              border: "2px solid #323232",
              boxShadow: "4px 4px #323232",
              fontSize: "18px",
              fontFamily: "'Poetsen One', sans-serif",
              color: "#323232",
            }}
          />
        </div>
        <div className="input-group" style={{ marginBottom: "15px" }}>
          <label
            style={{
              display: "block",
              color: "#323232",
              fontSize: "18px",
              marginBottom: "5px",
            }}
          >
            Screen Name:
          </label>
          <input
            type="text"
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "5px",
              border: "2px solid #323232",
              boxShadow: "4px 4px #323232",
              fontSize: "18px",
              fontFamily: "'Poetsen One', sans-serif",
              color: "#323232",
            }}
          />
        </div>
        <div className="input-group" style={{ marginBottom: "15px" }}>
          <label
            style={{
              display: "block",
              color: "#323232",
              fontSize: "18px",
              marginBottom: "5px",
            }}
          >
            Dance Style:
          </label>
          <input
            type="text"
            value={danceStyle}
            onChange={(e) => setDanceStyle(e.target.value)}
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "5px",
              border: "2px solid #323232",
              boxShadow: "4px 4px #323232",
              fontSize: "18px",
              fontFamily: "'Poetsen One', sans-serif",
              color: "#323232",
            }}
          />
        </div>
        <div className="input-group" style={{ marginBottom: "15px" }}>
          <label
            style={{
              display: "block",
              color: "#323232",
              fontSize: "18px",
              marginBottom: "5px",
            }}
          >
            Bio:
          </label>
          <input
            type="text"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "5px",
              border: "2px solid #323232",
              boxShadow: "4px 4px #323232",
              fontSize: "18px",
              fontFamily: "'Poetsen One', sans-serif",
              color: "#323232",
            }}
          />
        </div>
        <div style={{ marginBottom: "15px" }}>
          <ProfilePicture info={info} setInfo={setInfo} />
        </div>
        <div
          className="buttons"
          style={{ display: "flex", justifyContent: "30px" }}
        >
          <button
            onClick={handleSaveClicked}
            style={{
              width: "120px",
              height: "40px",
              borderRadius: "5px",

              fontSize: "18px",

              cursor: "pointer",
              transition: "transform 0.1s",
              fontFamily: "'Poetsen One', sans-serif",

              border: "2px solid #323232",
              boxShadow: "4px 4px #323232",
              fontWeight: "600",
              backgroundColor: "black",
              color: "white",
              cursor: "pointer",
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
            Save
          </button>
          <button
            onClick={handleCancel}
            style={{
              width: "120px",
              height: "40px",
              borderRadius: "5px",

              fontSize: "18px",

              transition: "transform 0.1s",
              fontFamily: "'Poetsen One', sans-serif",

              border: "2px solid #323232",
              boxShadow: "4px 4px #323232",
              fontWeight: "600",
              backgroundColor: "black",
              color: "white",
              cursor: "pointer",
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
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditableProfile;
