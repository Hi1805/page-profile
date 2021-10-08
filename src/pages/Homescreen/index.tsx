import { FeaturedWorks } from "containers/Home/Featured";
import React from "react";
import { Certificate, Footer, Navbar, UserInfo } from "containers";

const HomeScreen = () => {
  return (
    <div className="home-screen">
      <Navbar />
      <UserInfo />
      <Certificate />
      <FeaturedWorks />
      <Footer />
    </div>
  );
};
export default HomeScreen;
