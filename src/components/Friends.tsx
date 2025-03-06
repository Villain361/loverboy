
import { useEffect, useRef, useState } from 'react';
import { ExternalLink } from 'lucide-react';

const Friends = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      const elements = sectionRef.current.querySelectorAll('.animate-on-scroll');
      elements.forEach((el) => observer.observe(el));
    }
    
    return () => {
      if (sectionRef.current) {
        const elements = sectionRef.current.querySelectorAll('.animate-on-scroll');
        elements.forEach((el) => observer.unobserve(el));
      }
    };
  }, []);
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const { left, top, width, height } = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - left) / width - 0.5;
    const y = (e.clientY - top) / height - 0.5;
    
    cardRef.current.style.transform = `
      perspective(1000px) 
      rotateY(${x * 10}deg) 
      rotateX(${-y * 10}deg) 
      translateZ(20px)
    `;
  };
  
  const resetCardTransform = () => {
    if (!cardRef.current) return;
    cardRef.current.style.transform = 'perspective(1000px) rotateY(0) rotateX(0) translateZ(0)';
  };
  
  return (
    <section 
      id="friends" 
      ref={sectionRef}
      className="py-20 sm:py-28 bg-secondary/50"
    >
      <div className="section-container">
        <h2 className="section-heading animate-on-scroll opacity-0">
          Friends
        </h2>
        
        <p className="section-subheading animate-on-scroll opacity-0">
          Great connections make everything better
        </p>
        
        <div className="max-w-md mx-auto">
          <div 
            ref={cardRef}
            className={`glass-card p-8 border border-border transition-all duration-300 transform ${
              isHovered ? 'shadow-glow-strong' : ''
            }`}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => {
              setIsHovered(false);
              resetCardTransform();
            }}
          >
            <div className="flex flex-col items-center space-y-4">
              <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-primary/20 shadow-inner relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent animate-rotate-slow"></div>
                <div className="w-full h-full rounded-full overflow-hidden">
                  <img 
                    src="/lovable-uploads/bbdafb5e-1ee0-4a3a-8302-bf8b86a215e5.png" 
                    alt="Hunter" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              <h3 className="text-2xl font-semibold">Hunter</h3>
              
              <p className="text-muted-foreground text-center">
                Check out my friend's amazing portfolio with stunning designs and creative projects
              </p>
              
              <a 
                href="https://hunter-portfolio-g5jn.vercel.app/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-hover inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg"
              >
                Visit Portfolio
                <ExternalLink size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Friends;
