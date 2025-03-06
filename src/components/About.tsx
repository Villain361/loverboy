
import { useEffect, useRef } from 'react';

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  
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
            if (imageRef.current) {
              imageRef.current.classList.add('animate-fade-in');
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
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mt-12">
          <div 
            ref={imageRef}
            className="opacity-0 lg:col-span-1 flex justify-center"
          >
            <div className="relative group max-w-sm">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-lg blur opacity-30 group-hover:opacity-70 transition duration-500"></div>
              <div className="relative glass-card overflow-hidden rounded-lg">
                <img 
                  src="/lovable-uploads/ff24b9f5-8269-4f8c-a4b5-5f4f98f4c5b5.png" 
                  alt="Lover Boy" 
                  className="w-full h-auto transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-xl font-bold">Lover Boy</h3>
                </div>
              </div>
            </div>
          </div>
          
          <div 
            ref={textRef}
            className="opacity-0 lg:col-span-2 text-lg sm:text-xl space-y-6 text-foreground/90"
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
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: 'Passion', delay: 0 },
            { title: 'Creativity', delay: 200 },
            { title: 'Connection', delay: 400 }
          ].map((value, index) => (
            <div 
              key={value.title}
              className="glass-card p-6 text-center opacity-0 animate-fade-in"
              style={{ animationDelay: `${value.delay}ms` }}
            >
              <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
              <p className="text-muted-foreground">What drives me every day and shapes my approach to life and work.</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 flex justify-center opacity-0 animate-fade-in" style={{ animationDelay: '600ms' }}>
          <div className="relative group max-w-xs">
            <div className="absolute -inset-1 bg-gradient-to-r from-accent to-primary rounded-lg blur opacity-30 group-hover:opacity-70 transition duration-500"></div>
            <div className="relative glass-card overflow-hidden rounded-lg">
              <img 
                src="/lovable-uploads/bbdafb5e-1ee0-4a3a-8302-bf8b86a215e5.png" 
                alt="Friend" 
                className="w-full h-auto transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-lg font-medium">My Friend</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
