import React from "react";
import "./userInfo.scss";
export const UserInfo = () => {
  return (
    <div className="user-info container d-flex" id="aboutus">
      <div className="user-info__detail col-7">
        <div className="user-info__detail__title">
          Hi, I am Huy, Web Developer
        </div>
        <div className="user-info__detail__body">
          I am student of Duy Tan Univeristy,
        </div>
        <div className="user-info__detail__btn">
          <button type="button">Download Resume</button>
        </div>
      </div>

      <div className="user-info__avt col-5">
        <img
          src="https://res.cloudinary.com/john-01/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1633684344/landingpage/g2vhbfflfcjb7desk8zh.jpg"
          alt="avatar"
        ></img>
      </div>
    </div>
  );
};
