import React from "react";
import "./Astronaut.css";

function Astronaut() {
  var format = ">";

  var left_style = {
    width: "100%",
  };

  var right_style = {
    width: "100%",
  };

  let astronaut_text_left = (
    <>
      quinn ha.
      <br />
      {format}software dev
      <br />
      {format} space enthusiast
      <br />
      {format} dreamer
    </>
  );

  let astronaut_text_right = (
    <>
      Hey! I'm Quinn, a software engineering student at McMaster University with
      a mission to create impact through software. I'm experienced in Python,
      C++, Java, and Matlab, but I'm always looking to learn new languages.
    </>
  );
  return (
    <div className="cards">
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <h2 style={left_style}> {astronaut_text_left}</h2>
            <p>easter egg time</p>
            <h4 style={right_style}>{astronaut_text_right}</h4>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Astronaut;
