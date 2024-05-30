import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./aboutus.css";


const AboutUs = (props) => {
  sessionStorage.clear();

  return (
    <div className="mainContainer2">
      <div className="miniCard">
        <h3>About Us</h3>
      </div>
  
      <div className="cardContainer">
        <div className="card">
          <h3>Foster Community:</h3> We believe in the power of dance
          to bring people together. Whether you're a seasoned vet or just
          starting out, you'll find a welcoming and inclusive space here at
          OffBeat Sessions. Join us as we connect, inspire, and support one
          another on our dance journeys.
        </div>
        <div className="card">
          <h3>We Promote Freestyle Dance Culture:</h3> Freestyle is more
          than just movement: it's a form of self-expression and creativity.
          At OffBeat Sessions, we're dedicated to promoting and cultivating
          the development of freestyle dance culture at UCLA. Through
          sessions, workshops, and events we empower dancers to explore their
          artistry and push the boundaries of their craft.
        </div>
        <div className="card">
          <h3>We Build Connections:</h3> We stress the importance of
          community and collaboration in the street dance world. That's why
          we're committed to forging connections with freestyle dance
          communities beyond UCLA. By fostering collaboration and growth in
          the broader dance community, we aim to create a vibrant and
          interconnected network of dancers.
        </div>
        <div className="card">
          <h3>Welcome All Styles:</h3> Whether you're into hip hop,
          popping, locking, breaking, animation, house, or any other style,
          you'll find a home here at OffBeat Sessions. Our community
          celebrates diversity and welcomes dancers of all backgrounds and
          skill levels.
        </div>
      </div>

      <div className="miniCard">
          Return to <Link to="/" style={{ color: "#2d8cf0", textDecoration: "underline" }}>home</Link>
      </div>
  
    </div>
  );
  
};

export default AboutUs;
