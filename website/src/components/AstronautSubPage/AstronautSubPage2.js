import React from "react";
import "./AstronautSubPage2.css";

function AstronautSubPage2() {
  var format = ">";

  var left_style = {
    width: "100%",
  };

  var right_style = {
    width: "100%",
  };
  let astronaut_text_top = <>skills</>;

  let astronaut_text_bot = (
    <>
      languages <br /> {format} python, c/c++. java, matlab
      <br /> <br />
      data science <br /> {format} pandas, sklearn, opencv, pytorch, matplotlib,
      seaborn. Jupyter
      <br />
      <br />
      qa <br /> {format} jmeter, soapui
    </>
  );

  let astronaut_text_bot_2 = (
    <>
      web dev <br /> {format} html, css, javascript, react
      <br />
      <br />
      tools <br /> {format} git, jira, confluence, anaconda, viusual studio code
    </>
  );
  return (
    <div className="cards_astro_2">
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <h2 style={left_style}> {astronaut_text_top}</h2>
            <p>easter egg time</p>
            <h4 style={right_style}>{astronaut_text_bot}</h4>
            <p>easter egg time</p>
            <h4 style={right_style}>{astronaut_text_bot_2}</h4>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AstronautSubPage2;
