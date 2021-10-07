import React from "react";
import { Certificate, Navbar, UserInfo } from "../../containers";

export const HomeScreen = () => {
  return (
    <div className="home-screen">
      <Navbar />
      <UserInfo />
      <Certificate />
    </div>
  );
};
