
import { useState, useEffect } from 'react';
import ThemeToggle from './ThemeToggle';
import { Menu, X } from 'lucide-react';

interface NavItemProps {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
}

const NavItem = ({ href, children, onClick }: NavItemProps) => (
  <li>
    <a 
      href={href} 
      className="text-foreground/80 hover:text-foreground px-3 py-2 text-sm font-medium transition-colors relative group block"
      onClick={onClick}
    >
      {children}
      <span className="absolute inset-x-0 bottom-0 h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
    </a>
  </li>
);

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 10);
      
      // Update active section based on scroll position
      const sections = ['hero', 'about', 'friends', 'social'];
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const closeMenu = () => setMobileMenuOpen(false);
  
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'py-3 glass' : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <a 
            href="#hero" 
            className="text-xl font-bold text-foreground transition-all duration-300 hover:text-primary"
          >
            Lover Boy
          </a>
          
          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            <ul className="flex space-x-1">
              <NavItem href="#hero">Home</NavItem>
              <NavItem href="#about">About</NavItem>
              <NavItem href="#friends">Friends</NavItem>
              <NavItem href="#social">Connect</NavItem>
            </ul>
            <div className="ml-4">
              <ThemeToggle />
            </div>
          </nav>
          
          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <ThemeToggle />
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="ml-2 p-2 text-foreground focus:outline-none"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div 
        className={`md:hidden glass absolute w-full top-full left-0 transform transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
        }`}
      >
        <div className="px-4 py-3 space-y-1">
          <ul className="space-y-1">
            <NavItem href="#hero" onClick={closeMenu}>Home</NavItem>
            <NavItem href="#about" onClick={closeMenu}>About</NavItem>
            <NavItem href="#friends" onClick={closeMenu}>Friends</NavItem>
            <NavItem href="#social" onClick={closeMenu}>Connect</NavItem>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
