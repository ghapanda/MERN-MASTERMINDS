import React, { useState } from "react";
import axios from "axios";
import Navbar from "./dashboard";
import SERVERPORT from "./portConfig";
function AnnouncementForm() {
  const [message, setMessage] = useState("");
  const [date, setDate] = useState("");
  const [error, setError] = useState(null);
  const author = sessionStorage.getItem("displayName");
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        `http://localhost:${SERVERPORT}/api/posts`,
        {
          author,
          date,
          message,
        }
      );
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
      <Navbar />
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
        <h2 class="post-announcement-title">Post Announcement</h2>
        {error && <p>{error}</p>}
        <form onSubmit={handleSubmit} class="post-announcement-form">
          <div style={{ marginBottom: "10px" }} class="form-group">
            <label
              htmlFor="date"
              style={{ display: "block", marginRight: "30px" }}
            >
              Date:{"  "}
            </label>
            <textarea
              class="form-input1"
              id="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              rows="1"
              cols="50"
              required
            />
          </div>
          <div style={{ marginBottom: "10px" }} class="form-group">
            <label htmlFor="message" style={{ display: "block" }}>
              Message:
            </label>
            <textarea
              class="form-input2"
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows="4"
              cols="50"
              required
            />
          </div>
          <button type="submit" className="post-button">
            Post Announcement
          </button>
        </form>
      </div>
    </>
  );
}

export default AnnouncementForm;
