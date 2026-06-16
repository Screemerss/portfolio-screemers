'use client';

import { useState, useEffect } from 'react';

interface VisitsCounterProps {
  id: string;
}

export default function VisitsCounter({ id }: VisitsCounterProps) {
  const [visits, setVisits] = useState<number | null>(null);

  useEffect(() => {
    // Increment and get visits from CounterAPI
    fetch(`https://api.counterapi.dev/v1/screemers-portfolio/${id}/up`)
      .then((res) => res.json())
      .then((data) => {
        if (data && typeof data.value === 'number') {
          setVisits(data.value);
        }
      })
      .catch((err) => console.error('Error fetching counter:', err));
  }, [id]);

  if (visits === null) return null;

  return (
    <span 
      className="visits-counter" 
      style={{ 
        display: 'inline-flex', 
        alignItems: 'center', 
        gap: '6px', 
        fontSize: '0.85rem', 
        opacity: 0.7 
      }}
    >
      <i className="fa-solid fa-eye"></i> {visits.toLocaleString()} visite
    </span>
  );
}
