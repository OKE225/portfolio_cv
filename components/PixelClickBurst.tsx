"use client";

import { useEffect } from "react";

const COLOR = "#FF1F5A";
const ACCENT_COLOR = "#ffffff";
const PARTICLES = 12;
const DURATION = 500;
const Z_INDEX = 9999;

export function spawnPixelBurst(x: number, y: number) {
  if (typeof window === "undefined") return;

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return;
  }

  // Kwadraciki rozchodzące się od punktu kliknięcia
  for (let i = 0; i < PARTICLES; i++) {
    const el = document.createElement("i");
    const size = 4 + Math.floor(Math.random() * 3) * 2;

    el.style.cssText = [
      "position:fixed",
      `z-index:${Z_INDEX}`,
      "pointer-events:none",
      `width:${size}px`,
      `height:${size}px`,
      `background:${i % 3 ? COLOR : ACCENT_COLOR}`,
      `left:${x}px`,
      `top:${y}px`,
    ].join(";");

    document.body.appendChild(el);

    const angle = (Math.PI * 2 * i) / PARTICLES;
    const distance = 24 + Math.random() * 28;

    el.animate(
      [
        { transform: "translate(0,0) scale(1)", opacity: 1 },
        {
          transform: `translate(${Math.cos(angle) * distance}px, ${
            Math.sin(angle) * distance
          }px) scale(0)`,
          opacity: 0,
        },
      ],
      { duration: DURATION, easing: "steps(6)" },
    ).onfinish = () => el.remove();
  }

  // Pierścień rozchodzący się od kliknięcia
  const ring = document.createElement("i");

  ring.style.cssText = [
    "position:fixed",
    `z-index:${Z_INDEX}`,
    "pointer-events:none",
    `border:2px solid ${COLOR}`,
    "width:8px",
    "height:8px",
    `left:${x - 4}px`,
    `top:${y - 4}px`,
  ].join(";");

  document.body.appendChild(ring);

  ring.animate(
    [
      { transform: "scale(1)", opacity: 1 },
      { transform: "scale(5)", opacity: 0 },
    ],
    { duration: 400, easing: "steps(5)" },
  ).onfinish = () => ring.remove();
}

export default function PixelClickBurst() {
  useEffect(() => {
    const onPointerDown = (event: PointerEvent) => {
      spawnPixelBurst(event.clientX, event.clientY);
    };

    document.addEventListener("pointerdown", onPointerDown, true);

    return () => {
      document.removeEventListener("pointerdown", onPointerDown, true);
    };
  }, []);

  return null;
}
