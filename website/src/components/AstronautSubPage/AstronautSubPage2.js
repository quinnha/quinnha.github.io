import React from "react";
import "./AstronautSubPage2.css";

function AstronautSubPage2() {
  var format = ">";
  let astronaut_text_top = <>skills</>;

  let astronaut_text_bot = (
    <>
      languages <br /> {format} python, c/c++. java, matlab
      <br /> <br />
      data science <br /> {format} pandas, sklearn, opencv, pytorch
      <br />
      <br />
      web dev <br /> {format} html, css, javascript, react
      <br />
      <br />
      tools <br /> {format} git, jira, confluence, anaconda
    </>
  );
  return (
    <div className="cards_astro_2">
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

export default AstronautSubPage2;
