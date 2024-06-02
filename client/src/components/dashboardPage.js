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
        {isAdmin && (
          <>
            <h2>Post Announcement</h2>
            {error && <p>{error}</p>}
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="author">Author:</label>
                <input
                  type="text"
                  id="author"
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                  required
                />
              </div>
              <div>
                <label htmlFor="message">Message:</label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows="4"
                  cols="50"
                  required
                />
              </div>
              <button type="submit">Post Announcement</button>
            </form>
          </>
        )}

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
