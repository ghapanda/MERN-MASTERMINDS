import React, { useState } from "react";
import axios from "axios";

const ProfileUpload = ({ info, setInfo }) => {
  const [profilePicture, setProfilePicture] = useState(null);

  const handleFileChange = (e) => {
    setProfilePicture(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("profilePicture", profilePicture);
    formData.append("userId", info.userId);

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
    } catch (error) {
      console.error("Error uploading profile picture:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Profile Picture:</label>
        <input type="file" accept="image/*" onChange={handleFileChange} />
      </div>
      <button type="submit">Upload</button>
    </form>
  );
};

export default ProfileUpload;
