import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./home.css"

const Home = (props) => {
    return (
        <div className={"mainContainer"}>

            {/* Background video */}
            <video autoPlay muted loop id="bgVideo">
                <source src="/promo.webm" type="video/webm" />
                {/* Add additional source elements for different video formats if needed */}
                Your browser does not support the video tag.
            </video>

        <div className="textContainer">
            <div className="welcomeMessage">
                <p>Welcome to OffBeat Sessions! UCLA's Only Street Dance Club</p>
            </div>

            <p>
                New Here? <Link to="/signup">Signup here</Link>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {/* Adding space */}
                Already a member? <Link to="/login">Click here</Link>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {/* Adding space */}
                Learn More: <Link to="/aboutus">About Us</Link>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {/* Adding space */}
                Follow us on Instagram: <a href="https://www.instagram.com/uclaoffbeat/">@uclaoffbeat</a>
            </p>


            <p>Join us as we dance, connect, and grow together!</p>

        </div>

        </div>
    );
};

export default Home;
