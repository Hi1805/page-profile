import React from "react";
import { ItemCertificate } from "../../../components";
import "./certicate.scss";
export const Certificate = () => {
  return (
    <div className="certificate" id="certificates">
      <div className="container" style={{ padding: 0 }}>
        <div className="certificate__header d-flex justify-content-between">
          <div className="certificate__title">Certificates</div>
          <div className="certificate__title">Views All</div>
        </div>
        <div className="item-certificate__items w-100 d-flex flex-wrap">
          <div className="col-xl-4 col-md-6">
            <div className="item-certificate__items__item">
              <ItemCertificate
                title={"GOOGLE STUDENT STUDENT DEVELOPER CLUBS"}
                time={"2019-2020"}
                img={
                  "https://res.cloudinary.com/john-01/image/upload/v1633704009/landingpage/vbkxm7kfmgeig3rymc76.png"
                }
              />
            </div>
          </div>
          <div className="col-xl-4 col-md-6">
            <div className="item-certificate__items__item">
              <ItemCertificate
                title={"GOOGLE STUDENT STUDENT DEVELOPER CLUBS"}
                time={"2019-2020"}
                img={
                  "https://res.cloudinary.com/john-01/image/upload/v1633704009/landingpage/vbkxm7kfmgeig3rymc76.png"
                }
              />
            </div>
          </div>
          <div className="col-xl-4 col-md-6">
            <div className="item-certificate__items__item">
              <ItemCertificate
                title={"GOOGLE STUDENT STUDENT DEVELOPER CLUBS"}
                time={"2019-2020"}
                img={
                  "https://res.cloudinary.com/john-01/image/upload/v1633704009/landingpage/vbkxm7kfmgeig3rymc76.png"
                }
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
