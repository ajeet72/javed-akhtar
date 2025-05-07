"use client";

import { useEffect, useRef } from "react";

export default function CursorGradient() {
  const gradientRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let mouseX = 0;
    let mouseY = 0;
    let currentX = 0;
    let currentY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const animate = () => {
      // Easing movement (adjust 0.1 for more or less delay)
      currentX += (mouseX - currentX) * 0.1;
      currentY += (mouseY - currentY) * 0.1;

      if (gradientRef.current) {
        gradientRef.current.style.transform = `translate3d(${currentX - 200}px, ${currentY - 200}px, 0)`;
      }

      requestAnimationFrame(animate);
    };

    document.addEventListener("mousemove", handleMouseMove);
    requestAnimationFrame(animate);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={gradientRef}
      className="pointer-events-none fixed top-0 left-0 w-[400px] h-[400px] rounded-full bg-[radial-gradient(circle,_#763CAC_0%,_rgba(50,15,133,0)_100%)] blur-3xl opacity-80 z-[-1]" // Changed z-0 to z-[-1]
    />
  );
}