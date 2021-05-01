import React from "react";
import CardItem from "../CardItem";
import "./MissionsSubPage.css";
import useMediaQuery from "react-use-media-query";

function MissionsSubPage() {
  let cfscard = (
    <>
      Canadian Space Agency <br /> May 2021 - Aug 2021
    </>
  );
  let cfs = (
    <>
      cFS Developer Intern <br /> <br /> Currently learning about space and
      developing software from NASA's cFS Library for the Canadian Space Agency!
      <br /> <br />
      cFS is a library of reusable software framework and mission independant
      software applications for space missions.
    </>
  );

  let sparkscard = (
    <>
      The Sparks Foundation <br /> Oct 2020 - Nov 2020
    </>
  );

  let sparks = (
    <>
      Data Science Intern <br />
      <br />
      Developed supervised and unsupervised machine learning models to predict
      optimum cluster samples in Python, using Pandas, NumPy, and Sklearn.
      <br />
      <br />
      Performed Exploratory Data Analysis on datasets using Matplotlib, Seaborn,
      and other data visualization tools.
    </>
  );

  let eqcard = (
    <>
      Equitable Bank <br /> May 2020 - Aug 2020
    </>
  );

  let eq = (
    <>
      Automation QA Intern <br />
      <br />
      Engineered and performed over 200 automated testing scripts for Equitable
      Bank’s web and mobile applications with JMeter, Javascript Protractor
      Framework, and SoapUI. <br />
      <br />
      Created a mobile testing framework with JMeter for Equitable Bank’s
      Android app which increased efficiency by 100% and was integrated into the
      CI/CD pipeline{" "}
    </>
  );

  let mcmastercard = (
    <>
      McMaster University <br /> Jan 2021 - Present
    </>
  );

  let mcmaster = (
    <>
      <br />
      Teaching Assistant <br /> <br />
      Performed as a teaching assistant for the course 1PR3: Object-Oriented
      Programming in C++.
      <br />
      <br />
      Instructed and graded over 100 students in object oriented programming
      concepts such as inheritance, abstraction, encapsulation and polymorphism.
    </>
  );

  let neudosecard = (
    <>
      McMaster NEUDOSE <br /> Oct 2020 - Present
    </>
  );

  let neudose = (
    <>
      <br />
      Engineered low-leveled C/C++ applications with cFS to perform logging on a
      satellite flight computer.
      <br />
      <br />
      Developed multiple core flight executive system APIs to communicate with
      other sections of the satellite and perform tasks.
    </>
  );

  let mdlcard = (
    <>
      {" "}
      McMaster Design League <br /> Oct 2020 - Present
    </>
  );

  let mdl = (
    <>
      <br />
      Senior Marketing Executive <br /> <br />
      Developed and executed marketing strategies, leading to an 100% increase
      in event attendances. <br /> <br />
      Analyzed social media analytics on various platforms and adapting to
      feedback, resulting in a 600% increase in online following.
    </>
  );

  const isMobile = window.innerWidth < 620;

  var right_style;

  if (isMobile) {
    right_style = { width: "100%" };
  } else {
    right_style = { width: "65%" };
  }

  return (
    <div className="cards">
      <h1>Internships</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="https://media.socastsrm.com/wordpress/wp-content/blogs.dir/1938/files/2018/07/canadian-space-agency-logo.jpg"
              text={cfscard}
            />
            <h4 style={right_style}>{cfs}</h4>
          </ul>
        </div>
      </div>

      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="https://i.pinimg.com/originals/c2/d7/6d/c2d76dbec2110d77eeb508cdd4f050c1.jpg"
              text={sparkscard}
            />
            <h4 style={right_style}>{sparks}</h4>
          </ul>
        </div>
      </div>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem src="https://i.imgur.com/5ZucgRn.png" text={eqcard} />
            <h4 style={right_style}>{eq}</h4>
          </ul>
        </div>
      </div>

      <h1>Experiences</h1>

      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="https://islandora.ca/sites/default/files/inline-images/mcmaster_white.png"
              text={mcmastercard}
            />
            <h4 style={right_style}>{mcmaster}</h4>
          </ul>
        </div>
      </div>

      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="https://i.imgur.com/JG9Hb6X.png"
              text={neudosecard}
              label="missions"
              path="/missions"
            />
            <h4 style={right_style}>{neudose}</h4>
          </ul>
        </div>
      </div>

      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="https://i.imgur.com/gLHpu8D.png"
              text={mdlcard}
              label="missions"
              path="/missions"
              test=" .cards__item"
            />
            <h4 style={right_style}>{mdl}</h4>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default MissionsSubPage;
