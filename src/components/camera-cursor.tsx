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
        <g stroke="var(--color-ink)" strokeWidth="1.2">
          {/* Top-left focus point */}
          <circle cx="8" cy="8" r="3" />
          {/* Top-center focus point */}
          <circle cx="16" cy="8" r="3" />
          {/* Top-right focus point */}
          <circle cx="24" cy="8" r="3" />
          {/* Middle-left focus point */}
          <circle cx="8" cy="16" r="3" />
          {/* Center focus point (target area) */}
          <circle cx="16" cy="16" r="3" fill="var(--color-film)" />
          {/* Middle-right focus point */}
          <circle cx="24" cy="16" r="3" />
          {/* Bottom-left focus point */}
          <circle cx="8" cy="24" r="3" />
          {/* Bottom-center focus point */}
          <circle cx="16" cy="24" r="3" />
          {/* Bottom-right focus point */}
          <circle cx="24" cy="24" r="3" />
        </g>
        {/* Center circle representing the lens */}
        <circle cx="16" cy="16" r="6" fill="none" stroke="var(--color-ink)" strokeWidth="1.5" />
      </svg>
    </div>
  );
}
