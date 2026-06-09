"use client";

import { useState, useEffect, useCallback } from "react";

interface TypewriterProps {
  titles: string[];
  className?: string;
  cursorClassName?: string;
}

export default function Typewriter({
  titles,
  className = "",
  cursorClassName = "",
}: TypewriterProps) {
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayTitle, setDisplayTitle] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  const currentTitle = titles[titleIndex];

  const tick = useCallback(() => {
    if (!isDeleting) {
      setDisplayTitle(currentTitle.substring(0, displayTitle.length + 1));
      if (displayTitle.length === currentTitle.length) {
        setTimeout(() => setIsDeleting(true), 2000);
        return;
      }
    } else {
      setDisplayTitle(currentTitle.substring(0, displayTitle.length - 1));
      if (displayTitle.length === 0) {
        setIsDeleting(false);
        setTitleIndex((prev) => (prev + 1) % titles.length);
        return;
      }
    }
  }, [displayTitle, isDeleting, currentTitle, titles.length]);

  useEffect(() => {
    const speed = isDeleting ? 40 : 80;
    const timer = setTimeout(tick, speed);
    return () => clearTimeout(timer);
  }, [tick, isDeleting]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530);
    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <>
      <span className={className}>{displayTitle}</span>
      <span
        className={cursorClassName}
        style={{ opacity: showCursor ? 1 : 0 }}
      />
    </>
  );
}
