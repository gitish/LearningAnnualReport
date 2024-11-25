import React from 'react';
import HeroSection from '../components/HeroSection';
import Statistics from '../components/Statistics';
import DeveloperDetails from '../components/DeveloperDetails';

const Home = () => {
  return (
    <div>
      <HeroSection />
      <Statistics />
      <DeveloperDetails />
    </div>
  );
};

export default Home;
