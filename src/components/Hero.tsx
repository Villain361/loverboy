
import { useEffect, useRef, useState } from 'react';
import { ArrowDown } from 'lucide-react';
import CustomCursor from './CustomCursor';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showCustomCursor, setShowCustomCursor] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    setIsVisible(true);
    setShowCustomCursor(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      const hero = heroRef.current;
      if (!hero) return;
      
      const { left, top, width, height } = hero.getBoundingClientRect();
      const x = (e.clientX - left) / width - 0.5;
      const y = (e.clientY - top) / height - 0.5;
      
      const title = hero.querySelector('.hero-title') as HTMLElement;
      const subtitle = hero.querySelector('.hero-subtitle') as HTMLElement;
      
      if (title && subtitle) {
        title.style.transform = `translate3d(${x * 20}px, ${y * 10}px, 0) rotateX(${y * 5}deg) rotateY(${-x * 5}deg)`;
        subtitle.style.transform = `translate3d(${x * 10}px, ${y * 5}px, 0)`;
      }
    };

    const handleScroll = () => {
      if (heroRef.current) {
        const heroRect = heroRef.current.getBoundingClientRect();
        if (heroRect.bottom <= 0) {
          setShowCustomCursor(false);
        } else {
          setShowCustomCursor(true);
        }
      }
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <section 
      id="hero" 
      ref={heroRef}
      className="h-screen flex items-center justify-center relative overflow-hidden"
    >
      {showCustomCursor && <CustomCursor />}
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="space-y-6">
          <div
            className={`transition-all duration-1000 ease-out transform perspective-1000 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <h1 className="hero-title text-5xl md:text-7xl lg:text-8xl font-bold transition-transform duration-300 ease-out select-none">
              <span className="inline-block animate-float">Lover </span>
              <span className="inline-block animate-float [animation-delay:200ms] bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Boy</span>
            </h1>
          </div>
          
          <div
            className={`transition-all duration-1000 delay-300 ease-out transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <p className="hero-subtitle text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto transition-transform duration-300 ease-out">
              <span className="typing-container block sm:inline-block">Welcome to my portfolio</span>
            </p>
          </div>
          
          <div
            className={`transition-all duration-1000 delay-700 ease-out transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <a 
              href="#about"
              className="inline-block mt-8 text-foreground/80 hover:text-foreground transition-colors"
            >
              <ArrowDown className="animate-bounce-subtle" size={32} />
            </a>
          </div>
        </div>
      </div>
      
      {/* Background decorative elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full filter blur-3xl animate-pulse-glow opacity-50"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full filter blur-3xl animate-pulse-glow [animation-delay:2s] opacity-50"></div>
    </section>
  );
};

export default Hero;
