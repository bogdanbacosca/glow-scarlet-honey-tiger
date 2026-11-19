import { useEffect, useRef } from "react";

export function PhotoCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine) and (min-width: 1080px)");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!fine.matches || reduce.matches) return;

    const cursor = cursorRef.current;
    const root = document.documentElement;
    if (!cursor) return;

    root.classList.add("has-photo-cursor");

    const onMove = (e: MouseEvent) => {
      const x = Math.min(Math.max(e.clientX, 15), window.innerWidth - 15);
      const y = Math.min(Math.max(e.clientY, 15), window.innerHeight - 15);
      cursor.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
    };

    const onDown = () => {
      cursor.classList.add("is-shooting");
      requestAnimationFrame(() => {
        cursor.classList.remove("is-shooting");
      });
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("pointerdown", onDown);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("pointerdown", onDown);
      root.classList.remove("has-photo-cursor");
    };
  }, []);

  return (
    <div ref={cursorRef} className="photo-cursor" aria-hidden="true">
      <svg
        className="cam-icon"
        viewBox="0 0 32 32"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* Camera shutter silhouette: rectangular border with circular opening */}
        <rect x="3" y="3" width="26" height="26" rx="4" stroke="var(--color-ink)" strokeWidth="1.5" fill="none" />
        {/* Circular lens opening in the center */}
        <circle cx="19" cy="19" r="8" fill="none" stroke="var(--color-ink)" strokeWidth="2" />
        {/* Inner circle for depth */}
        <circle cx="19" cy="19" r="5" fill="none" stroke="var(--color-paper)" strokeWidth="1" />
      </svg>
    </div>
  );
}
