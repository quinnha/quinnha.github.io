import React from "react";
import "./Astronaut.css";

function Astronaut() {
  var format = ">";
  let astronaut_text_left = (
    <>
      quinn ha.
      <br />
      {format} software dev
      <br />
      {format} space enthusiast
      <br />
      {format} dreamer
    </>
  );
  let astronaut_text_right = (
    <>
      Hey! I'm Quinn, a software <br />
      engineering student at McMaster
      <br />
      University with a mission to create
      <br />
      impact through software. <br />
      <br />
      I'm experienced in Python, C++,
      <br /> Java, and Matlab, but I'm always <br /> looking to learn new
      languages.
    </>
  );
  return (
    <div className="astronaut" useRef="#astronaut">
      <div className="cards">
        <div className="cards__container">
          <div className="cards__wrapper">
            <ul className="cards__items">
              <h2>{astronaut_text_left}</h2>
              <p>you found me!</p>
              <h4>{astronaut_text_right}</h4>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Astronaut;
