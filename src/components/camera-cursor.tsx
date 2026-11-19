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
      setTimeout(() => {
        cursor.classList.remove("is-shooting");
      }, 300);
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
    <div ref={cursorRef} className="photo-cursor" aria-hidden="true" style={{ filter: 'invert(1)' }} />
  );
}
