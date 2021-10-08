import { IconLanguages } from "components/IconsLanguages";
import React from "react";
import "./itemFeatured.scss";
export const ItemFeatured = () => {
  return (
    <div className="item-featured d-flex">
      <div className="item-featured__logo col-md-3 col-xl-4">
        <img
          src="https://image.freepik.com/free-vector/dashboard-user-panel-template_23-2148279574.jpg"
          alt="img"
        ></img>
      </div>
      <div className="item-featured__content col-md-9 col-xl-8">
        <div className="item-featured__content__title">
          Designing Dashboards
        </div>
        <div className="item-featured__content__material">
          <div className="item-featured__content__material__time">2020 </div>
          <div className="item-featured__content__material__languages">
            <IconLanguages language="html5" className="language__icon" />
            <IconLanguages language="googlecloud" className="language__icon" />
            <IconLanguages language="css3" className="language__icon" />
            <IconLanguages language="firebase" className="language__icon" />
            <IconLanguages language="nodejs" className="language__icon" />
            <IconLanguages language="typescript" className="language__icon" />
          </div>
        </div>
        <div className="item-featured__content__detail col-xl-9">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </div>
        <div className="item-featured__content__btn">
          <button type="button" className="btn ">
            View more
          </button>
        </div>
      </div>
    </div>
  );
};
