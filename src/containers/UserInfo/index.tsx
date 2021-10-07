import React from "react";
import "./userInfo.scss";
import avt from "./img/avt.png";
export const UserInfo = () => {
  return (
    <div className="user-info container d-flex">
      <div className="user-info__detail col-7">
        <div className="user-info__detail__title">
          Hi, I am John, Web Developer
        </div>
        <div className="user-info__detail__body">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </div>
        <div className="user-info__detail__btn">
          <button type="button">Download Resume</button>
        </div>
      </div>
      <div className="user-info__avt col-5">
        <img src={avt} alt="avatar"></img>
      </div>
    </div>
  );
};
