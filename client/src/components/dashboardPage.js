import React, { useState, useEffect } from "react";
import Navbar from "./dashboard";
import NavbarNotAdmin from "./dashboardNotAdmin";

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
          "http://localhost:3002/api/fetchPosts"
        );
        setAnnouncements(response.data);
      } catch (error) {
        console.error(error);
        setError("An error occurred. Please try again later.");
      }
    };

    fetchAnnouncements();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("http://localhost:3002/api/posts", {
        author,
        message,
      });
      setAuthor("");
      setMessage("");
      setError(null);
      if (response.data.message == "Announcement posted successfully")
        alert("Announcement posted successfully");
    } catch (error) {
      console.error(error);
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
        <h2>Recent Announcements</h2>
        <ul>
          {announcements.map((announcement, index) => (
            <li key={index}>
              <strong>{announcement.author}:</strong> {announcement.message}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default DashboardPage;
