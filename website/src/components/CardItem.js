import React from "react";
import { Link } from "react-router-dom";

function CardItem(props) {
  return (
    <>
      <li className="cards__item">
        <Link className="cards__item__link" to={props.path}>
          <figure className="cards__item__pic-wrap" data-category={props.label}>
            <a id="link" href={props.github} target="_blank">
              <img src={props.src} className="cards__item__img" alt="Image" />
            </a>
          </figure>
          <div className="cards__item__info">
            <h4 className="cards__item__text">
              {" "}
              <a id="link" href={props.github} target="_blank">
                {props.text}
              </a>
            </h4>
          </div>
        </Link>
      </li>
    </>
  );
}

export default CardItem;
