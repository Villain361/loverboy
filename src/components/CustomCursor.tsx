
import { useEffect, useState } from 'react';

interface CursorPosition {
  x: number;
  y: number;
}

const CustomCursor = () => {
  const [position, setPosition] = useState<CursorPosition>({ x: 0, y: 0 });
  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    const updateCursorPosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setHidden(false);
    };

    const handleMouseLeave = () => {
      setHidden(true);
    };

    const handleMouseEnter = () => {
      setHidden(false);
    };

    window.addEventListener('mousemove', updateCursorPosition);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', updateCursorPosition);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, []);

  if (hidden) return null;

  return (
    <div
      className="fixed pointer-events-none z-50 rounded-full transform -translate-x-1/2 -translate-y-1/2"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        width: '24px',
        height: '24px',
        background: 'rgba(155, 135, 245, 0.4)',
        mixBlendMode: 'difference',
        backdropFilter: 'blur(2px)',
        border: '1px solid rgba(255, 255, 255, 0.4)',
        boxShadow: '0 0 15px rgba(155, 135, 245, 0.5)',
        transition: 'width 0.2s, height 0.2s, background 0.2s'
      }}
    >
      <div 
        className="absolute inset-0 rounded-full animate-pulse-glow"
        style={{ 
          background: 'rgba(155, 135, 245, 0.2)',
          transform: 'scale(1.2)'
        }}
      ></div>
    </div>
  );
};

export default CustomCursor;
