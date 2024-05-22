import { useState, useEffect } from "react";
import Group from "./Group";
import axios from "axios";
import { Link, useNavigate, useSearchParams } from "react-router-dom";

const EditableProfile = ({ info, setInfo }) => {
  const navigate = useNavigate();
  console.log("Edit User Profile");

  const [username, setUsername] = useState(info.username);
  const [password, setPassword] = useState(info.password);
  const [email, setEmail] = useState(info.email);
  const [displayName, setDisplayName] = useState(info.displayName);
  const [isAdmin, setIsAdmin] = useState(info.isAdmin);

  const [danceStyle, setDanceStyle] = useState(info.danceStyle);
  const [bio, setBio] = useState(info.bio);
  const [portrait, setPortrait] = useState(info.portrait);
  const [danceClip, setDanceClip] = useState(info.danceClip);
  const userId = info.userId;
  const handleCancelClicked = () => {
    // editComplete(null);
    return;
  };

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
      // setInfo({
      //   userId,
      //   username,
      //   password,
      //   email,
      //   displayName,
      //   isAdmin,
      //   danceStyle,
      //   danceClip,
      //   portrait,
      //   bio,
      // });
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
      navigate("/dashboard");
    } catch (error) {
      console.error("Error updating profile:", error.response.data);
    }
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

<<<<<<< HEAD
    return( 
        <>
            <div className="vh-100" style={{ backgroundColor: '#4169E1', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div style={{ maxWidth: '500px', width: '100%', margin: 'auto', borderRadius: '15px', backgroundColor: '#fff', padding: '20px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
                <div style={{ display: 'flex', alignItems: 'center', textAlign: 'left' }}>
                <div style={{ flexShrink: 0 }}>
                    <img
                    style={{ width: '90px', borderRadius: '90px' }}
                    src={info.image}
                    alt={`${info.name} profile`}
                    onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "https://img.icons8.com/ios-glyphs/90/user--v1.png" 
                      }}
                    />
                    <div>
                        <p>upload profile image here</p>
                        
                    </div>
                </div>
                <div style={{ flexGrow: 1, marginLeft: '20px' }}>
                    <h2>new name:
                    <input
                        type='text'
                        value={name}
                        onChange={e => setName(e.target.value)}
                    /></h2>  
                    <h2>new style:
                    <input
                        type='text'
                        value={style}
                        onChange={e => setName(e.target.value)}
                    /> 
                    </h2> 
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
            <div class="body">
                <h1 style={{ textAlign:"center"}}>{info.name} has not attended any events yet.</h1>
            </div>
            <Group>
                <button onClick={handleSaveClicked}>Save</button>
                <button onClick={handleCancelClicked}>Cancel</button>
            </Group>
        </>
    );
}

export default EditableProfile;
=======
      <Group>
        <button onClick={handleSaveClicked}>Save</button>
        <button onClick={handleCancelClicked}>Cancel</button>
      </Group>
    </>
  );
};

export default EditableProfile;
>>>>>>> 79b535d2c6bee0228c4ed8bae2ae433acf2486f8
