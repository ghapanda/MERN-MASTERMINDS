import { useState, useEffect } from "react";
import Group from "./Group";
import axios from "axios";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import ProfilePicture from "./uploadProfilePic";

const EditableProfile = ({ info, setInfo, editMode, setEditMode }) => {
  const navigate = useNavigate();
  console.log("Edit User Profile");

  const [username, setUsername] = useState(info.username);
  const [password, setPassword] = useState(info.password);
  const [email, setEmail] = useState(info.email);
  const [displayName, setDisplayName] = useState(info.displayName);
  const [isAdmin, setIsAdmin] = useState(info.isAdmin);

  const [danceStyle, setDanceStyle] = useState(info.danceStyle);
  const [bio, setBio] = useState(info.bio);
  const [portrait, setPortrait] = useState(null);
  const [danceClip, setDanceClip] = useState(info.danceClip);
  const userId = info.userId;

  const handlePortraitChange = async (e) => {
    const file = e.target.files[0];
    setPortrait(file);
  };

  //const history = useHistory();
  const handleSaveClicked = async () => {
    try {
      console.log("display name:", displayName);
      // editComplete({name,style});

      sessionStorage.setItem("password", password);
      sessionStorage.setItem("email", email);
      sessionStorage.setItem("username", username);
      sessionStorage.setItem("danceStyle", danceStyle);
      sessionStorage.setItem("portrait", portrait);
      sessionStorage.setItem("bio", bio);
      sessionStorage.setItem("displayName", displayName);
      sessionStorage.setItem("danceClip", danceClip);

      const newData = {
        userId,
        username,
        password,
        email,
        displayName,
        isAdmin,
        danceStyle,
        danceClip,
        portrait,
        bio,
      };
      console.log("display name:", info.displayName);
      const response = await axios.post(
        "http://localhost:3002/api/editprofile",
        newData
      );

      navigate("/loading");

      // history.goBack()
    } catch (error) {
      console.error("Error updating profile:", error.response.data);
    }
  };

  const handleCancel = () => {
    setEditMode((prevEditMode) => !prevEditMode);
  };
  return (
    <>
      <Group>
        <h2 style={{ marginRight: "10px" }}>
          username:
          <input
            type="text"
            value={username}
            // onChange={e => setName(e.target.value)}
            onChange={(e) => setUsername(e.target.value)}
          />
        </h2>
      </Group>
      <Group>
        <h2 style={{ marginRight: "10px" }}>
          password:
          <input
            type="password"
            value={password}
            // onChange={e => setName(e.target.value)}
            onChange={(e) => setPassword(e.target.value)}
          />
        </h2>
      </Group>

      <Group>
        <h2 style={{ marginRight: "10px" }}>
          email:
          <input
            type="text"
            value={email}
            // onChange={e => setName(e.target.value)}
            onChange={(e) => setEmail(e.target.value)}
          />
        </h2>
      </Group>
      <Group>
        <h2 style={{ marginRight: "10px" }}>
          Screen Name:
          <input
            type="text"
            value={displayName}
            // onChange={e => setName(e.target.value)}
            onChange={(e) => setDisplayName(e.target.value)}
          />
        </h2>
      </Group>

      <Group>
        <h2 style={{ marginRight: "60px" }}>
          dance style:
          <input
            type="text"
            value={danceStyle}
            // onChange={(e) => setName(e.target.value)}
            onChange={(e) => setDanceStyle(e.target.value)}
          />
        </h2>
      </Group>

      <Group>
        <h2 style={{ marginRight: "10px" }}>
          bio:
          <input
            type="text"
            value={bio}
            // onChange={e => setName(e.target.value)}
            onChange={(e) => setBio(e.target.value)}
          />
        </h2>
      </Group>

      <Group>
        <h2 style={{ marginRight: "10px" }}>
          <ProfilePicture info={info} setInfo={setInfo}></ProfilePicture>
        </h2>
      </Group>

      <Group>
        <button onClick={handleSaveClicked}>Save</button>
        <button onClick={handleCancel}>Cancel</button>
      </Group>
    </>
  );
};

export default EditableProfile;
