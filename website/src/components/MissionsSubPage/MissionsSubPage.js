import React from "react";
import CardItem from "../CardItem";
import "./MissionsSubPage.css";

function MissionsSubPage() {
  let cfscard = (
    <>
      Canadian Space Agency <br /> May 2021 - Aug 2021
    </>
  );
  let cfs = (
    <>
      cFS Developer Intern <br />
      <br /> Currently learning about space and <br />
      developing software from NASA's cFS <br />
      Library for the Canadian Space Agency!
      <br />
      <br />
      cFS is a library of reusable software <br />
      framework and mission independant <br />
      software applications for space missions.
    </>
  );

  let sparkscard = (
    <>
      The sparks Foundation <br /> Oct 2020 - Nov 2020
    </>
  );

  let sparks = (
    <>
      Data Science Intern <br />
      <br />
      Developed supervised and unsupervised <br /> machine learning models to
      predict <br />
      optimum cluster samples in Python, <br />
      using Pandas, NumPy, and Sklearn.
      <br />
      <br />
      Performed Exploratory Data Analysis <br />
      on datasets using Matplotlib, Seaborn, <br />
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
      {" "}
      Automation QA Intern <br />
      <br />
      Engineered and performed over 200 <br />
      automated testing scripts for Equitable
      <br /> Bank’s web and mobile applications <br />
      with JMeter, Javascript Protractor
      <br /> Framework, and SoapUI. <br />
      <br />
      Created a mobile testing framework with
      <br /> JMeter for Equitable Bank’s Android app <br />
      which increased efficiency by 100% and <br />
      was integrated into the CI/CD pipeline{" "}
    </>
  );

  let mcmastercard = (
    <>
      McMaster University <br /> Jan 2021 - Present
    </>
  );

  let mcmaster = (
    <>
      Teaching Assistant <br /> <br />
      Performed as a teaching assistant <br />
      for the course 1PR3: Object-Oriented
      <br /> Programming in C++.
      <br />
      <br />
      Instructed and graded over 100 students <br />
      in object oriented programming concepts
      <br /> such as inheritance, abstraction,
      <br /> encapsulation and polymorphism.
    </>
  );

  let neudosecard = (
    <>
      McMaster NEUDOSE <br /> Oct 2020 - Present
    </>
  );

  let neudose = (
    <>
      Engineered low-leveled C/C++ <br />
      applications with cFS to perform logging <br />
      on a satellite flight computer.
      <br />
      <br />
      Developed multiple core flight executive
      <br /> system APIs to communicate with other <br />
      sections of the satellite and perform <br />
      tasks.
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
      Senior Marketing Executive <br /> <br />
      Developed and executed marketing <br />
      strategies, leading to an 100% increase
      <br /> in event attendances. <br /> <br />
      Analyzed social media analytics on <br />
      various platforms and adapting to
      <br /> feedback, resulting in a 600% increase in
      <br /> online following.
    </>
  );
  return (
    <div className="cards">
      <h1>Internships</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="https://media.socastsrm.com/wordpress/wp-content/blogs.dir/1938/files/2018/07/canadian-space-agency-logo.jpg"
              text={cfscard}
              label="missions"
              path="/missions"
              test=" .cards__item"
            />
            <h4>{cfs}</h4>
          </ul>
          <br />
          <br />
          <u2 className="cards__items">
            <CardItem
              src="https://i.pinimg.com/originals/c2/d7/6d/c2d76dbec2110d77eeb508cdd4f050c1.jpg"
              text={sparkscard}
              label="missions"
              path="/missions"
            />
            <h4>{sparks}</h4>
          </u2>
          <br />
          <br />
          <u3 className="cards__items">
            <CardItem
              src="https://i.imgur.com/5ZucgRn.png"
              text={eqcard}
              label="missions"
              path="/missions"
              test=" .cards__item"
            />
            <h4>{eq}</h4>
          </u3>
        </div>
      </div>

      <h1>Experiences</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="https://islandora.ca/sites/default/files/inline-images/mcmaster_white.png"
              text={mcmastercard}
              label="missions"
              path="/missions"
              test=" .cards__item"
            />
            <h4>{mcmaster}</h4>
          </ul>
          <br />
          <br />
          <u2 className="cards__items">
            <CardItem
              src="https://i.imgur.com/JG9Hb6X.png"
              text={neudosecard}
              label="missions"
              path="/missions"
            />
            <h4>{neudose}</h4>
          </u2>
          <br />
          <br />
          <u3 className="cards__items">
            <CardItem
              src="https://i.imgur.com/gLHpu8D.png"
              text={mdlcard}
              label="missions"
              path="/missions"
              test=" .cards__item"
            />
            <h4>{mdl}</h4>
          </u3>
        </div>
      </div>
    </div>
  );
}

export default MissionsSubPage;
