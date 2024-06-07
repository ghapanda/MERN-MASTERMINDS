import React, { useState, useEffect } from "react";
import Navbar from "./dashboard";
import NavbarNotAdmin from "./dashboardNotAdmin";
import SERVERPORT from "./portConfig";

import axios from "axios";

const DashboardPage = () => {
  const isAdmin = sessionStorage.getItem("isAdmin") === "true";

  const [author, setAuthor] = useState("");
  const [message, setMessage] = useState("");
  const [announcements, setAnnouncements] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAnnouncements = async () => {
      try {
        const response = await axios.get(
          `http://localhost:${SERVERPORT}/api/fetchPosts`
        );
        setAnnouncements(response.data);
      } catch (error) {
        setError("An error occurred. Please try again later.");
      }
    };

    fetchAnnouncements();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        `http://localhost:${SERVERPORT}/api/posts`,
        {
          author,
          message,
        }
      );
      setAuthor("");
      setMessage("");
      setError(null);
      if (response.data.message == "Announcement posted successfully")
        alert("Announcement posted successfully");
    } catch (error) {
      setError("An error occurred. Please try again later.");
    }
  };

  return (
    <>
      {isAdmin ? <Navbar /> : <NavbarNotAdmin />}
      <div
        style={{
          backgroundColor: "lightgrey",
          height: "100vh",
          overflowY: "scroll",
          fontFamily: "sans-serif",
          border: "none",
          boxShadow: "4px 4px #323232",
          padding: "20px",
        }}
      >
        <div
          className="RecentAnnouncements"
          style={{ fontSize: "25px", color: "#323232" }}
        >
          Recent Announcements
        </div>
        <div className="announcements-box">
          {announcements.map((announcement, index) => (
            <div className="Announcement" key={index}>
              <strong>
                {announcement.date} {announcement.author}:
              </strong>{" "}
              {announcement.message}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default DashboardPage;
