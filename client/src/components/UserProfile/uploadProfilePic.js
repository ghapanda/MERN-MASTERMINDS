import React, { useState } from "react";
import axios from "axios";
import "./profile.css";
import SERVERPORT from "../portConfig";

const ProfileUpload = ({ info, setInfo }) => {
  const [profilePicture, setProfilePicture] = useState(null);

  const [fileName, setName] = useState("");

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setProfilePicture(file);
    setName(file.name);
  };

  const handleSubmit = async (e) => {
    if (!profilePicture) return;
    e.preventDefault();

    const formData = new FormData();
    formData.append("userId", info.userId);
    formData.append("profilePicture", profilePicture);

    try {
      const response = await axios.post(
        `http://localhost:${SERVERPORT}/api/uploadProfilePicture`,
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
        <div
          className="buttons"
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "20px",
            marginBottom: "20px",
          }}
        >
          <label
            className="custom-file-upload"
            style={{
              //borderRadius: "5px",
              //border: "2px solid #323232",
              //backgroundColor: "#fff",
              //boxShadow: "4px 4px #323232",
              fontSize: "15px",
              //fontWeight: "600",
              //color: "#323232",
              cursor: "pointer",
              transition: "transform 0.1s",
              fontFamily: "'Poetsen One', sans-serif",
              //display: "flex",
              //alignItems: "center",
              //justifyContent: "center",
              //textAlign: "center",

              border: "1px solid #323232",

              boxShadow: "2px 2px #323232",
              fontWeight: "600",
              marginBottom: "10px",
              padding: "10px 20px",
              backgroundColor: "white",
              color: "black",
              borderRadius: "5px",
              cursor: "pointer",
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
            Choose Profile Photo
          </label>
          <p>{fileName}</p>
          <button
            type="submit"
            className="editButton save"
            style={{
              width: "125px",
              height: "50px",
              borderRadius: "5px",
              //    border: "2px solid #323232",
              //backgroundColor: "#fff",
              //  boxShadow: "4px 4px #323232",
              fontSize: "18px",
              //fontWeight: "600",
              //color: "#323232",
              cursor: "pointer",
              transition: "transform 0.1s",
              fontFamily: "'Poetsen One', sans-serif",

              //border: "2px solid #323232",
              //boxShadow: "4px 4px #323232",
              //fontWeight: "600",
              //backgroundColor: 'black',
              //color: 'white',
              //cursor: 'pointer',

              border: "2px solid #323232",
              backgroundColor: "#D3D3D3",
              boxShadow: "4px 4px #323232",
              fontWeight: "600",
              color: "#323232",
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
