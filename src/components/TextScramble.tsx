"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./TextScramble.module.css";

interface TextScrambleProps {
  text: string;
  className?: string;
  delay?: number;
  speed?: number;
  scrambleChars?: string;
}

export default function TextScramble({
  text,
  className = "",
  delay = 0,
  speed = 50,
  scrambleChars = "!<>-_\\/[]{}—=+*^?#________",
}: TextScrambleProps) {
  const [displayText, setDisplayText] = useState("");
  const resolvedRef = useRef(0);
  const frameRef = useRef<number | null>(null);
  const startedRef = useRef(false);

  useEffect(() => {
    resolvedRef.current = 0;
    let iteration = 0;
    let intervalId: ReturnType<typeof setInterval>;

    const timer = setTimeout(() => {
      intervalId = setInterval(() => {
        const result = text
          .split("")
          .map((char, index) => {
            if (index < resolvedRef.current || char === " ") {
              return text[index];
            }
            return scrambleChars[Math.floor(Math.random() * scrambleChars.length)];
          })
          .join("");

        setDisplayText(result);
        iteration++;

        if (iteration % 3 === 0) {
          resolvedRef.current++;
        }

        if (resolvedRef.current >= text.length) {
          clearInterval(intervalId);
          setDisplayText(text);
        }
      }, speed);
    }, delay);

    return () => {
      clearTimeout(timer);
      if (intervalId) clearInterval(intervalId);
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, [text, delay, speed, scrambleChars]);

  return (
    <span className={`${styles.scramble} ${className}`} aria-label={text}>
      {displayText}
    </span>
  );
}
