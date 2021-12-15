import React from "react";
import HeaderNavigation from "../common/headernavigation/headernavigation";
import Header from "../common/header/header";
import Banner from "./banner/banner";

function Home() {
  return (
    <div>
      <Header />
      <HeaderNavigation />
      <Banner />
    </div>
  );
}
export default Home;
