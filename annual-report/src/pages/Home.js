import React from "react";
import HeroSection from "../components/HeroSection";
import Statistics from "../components/Statistics";
import DeveloperDetails from "../components/DeveloperDetails";

import Sessions from "../components/Sessions/Sessions";

const Home = () => {
  return (
    <div>
      <Sessions />
      <HeroSection />
      <Statistics />
      <DeveloperDetails />
    </div>
  );
};

export default Home;
