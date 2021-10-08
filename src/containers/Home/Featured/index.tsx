import { ItemFeatured } from "components";
import React from "react";
import "./featured.scss";
export const FeaturedWorks = () => {
  return (
    <div className="featured-works" id="featured">
      <div className="container">
        <div className="featured-works__title">Featured Works</div>
        <div className="featured-works__items">
          <ItemFeatured />
          <ItemFeatured />
          <ItemFeatured />
        </div>
      </div>
    </div>
  );
};
