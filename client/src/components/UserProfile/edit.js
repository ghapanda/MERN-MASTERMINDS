// import { useState, useEffect } from "react";
// import Group from "./Group";
// import axios from "axios";
// import { Link, useNavigate, useSearchParams } from "react-router-dom";
// import ProfilePicture from "./uploadProfilePic";

// const EditableProfile = ({ info, setInfo, editMode, setEditMode }) => {
//   const navigate = useNavigate();
//   console.log("Edit User Profile");

//   const [username, setUsername] = useState(info.username);
//   const [password, setPassword] = useState(info.password);
//   const [email, setEmail] = useState(info.email);
//   const [displayName, setDisplayName] = useState(info.displayName);
//   const [isAdmin, setIsAdmin] = useState(info.isAdmin);

//   const [danceStyle, setDanceStyle] = useState(info.danceStyle);
//   const [bio, setBio] = useState(info.bio);
//   const [portrait, setPortrait] = useState(null);
//   const [danceClip, setDanceClip] = useState(info.danceClip);
//   const userId = info.userId;

//   const handlePortraitChange = async (e) => {
//     const file = e.target.files[0];
//     setPortrait(file);
//   };

//   //const history = useHistory();
//   const handleSaveClicked = async () => {
//     try {
//       console.log("display name:", displayName);
//       // editComplete({name,style});

//       sessionStorage.setItem("password", password);
//       sessionStorage.setItem("email", email);
//       sessionStorage.setItem("username", username);
//       sessionStorage.setItem("danceStyle", danceStyle);
//       sessionStorage.setItem("portrait", portrait);
//       sessionStorage.setItem("bio", bio);
//       sessionStorage.setItem("displayName", displayName);
//       sessionStorage.setItem("danceClip", danceClip);

//       const newData = {
//         userId,
//         username,
//         password,
//         email,
//         displayName,
//         isAdmin,
//         danceStyle,
//         danceClip,
//         portrait,
//         bio,
//       };
//       console.log("display name:", info.displayName);
//       const response = await axios.post(
//         "http://localhost:3002/api/editprofile",
//         newData
//       );

//       navigate("/loading");

//       // history.goBack()
//     } catch (error) {
//       console.error("Error updating profile:", error.response.data);
//     }
//   };

//   const handleCancel = () => {
//     setEditMode((prevEditMode) => !prevEditMode);
//   };
//   return (
//     <>
//       <Group>
//         <h2 style={{ marginRight: "10px" }}>
//           username:
//           <input
//             type="text"
//             value={username}
//             // onChange={e => setName(e.target.value)}
//             onChange={(e) => setUsername(e.target.value)}
//           />
//         </h2>
//       </Group>
//       <Group>
//         <h2 style={{ marginRight: "10px" }}>
//           password:
//           <input
//             type="password"
//             value={password}
//             // onChange={e => setName(e.target.value)}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </h2>
//       </Group>

//       <Group>
//         <h2 style={{ marginRight: "10px" }}>
//           email:
//           <input
//             type="text"
//             value={email}
//             // onChange={e => setName(e.target.value)}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//         </h2>
//       </Group>
//       <Group>
//         <h2 style={{ marginRight: "10px" }}>
//           Screen Name:
//           <input
//             type="text"
//             value={displayName}
//             // onChange={e => setName(e.target.value)}
//             onChange={(e) => setDisplayName(e.target.value)}
//           />
//         </h2>
//       </Group>

//       <Group>
//         <h2 style={{ marginRight: "60px" }}>
//           dance style:
//           <input
//             type="text"
//             value={danceStyle}
//             // onChange={(e) => setName(e.target.value)}
//             onChange={(e) => setDanceStyle(e.target.value)}
//           />
//         </h2>
//       </Group>

//       <Group>
//         <h2 style={{ marginRight: "10px" }}>
//           bio:
//           <input
//             type="text"
//             value={bio}
//             // onChange={e => setName(e.target.value)}
//             onChange={(e) => setBio(e.target.value)}
//           />
//         </h2>
//       </Group>

//       <Group>
//         <h2 style={{ marginRight: "10px" }}>
//           <ProfilePicture info={info} setInfo={setInfo}></ProfilePicture>
//         </h2>
//       </Group>

//       <Group>
//         <button onClick={handleSaveClicked}>Save</button>
//         <button onClick={handleCancel}>Cancel</button>
//       </Group>
//     </>
//   );
// };

// export default EditableProfile;

// const EditableProfile = ({ info, setInfo, editMode, setEditMode }) => {
//   const navigate = useNavigate();

//   const [username, setUsername] = useState(info.username);
//   const [password, setPassword] = useState(info.password);
//   const [email, setEmail] = useState(info.email);
//   const [displayName, setDisplayName] = useState(info.displayName);
//   const [isAdmin, setIsAdmin] = useState(info.isAdmin);
//   const [danceStyle, setDanceStyle] = useState(info.danceStyle);
//   const [bio, setBio] = useState(info.bio);
//   const [portrait, setPortrait] = useState(null);
//   const [danceClip, setDanceClip] = useState(info.danceClip);
//   const userId = info.userId;

