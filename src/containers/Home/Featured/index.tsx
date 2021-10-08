import { ItemFeatured } from "components";
import React from "react";
import "./featured.scss";
export const FeaturedWorks = () => {
  return (
    <div className="featured-works" id="featured">
      <div className="container">
        <div className="featured-works__title">Featured Works</div>
        <div className="featured-works__items">
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
              "tensorflow",
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
            title="Authencaition"
            details={
              "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
            }
            time="2020"
            languages={["css3", "html5", "typescript", "nodejs"]}
          />
        </div>
      </div>
    </div>
  );
};
