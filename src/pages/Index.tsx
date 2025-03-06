
import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Friends from '@/components/Friends';
import Social from '@/components/Social';
import Footer from '@/components/Footer';
import ParticleBackground from '@/components/ParticleBackground';
import CustomCursor from '@/components/CustomCursor';

const Index = () => {
  const [isHeroSection, setIsHeroSection] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById('hero');
      if (heroSection) {
        const heroBottom = heroSection.getBoundingClientRect().bottom;
        setIsHeroSection(heroBottom > 0);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`min-h-screen relative overflow-hidden ${isHeroSection ? 'cursor-none' : ''}`}>
      {isHeroSection && <CustomCursor />}
      <ParticleBackground />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Friends />
        <Social />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
