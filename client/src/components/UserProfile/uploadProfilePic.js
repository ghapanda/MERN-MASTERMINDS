import React, { useState } from "react";
import axios from "axios";
import "./profile.css";
const ProfileUpload = ({ info, setInfo }) => {
  const [profilePicture, setProfilePicture] = useState(null);

  const handleFileChange = (e) => {
    setProfilePicture(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    if (!profilePicture) return;
    e.preventDefault();

    const formData = new FormData();
    formData.append("userId", info.userId);
    formData.append("profilePicture", profilePicture);

    try {
      const response = await axios.post(
        "http://localhost:3002/api/uploadProfilePicture",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("USERS RESOPOSE HAS NO ID", response.data); // Handle the response as needed
      setInfo(response.data);
      console.log(info);
    } catch (error) {
      console.error("Error uploading profile picture:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <div className="buttons">
          <label
            className="custom-file-upload"
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
              transition: "transform 0.1s",
              fontFamily: "'Poetsen One', sans-serif",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
            }}
            onMouseDown={(e) => {
              e.currentTarget.style.transform = "translate(3px, 3px)";
              e.currentTarget.style.boxShadow = "0px 0px #323232";
            }}
            onMouseUp={(e) => {
              e.currentTarget.style.transform = "translate(0px, 0px)";
              e.currentTarget.style.boxShadow = "4px 4px #323232";
            }}
          >
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              style={{ display: "none" }}
            />{" "}
            Choose Photo
          </label>
  
          <button
            type="submit"
            className="editButton save"
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
              transition: "transform 0.1s",
              fontFamily: "'Poetsen One', sans-serif",
            }}
            onMouseDown={(e) => {
              e.currentTarget.style.transform = "translate(3px, 3px)";
              e.currentTarget.style.boxShadow = "0px 0px #323232";
            }}
            onMouseUp={(e) => {
              e.currentTarget.style.transform = "translate(0px, 0px)";
              e.currentTarget.style.boxShadow = "4px 4px #323232";
            }}
          >
            Upload
          </button>
        </div>
      </div>
    </form>
  );  
};

export default ProfileUpload;
