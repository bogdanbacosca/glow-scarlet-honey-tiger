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
        <rect x="5" y="10" width="22" height="12" rx="2" fill="var(--color-paper)" stroke="var(--color-ink)" strokeWidth="1.6" />
        <circle cx="22" cy="16" r="5" fill="#12100e" stroke="var(--color-paper)" strokeWidth="1.8" />
        <circle cx="22" cy="16" r="1.6" fill="var(--color-paper)" />
        <rect x="7.5" y="7.5" width="3.5" height="1.5" rx="0.5" fill="var(--color-paper)" />
        <circle cx="20" cy="12.5" r="0.7" fill="#c9a36a" />
      </svg>
    </div>
  );
}
