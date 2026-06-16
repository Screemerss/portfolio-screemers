'use client';

import { useState, useEffect, useRef } from 'react';

function StatItem({ targetValue, label }) {
  const [value, setValue] = useState(0);
  const elementRef = useRef(null);
  const animatedRef = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !animatedRef.current) {
            animatedRef.current = true;
            let current = 0;
            const duration = 1500; // ms
            const increment = targetValue / (duration / 16); // ~60fps
            
            const updateCount = () => {
              current += increment;
              if (current >= targetValue) {
                setValue(targetValue);
              } else {
                setValue(Math.ceil(current));
                requestAnimationFrame(updateCount);
              }
            };
            
            updateCount();
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.disconnect();
      }
    };
  }, [targetValue]);

  return (
    <div className="stat-item" ref={elementRef}>
      <span className="stat-number">{value}</span>
      <span className="stat-label">{label}</span>
    </div>
  );
}

export default function Stats() {
  const statsData = [
    { targetValue: 2, label: 'Campi da Tennis' },
    { targetValue: 1, label: 'Campo da Padel' },
    { targetValue: 1, label: 'Campo Calcio 5/6' },
    { targetValue: 2, label: 'Campi da Bocce' },
    { targetValue: 1, label: 'Area Relax & Wellness' },
  ];

  return (
    <section className="stats-bar">
      <div className="stats-wrapper wrapper">
        {statsData.map((stat, i) => (
          <StatItem 
            key={i} 
            targetValue={stat.targetValue} 
            label={stat.label} 
          />
        ))}
      </div>
    </section>
  );
}
