import React, { useState } from "react";
import axios from "axios";
import Navbar from "./dashboard";

function AnnouncementForm() {
  const [message, setMessage] = useState("");
  const [date, setDate] = useState("");
  const [error, setError] = useState(null);
  const author = sessionStorage.getItem("displayName");
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("http://localhost:3002/api/posts", {
        author,
        date,
        message,
      });
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
      <Navbar />
      <div>
        <h2>Post Announcement</h2>
        {error && <p>{error}</p>}
        <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "10px" }}>
            <label htmlFor="date" style={{ display: "block" }}>
              Date:
            </label>
            <textarea
              id="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              rows="1"
              cols="50"
              required
            />
          </div>
          <div style={{ marginBottom: "10px" }}>
            <label htmlFor="message" style={{ display: "block" }}>
              Message:
            </label>
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
      </div>
    </>
  );
}

export default AnnouncementForm;
