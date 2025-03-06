
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Friends from '@/components/Friends';
import Social from '@/components/Social';
import Footer from '@/components/Footer';
import ParticleBackground from '@/components/ParticleBackground';

const Index = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
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