//   const handlePortraitChange = async (e) => {
//     const file = e.target.files[0];
//     setPortrait(file);
//   };

//   const handleSaveClicked = async () => {
//     try {
//       sessionStorage.setItem("password", password);
//       sessionStorage.setItem("email", email);
//       sessionStorage.setItem("username", username);
//       sessionStorage.setItem("danceStyle", danceStyle);
//       sessionStorage.setItem("portrait", portrait);
//       sessionStorage.setItem("bio", bio);
//       sessionStorage.setItem("displayName", displayName);
//       sessionStorage.setItem("danceClip", danceClip);

//       const newData = {
//         userId,
//         username,
//         password,
//         email,
//         displayName,
//         isAdmin,
//         danceStyle,
//         danceClip,
//         portrait,
//         bio,
//       };

//       const response = await axios.post(
//         "http://localhost:3002/api/editprofile",
//         newData
//       );

//       navigate("/loading");
//     } catch (error) {
//       console.error("Error updating profile:", error.response.data);
//     }
//   };

//   const handleCancel = () => {
//     setEditMode((prevEditMode) => !prevEditMode);
//   };

//   return (
//     <div className="container">
//       <h2 className="title">Edit Profile</h2>
//       <div className="input-group">
//         <label>Username:</label>
//         <input
//           type="text"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//         />
//       </div>
//       <div className="input-group">
//         <label>Password:</label>
//         <input
//           type="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//       </div>
//       <div className="input-group">
//         <label>Email:</label>
//         <input
//           type="text"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//       </div>
//       <div className="input-group">
//         <label>Screen Name:</label>
//         <input
//           type="text"
//           value={displayName}
//           onChange={(e) => setDisplayName(e.target.value)}
//         />
//       </div>
//       <div className="input-group">
//         <label>Dance Style:</label>
//         <input
//           type="text"
//           value={danceStyle}
//           onChange={(e) => setDanceStyle(e.target.value)}
//         />
//       </div>
//       <div className="input-group">
//         <label>Bio:</label>
//         <input
//           type="text"
//           value={bio}
//           onChange={(e) => setBio(e.target.value)}
//         />
//       </div>
//       <div className="input-group">
//         <label>Profile Picture:</label>
//         <ProfilePicture info={info} setInfo={setInfo} />
//       </div>
//       <div className="buttons">
//         <button className="save" onClick={handleSaveClicked}>
//           Save
//         </button>
//         <button className="cancel" onClick={handleCancel}>
//           Cancel
//         </button>
//       </div>
//     </div>
//   );
// };
import { useState, useEffect } from "react";
import Group from "./Group";
import axios from "axios";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import ProfilePicture from "./uploadProfilePic";
import "./profile.css";

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
      console.log(info.userId);
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
      console.log("this is the data i am sending", newData);
      const response = await axios.post(
        "http://localhost:3002/api/editprofile",
        newData
      );
      console.log(response.data);
      setInfo(response.data);
      setEditMode(false);
    } catch (error) {
      console.error("Error updating profile:", error.response.data);
    }
  };

  const handleCancel = () => {
    setEditMode((prevEditMode) => !prevEditMode);
  };
  console.log("info in edit", info);
  return (
    <div className="container_2" style={{ background: "#D3D3D3"}}>
      <h2 className="title">Edit Profile</h2>
      <div className="input-group">
        <label>Username:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="input-group">
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="input-group">
        <label>Email:</label>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="input-group">
        <label>Screen Name:</label>
        <input
          type="text"
          value={displayName}
          onChange={(e) => setDisplayName(e.target.value)}
        />
      </div>
      <div className="input-group">
        <label>Dance Style:</label>
        <input
          type="text"
          value={danceStyle}
          onChange={(e) => setDanceStyle(e.target.value)}
        />
      </div>
      <div className="input-group">
        <label>Bio:</label>
        <input
          type="text"
          value={bio}
          onChange={(e) => setBio(e.target.value)}
        />
      </div>
      <div>
        <ProfilePicture info={info} setInfo={setInfo} />
      </div>
      <div className="buttons">
        <button className="editButton save" onClick={handleSaveClicked} style={{ border: "2px solid #323232", backgroundColor:"#D3D3D3", boxShadow: "4px 4px #323232", fontWeight: "600", color:"#323232"}}>
          Save
        </button>
        <button className="editButton cancel" onClick={handleCancel} style={{ border: "2px solid #323232", backgroundColor:"#D3D3D3", boxShadow: "4px 4px #323232", fontWeight: "600", color:"#323232"}}>
          Cancel
        </button>
      </div>
    </div>
  );
};

export default EditableProfile;
