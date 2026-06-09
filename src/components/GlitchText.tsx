"use client";

import styles from './GlitchText.module.css';

interface GlitchTextProps {
  children: React.ReactNode;
  as?: 'h1' | 'h2' | 'h3' | 'span' | 'p';
  className?: string;
  glitchOnHover?: boolean;
  continuous?: boolean;
}

export default function GlitchText({
  children,
  as: Tag = 'h2',
  className = '',
  glitchOnHover = true,
  continuous = false,
}: GlitchTextProps) {
  const text = typeof children === 'string' ? children : '';
  const glitchClass = continuous
    ? styles.continuous
    : glitchOnHover
      ? styles.hoverGlitch
      : '';

  return (
    <Tag
      className={`${styles.glitch} ${glitchClass} ${className}`}
      data-text={text}
    >
      {children}
    </Tag>
  );
}
