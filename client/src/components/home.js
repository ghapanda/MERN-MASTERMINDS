import React, { useState } from "react";
import { Link } from "react-router-dom";

const Home = (props) => {
    return (
        <div className={"mainContainer"}>
            <p>
                Welcome to OffBeat Sessions! UCLA's Only Street Dance Club
            </p>

            <p>
                New Here? <Link to="/signup">Signup here</Link>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {/* Adding space */}
                Already a member? <Link to="/login">Click here</Link>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {/* Adding space */}
                Follow us on Instagram: <a href="https://www.instagram.com/uclaoffbeat/">@uclaoffbeat</a>
            </p>
            
        </div>
    );
};

export default Home;