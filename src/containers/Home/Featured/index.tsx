import React from "react";
import { useHistory } from "react-router";
import { ItemFeatured } from "components";

import "./featured.scss";
export const FeaturedWorks = () => {
  const history = useHistory();

  return (
    <section className="featured-works" id="featured">
      <div className="container">
        <div className="featured-works__title">Featured Works</div>
        <div className="featured-works__items" style={{ padding: "10px" }}>
          <ItemFeatured
            id={"1"}
            title="Authencaition"
            details={
              "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
            }
            time="2021"
            languages={[
              "css3",
              "html5",
              "typescript",
              "nodejs",
              "mysql",
              "sequelize",
            ]}
          />
          <ItemFeatured
            id={"1"}
            title="School Data Management"
            details={
              "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
            }
            time="2020"
            languages={[
              "css3",
              "html5",
              "typescript",
              "firebase",
              "heroku",
              "react",
              "bootstrap",
              "nodejs",
            ]}
          />
          <ItemFeatured
            id={"1"}
            title="Smart Attendance"
            details={
              "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
            }
            time="2020"
            languages={[
              "css3",
              "html5",
              "javascript",
              "firebase",
              "googlecloud",
              "nodejs",
              "bootstrap",
            ]}
          />
        </div>
        <div className="w-100 d-flex mt-4">
          <button
            type="button"
            className="btn m-auto btn__more"
            onClick={() => {
              history.push("/featured");
            }}
          >
            {` More >>`}
          </button>
        </div>
      </div>
    </section>
  );
};
