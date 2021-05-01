import React from "react";
import "./AstronautSubPage.css";

function AstronautSubPage() {
  var format = ">";
  let astronaut_text_top = <>quinn ha</>;

  let astronaut_text_bot = (
    <>
      The astronaut of this space, I'm is a <br />
      second year software engineering <br />
      student at McMaster University, with a <br />
      passion for space, technology, and <br />
      anything that makes the world click.
    </>
  );
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
}

export default AstronautSubPage;
