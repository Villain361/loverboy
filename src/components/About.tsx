
import { useEffect, useRef } from 'react';

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (headingRef.current) {
              headingRef.current.classList.add('animate-fade-in');
            }
            if (textRef.current) {
              textRef.current.classList.add('animate-fade-in-delayed');
            }
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  
  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="py-20 sm:py-28"
    >
      <div className="section-container">
        <h2 
          ref={headingRef}
          className="section-heading opacity-0"
        >
          About Me
        </h2>
        
        <div 
          ref={textRef}
          className="opacity-0 text-lg sm:text-xl max-w-3xl mx-auto space-y-6 text-foreground/90"
        >
          <p>
            Hey there! I'm Lover Boy, a normal, friendly person with a passion for creating beautiful things. 
            I believe in keeping life simple, but that doesn't mean it can't be extraordinary.
          </p>
          
          <p>
            When I'm not working on cool projects, you might find me hanging out with friends, 
            exploring new places, or just enjoying the little moments that make life special.
          </p>
          
          <p>
            I value genuine connections and creativity. This portfolio is a glimpse into my world 
            and the things I care about.
          </p>
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {['Passion', 'Creativity', 'Connection'].map((value, index) => (
            <div 
              key={value}
              className="glass-card p-6 text-center opacity-0 animate-fade-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <h3 className="text-xl font-semibold mb-3">{value}</h3>
              <p className="text-muted-foreground">What drives me every day and shapes my approach to life and work.</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
