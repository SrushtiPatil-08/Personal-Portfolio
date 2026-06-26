import { useState, useEffect, useRef } from 'react';

export function useScrollReveal() {
  const [isRevealed, setIsRevealed] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsRevealed(true);
          observer.unobserve(entry.target); // Reveal only once
        }
      },
      { threshold: 0.15 } // Triggers when 15% of element is visible
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const getRevealStyle = (baseStyles) => ({
    ...baseStyles,
    opacity: isRevealed ? 1 : 0,
    transform: isRevealed ? 'translateY(0)' : 'translateY(40px)',
    transition: 'opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
  });

  return [elementRef, getRevealStyle];
}