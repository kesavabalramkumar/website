import React from 'react';
import HeroBanner from '../components/home/HeroBanner';
import NewsSection from '../components/home/NewsSection';
import VideoCarousel from '../components/home/VideoCarousel';
import FeaturedPrograms from '../components/home/FeaturedPrograms';
import TestimonialSection from '../components/home/TestimonialSection';
import StatsSection from '../components/home/StatsSection';

const HomePage: React.FC = () => {
  return (
    <>
      <HeroBanner />
      <div className="container-custom">
        <FeaturedPrograms />
        <NewsSection />
        <VideoCarousel />
        <StatsSection />
        <TestimonialSection />
      </div>
    </>
  );
};

export default HomePage;