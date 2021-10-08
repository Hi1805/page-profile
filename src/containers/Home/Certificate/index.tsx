import React from "react";
import { ItemCertificate } from "../../../components";
import "./certicate.scss";
export const Certificate = () => {
  return (
    <div className="certificate" id="certificates">
      <div className="container" style={{ padding: 0 }}>
        <div className="certificate__title">Certificates</div>
        <div className="item-certificate__items w-100 d-flex flex-wrap">
          <div className="col-xl-4 col-md-6">
            <div className="item-certificate__items__item">
              <ItemCertificate />
            </div>
          </div>
          <div className="col-xl-4 col-md-6">
            <div className="item-certificate__items__item">
              <ItemCertificate />
            </div>
          </div>
          <div className="col-xl-4 col-md-6">
            <div className="item-certificate__items__item">
              <ItemCertificate />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
