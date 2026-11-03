"use client";

import { useEffect, useState } from "react";

type TypewriterTextProps = {
  lines: string[];
};

const TypewriterText = ({ lines }: TypewriterTextProps) => {
  const speed = 50;
  const fullText = lines.join("\n");
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleCount((count) => (count < fullText.length ? count + 1 : count));
    }, speed);

    return () => clearInterval(interval);
  }, [fullText, speed]);

  const visibleLines = fullText.slice(0, visibleCount).split("\n");

  return (
    <>
      {lines.map((line, index) => (
        <span key={index}>
          {visibleLines[index] ?? ""}
          {index < lines.length - 1 && <br />}
        </span>
      ))}
    </>
  );
};

export default TypewriterText;
