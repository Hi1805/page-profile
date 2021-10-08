import { IconLanguages, typeLanguages } from "components/IconsLanguages";
import React from "react";
import "./itemFeatured.scss";

interface ItemFeaturedProps {
  id: string;
  title: string;
  languages: Array<typeLanguages>;
  details: string;
  time: string;
}
export const ItemFeatured = (props: ItemFeaturedProps) => {
  const { id, title, languages, details, time } = props;
  return (
    <div className="item-featured d-flex">
      <div className="item-featured__logo col-md-3 col-xl-4">
        <img
          src="https://image.freepik.com/free-vector/dashboard-user-panel-template_23-2148279574.jpg"
          alt="img"
        ></img>
      </div>
      <div className="item-featured__content col-md-9 col-xl-8">
        <div className="item-featured__content__title">{title}</div>
        <div className="item-featured__content__material">
          <div className="item-featured__content__material__time">{time} </div>
          <div className="item-featured__content__material__languages">
            {languages.map((language) => (
              <IconLanguages language={language} className="language__icon" />
            ))}
          </div>
        </div>
        <div className="item-featured__content__detail col-xl-9">{details}</div>
        <div className="item-featured__content__btn">
          <button type="button" className="btn ">
            View more
          </button>
        </div>
      </div>
    </div>
  );
};
