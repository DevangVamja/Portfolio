import React, { useEffect, useRef } from 'react';

interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export function Reveal({ children, delay = 0, className = '' }: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            node.style.setProperty('--reveal-delay', `${delay}ms`);
            node.classList.add('animate-reveal-up');
            node.classList.remove('opacity-0');
            node.classList.remove('translate-y-6');
            obs.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.2
      }
    );

    node.classList.add('opacity-0');
    node.classList.add('translate-y-6');
    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, [delay]);

  return (
    <div ref={ref} className={`will-change-transform ${className}`}>
      {children}
    </div>
  );
}
