import { IconLanguages, typeLanguages } from "components/IconsLanguages";
import React from "react";
import "./itemFeatured.scss";
import { useIsMobile } from "hooks";

interface ItemFeaturedProps {
  id: string;
  title: string;
  languages: Array<typeLanguages>;
  details: string;
  time: string;
}
export const ItemFeatured = (props: ItemFeaturedProps) => {
  const { id, title, languages, details, time } = props;
  const isMobile = useIsMobile();
  const languageClassName = !isMobile
    ? " languages item-featured__content__material__languages--desktop"
    : "languages item-featured__content__material__languages--mobile";
  return (
    <div className="item-featured d-flex flex-wrap">
      <div className="item-featured__logo col-sm-12 col-md-5 col-xl-4">
        <img
          src="https://image.freepik.com/free-vector/dashboard-user-panel-template_23-2148279574.jpg"
          alt="img"
        />
      </div>
      <div className="item-featured__content col-sm-12 col-md-7 col-xl-8">
        <div className="item-featured__content__title">{title}</div>
        <div className="item-featured__content__material d-flex flex-wrap">
          <div className="item-featured__content__material__time col-12 col-md-2 col-xl-1">
            <p> {time}</p>
          </div>
          <div
            className={`${languageClassName} col-12 col-sm-9 d-flex col-md-10 flex-wrap col-xl-11`}
          >
            {languages.map((language, index) => (
              <IconLanguages
                key={index}
                language={language}
                className="language__icon"
              />
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
