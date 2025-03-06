
import { useEffect, useRef } from 'react';
import { Instagram, MessageSquare } from 'lucide-react';

interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
  label: string;
  delay?: number;
}

const SocialLink = ({ href, icon, label, delay = 0 }: SocialLinkProps) => {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className="glass-card flex items-center gap-4 p-6 opacity-0 animate-fade-in group"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="w-12 h-12 flex items-center justify-center bg-primary/10 rounded-full text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 transform group-hover:scale-110">
        {icon}
      </div>
      <div className="text-left">
        <p className="font-semibold text-lg">{label}</p>
      </div>
    </a>
  );
};

const Social = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
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
      observer.observe(sectionRef.current.querySelector('h2') as Element);
      observer.observe(sectionRef.current.querySelector('p') as Element);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current.querySelector('h2') as Element);
        observer.unobserve(sectionRef.current.querySelector('p') as Element);
      }
    };
  }, []);
  
  return (
    <section 
      id="social" 
      ref={sectionRef}
      className="py-20 sm:py-28"
    >
      <div className="section-container">
        <h2 className="section-heading opacity-0">
          Connect With Me
        </h2>
        
        <p className="section-subheading opacity-0">
          Let's stay in touch through these platforms
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          <SocialLink 
            href="https://discord.gg/rdKrjeUCj8" 
            icon={<MessageSquare className="group-hover:animate-bounce-subtle" />} 
            label="Join my Discord Server" 
            delay={100}
          />
          
          <SocialLink 
            href="https://www.instagram.com/sabit123456789000?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" 
            icon={<Instagram className="group-hover:animate-bounce-subtle" />} 
            label="Follow on Instagram" 
            delay={200}
          />
        </div>
        
        <div className="mt-16 glass-card py-10 px-6 max-w-2xl mx-auto opacity-0 animate-fade-in" style={{ animationDelay: '300ms' }}>
          <h3 className="text-2xl font-semibold mb-4">Get in Touch</h3>
          <p className="text-muted-foreground mb-6">
            Have a question or just want to say hi? I'd love to hear from you! 
            Reach out through social media or join my Discord server.
          </p>
          
          <div className="inline-block relative overflow-hidden">
            <span className="shimmer-effect absolute inset-0"></span>
            <a 
              href="https://discord.gg/rdKrjeUCj8" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-hover inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg"
            >
              Let's Chat
              <MessageSquare size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Social;
