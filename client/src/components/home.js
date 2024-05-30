import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./home.css";

const Home = (props) => {
  sessionStorage.clear();

  return (
    <div className={"mainContainer1"}>
      
      <video autoPlay muted loop id="bgVideo" >
        <source src="/promo.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>

      <div className="blurbContainer">
        <h3>Join us as we dance, connect, and grow together!</h3>
      </div>

      <div className="linkContainer">
        <h3>
          New Here? <Link to="/signup" style={{ color: "#2d8cf0", textDecoration: "underline" }}>Signup Here</Link>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {/* Adding space */}
          Already a member? <Link to="/login" style={{ color: "#2d8cf0", textDecoration: "underline" }}>Login Here</Link>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {/* Adding space */}
          Learn More: <Link to="/aboutus" style={{ color: "#2d8cf0", textDecoration: "underline" }}>About Us</Link>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {/* Adding space */}
          Follow us on Instagram:{" "}
          <a href="https://www.instagram.com/uclaoffbeat/" className="instagram-link">@uclaoffbeat</a>
        </h3>
      </div>

    </div>
  );
};

export default Home;
