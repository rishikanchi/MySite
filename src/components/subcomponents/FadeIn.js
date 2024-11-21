import React, { useEffect, useRef } from 'react';

const getFadeInStyles = (translateY = 20) => ({
  init: {
    opacity: 0,
    transform: `translateY(${translateY}px)`,
    transition: 'opacity 1s ease-out, transform 1s ease-out',
    willChange: 'opacity, transform'
  },
  animated: {
    opacity: 1,
    transform: 'translateY(0)'
  }
});

const FadeIn = ({ 
  children, 
  delay = 300, 
  duration = 750, 
  className = '',
  style = {},
  translateY = 20  // New prop for custom translation amount
}) => {
  const elementRef = useRef(null);
  const fadeInStyles = getFadeInStyles(translateY);

  useEffect(() => {
    const element = elementRef.current;
    
    if (!element) {
      console.warn('FadeIn: No element ref found');
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              // Apply animation styles
              element.style.opacity = '1';
              element.style.transform = 'translateY(0)';
            }, delay);
            
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '50px',
      }
    );

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [delay]);

  return (
    <div
      ref={elementRef}
      className={className}
      style={{
        ...fadeInStyles.init,
        transitionDuration: `${duration}ms`,
        ...style
      }}
    >
      {children}
    </div>
  );
};

export default FadeIn;