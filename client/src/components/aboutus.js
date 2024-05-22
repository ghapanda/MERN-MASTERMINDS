import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./aboutus.css";


const AboutUs = (props) => {
  sessionStorage.clear();

  return (
    <div className="mainContainer">

      {/* Background video */}
      <video autoPlay muted loop id="bgVideo">
        <source src="/colorful.mp4" type="video/mp4" />
        {/* Add additional source elements for different video formats if needed */}
        Your browser does not support the video tag.
      </video>

      <div className="mission">
        <ul>
          <li>
            <strong>Foster Community:</strong> We believe in the power of dance
            to bring people together. Whether you're a seasoned vet or just
            starting out, you'll find a welcoming and inclusive space here at
            OffBeat Sessions. Join us as we connect, inspire, and support one
            another on our dance journeys.
          </li>
          <li>
            <strong>We Promote Freestyle Dance Culture:</strong> Freestyle is more
            than just movement: it's a form of self-expression and creativity.
            At OffBeat Sessions, we're dedicated to promoting and cultivating
            the development of freestyle dance culture at UCLA. Through
            sessions, workshops, and events we empower dancers to explore their
            artistry and push the boundaries of their craft.
          </li>
          <li>
            <strong>We Build Connections:</strong> We stress the importance of
            community and collaboration in the street dance world. That's why
            we're committed to forging connections with freestyle dance
            communities beyond UCLA. By fostering collaboration and growth in
            the broader dance community, we aim to create a vibrant and
            interconnected network of dancers.
          </li>
          <li>
            <strong>Welcome All Styles:</strong> Whether you're into hip hop,
            popping, locking, breaking, animation, house, or any other style,
            you'll find a home here at OffBeat Sessions. Our community
            celebrates diversity and welcomes dancers of all backgrounds and
            skill levels.
          </li>
        </ul>
      </div>

      </div>
  );
};

export default AboutUs;
