"use client";

import { useState, useEffect } from 'react';
import styles from './Particles.module.css';

interface Particle {
  id: number;
  size: number;
  left: number;
  top: number;
  duration: number;
  delay: number;
  driftX: number;
  driftY: number;
  opacity: number;
}

interface ParticlesProps {
  count?: number;
  className?: string;
}

export default function Particles({ count = 30, className = '' }: ParticlesProps) {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    setParticles(
      Array.from({ length: count }, (_, i) => ({
        id: i,
        size: Math.random() * 3 + 1,
        left: Math.random() * 100,
        top: Math.random() * 100,
        duration: Math.random() * 15 + 10,
        delay: Math.random() * 10,
        driftX: (Math.random() - 0.5) * 150,
        driftY: -(Math.random() * 200 + 100),
        opacity: Math.random() * 0.4 + 0.1,
      }))
    );
  }, [count]);

  return (
    <div className={`${styles.container} ${className}`} aria-hidden="true">
      {particles.map((p) => (
        <div
          key={p.id}
          className={styles.particle}
          style={{
            width: `${p.size}px`,
            height: `${p.size}px`,
            left: `${p.left}%`,
            top: `${p.top}%`,
            opacity: p.opacity,
            '--drift-x': `${p.driftX}px`,
            '--drift-y': `${p.driftY}px`,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
          } as React.CSSProperties}
        />
      ))}
    </div>
  );
}
