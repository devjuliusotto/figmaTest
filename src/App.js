import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import WorkExperienceSection from './components/WorkExperienceSection';
import HireMeSection from './components/HireMeSection';
import PortfolioSection from './components/PortfolioSection';
import TestimonialsSection from './components/TestimonialsSection';
import ProjectIdeaSection from './components/ProjectIdeaSection';
import ScrollingWords from './components/ScrollingWords';
import BlogSection from './components/BlogSection';
import FooterSection from './components/FooterSection';

function App() {
  return (
    <div style={{
      width: 1440,
      // altura gigante conforme o Flutter? Ajuste conforme necessário.
      paddingTop:40,
      paddingBottom:40,
      background:'white',
      display:'flex',
      flexDirection:'column',
      alignItems:'center'
    }}>
      <div style={{
        display:'flex',
        flexDirection:'column',
        alignItems:'center'
      }}>
        <Header />
        <HeroSection />
        <ServicesSection />
        <WorkExperienceSection />
        <HireMeSection />
        <PortfolioSection />
        <TestimonialsSection />
        <ProjectIdeaSection />
        <ScrollingWords />
        <BlogSection />
        <FooterSection />
      </div>
    </div>
  );
}

export default App;
