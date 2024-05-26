import React, { useState, useEffect } from "react";
import axios from "axios";

import { Link } from "react-router-dom";

const UsersPage =(props)=>{
      const [user, setUser] = useState({
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
      })

    return (
      <>
        <Link to="/">home page</Link>
        <Link to="/schedule">shedule page</Link>

        <h1>Users</h1>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Dance Style</th>
              <th>Video</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>
                  <Link to={`/profile/${user.id}`}>{user.name}</Link>
                </td>
                <td>{user.style}</td>
                <td>
                  <video width="320" height="240" controls>
                    <source src={user.video} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    );
}

export default UsersPage;
