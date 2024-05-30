import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./home.css";

const Home = (props) => {
  sessionStorage.clear();

  return (
    <div className={"mainContainer"}>
      
      <video autoPlay muted loop id="bgVideo" >
        <source src="/promo.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>

      <div className="blurbContainer">
        <p>Join us as we dance, connect, and grow together!</p>
      </div>

      <div className="linkContainer">
        <p>
          New Here? <Link to="/signup">Signup Here</Link>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {/* Adding space */}
          Already a member? <Link to="/login">Login Here</Link>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {/* Adding space */}
          Learn More: <Link to="/aboutus">About Us</Link>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {/* Adding space */}
          Follow us on Instagram:{" "}
          <a href="https://www.instagram.com/uclaoffbeat/">@uclaoffbeat</a>
        </p>
      </div>

    </div>
  );
};

export default Home;
