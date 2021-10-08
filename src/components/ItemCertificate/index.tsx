import React from "react";
import "./itemCertificate.scss";
interface ItemCertificateProps {
  title: string;
  time: string;
  img: string;
}
export const ItemCertificate = (props: ItemCertificateProps) => {
  const { title, time, img } = props;
  return (
    <div className="item-certificate" title={title}>
      <div className="item-certificate__title">{title}</div>
      <div className="item-certificate__time">{time}</div>
      <div className="item-certificate__img">
        <img src={img} alt="img"></img>
      </div>
    </div>
  );
};
