import React from "react";

import "./style.scss";

import HeroBanner from "./heroBanner/HeroBanner";
import Trending from "./trending/Trending";
import TrendingTV from "./trending/TrendingTV";
import Popular from "./popular/Popular";
import TopRated from "./toprated/TopRated";
import UpComing from "./upComing/UpComing";

const Home = () => {
  return (
    <div className="homePage">
      <HeroBanner />
      <Trending />
      <TrendingTV />
      <UpComing />
      <Popular />
      <TopRated />
    </div>
  );
};

export default Home;
