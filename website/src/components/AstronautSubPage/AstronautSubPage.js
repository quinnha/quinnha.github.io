import React from "react";
import "./AstronautSubPage.css";

function AstronautSubPage() {
  var format = ">";

  var left_style = {
    width: "100%",
  };

  var right_style = {
    width: "100%",
  };

  let astronaut_text_top = <>quinn ha</>;

  let astronaut_text_bot = (
    <>
      The astronaut of this space, I'm is a second year software engineering
      student at McMaster University, with a passion for space, technology, and
      anything that makes the world click.
    </>
  );
  return (
    <div className="cards_astro">
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <h2 style={left_style}> {astronaut_text_top}</h2>
            <p>easter egg time</p>
            <h4 style={right_style}>{astronaut_text_bot}</h4>
          </ul>
        </div>
      </div>
    </div>
  );

  /*
  return (
    <div className="cards_astro">
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <h2>{astronaut_text_top}</h2>
            <p>easter egg go brr</p>
            <h4>{astronaut_text_bot}</h4>
          </ul>
        </div>
      </div>
    </div>
  );
  */
}

export default AstronautSubPage;
