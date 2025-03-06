
import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center space-y-4">
          <p className="text-center text-muted-foreground">
            <span className="inline-flex items-center">
              Made with <Heart className="mx-1 text-destructive animate-pulse-glow" size={16} /> by Lover Boy
            </span>
          </p>
          
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} All rights reserved
          </p>
          
          <nav className="mt-4">
            <ul className="flex space-x-6">
              <li>
                <a href="#hero" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200">
                  About
                </a>
              </li>
              <li>
                <a href="#friends" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200">
                  Friends
                </a>
              </li>
              <li>
                <a href="#social" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200">
                  Connect
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
