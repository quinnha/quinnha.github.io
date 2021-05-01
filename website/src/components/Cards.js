import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";

function Cards() {
  return (
    <div className="cards">
      <a id="link" href="https://github.com/quinnha" target="_blank">
        Missions
      </a>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="https://media.socastsrm.com/wordpress/wp-content/blogs.dir/1938/files/2018/07/canadian-space-agency-logo.jpg"
              text="Canadian Space Agency - cFS Developer Intern"
              label="missions"
              path="/missions"
              test=" .cards__item"
            />
            <CardItem
              src="https://i.pinimg.com/originals/c2/d7/6d/c2d76dbec2110d77eeb508cdd4f050c1.jpg"
              text="The Sparks Foundation - Data Science Intern"
              label="missions"
              path="/missions"
            />
            <CardItem
              src="https://i.imgur.com/5ZucgRn.png"
              text="Equitable Bank - QA Analyst Intern"
              label="missions"
              path="/missions"
            />
          </ul>
          <u2 className="cards__items">
            <CardItem
              src="https://islandora.ca/sites/default/files/inline-images/mcmaster_white.png"
              text="McMaster University - Teaching Assistant"
              label="missions"
              path="/missions"
            />
            <CardItem
              src="https://i.imgur.com/JG9Hb6X.png"
              text="McMaster Interdisciplinary Satellite Team - Software Developer"
              label="missions"
              path="/missions"
            />
            <CardItem
              src="https://i.imgur.com/gLHpu8D.png"
              text="McMaster Design League - Senior Marketing Executive"
              label="missions"
              path="/missions"
            />
          </u2>
        </div>
      </div>

      <h1>
        {" "}
        <a id="link" href="https://github.com/quinnha" target="_blank">
          Tasks
        </a>
      </h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="https://i.imgur.com/8i47A5S.png"
              text="Personal Website"
              label="missions"
              path="/"
              github="https://github.com/"
            />
            <CardItem
              src="https://youthincmag.com/wp-content/uploads/2020/07/LinkedIn.jpeg"
              text="Data Science Repository"
              label="missions"
              path="/"
              github="https://github.com/quinnha/Data_Science_Adventures"
            />
            <CardItem
              src="https://miro.medium.com/max/2224/1*GSNuwxBxEnym7qCF-GlRig.png"
              text="Competitive Programming Repository"
              label="missions"
              path="/"
              github="https://github.com/quinnha/Competitive-Programming"
            />
          </ul>

          <u2 className="cards__items">
            <CardItem
              src="https://challengepost-s3-challengepost.netdna-ssl.com/photos/production/software_photos/001/355/259/datas/gallery.jpg"
              text="Pic A Friend"
              label="missions"
              path="/"
              github="https://github.com/quinnha/Pic-A-Friend"
            />
            <CardItem
              src="https://github.com/quinnha/Unlucky-Bot/raw/main/unlucky_steel.jpg"
              text="Unlucky Discord Bot"
              label="missions"
              path="/"
              github="https://github.com/quinnha/Unlucky-Bot"
            />
            <CardItem
              src="https://is3-ssl.mzstatic.com/image/thumb/Purple113/v4/14/01/a7/1401a7cb-3235-7146-6efb-d97be0d0598e/source/512x512bb.jpg"
              text="React Tic-Tac-Toe"
              label="missions"
              path="/"
              github="https://github.com/quinnha/react-tic-tac-toe"
            />
          </u2>
        </div>
      </div>
    </div>
  );
}

export default Cards;
