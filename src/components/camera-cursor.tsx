import { useEffect, useRef } from "react";

export function PhotoCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const flashRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine) and (min-width: 1080px)");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!fine.matches || reduce.matches) return;

    const cursor = cursorRef.current;
    const flash = flashRef.current;
    const root = document.documentElement;
    if (!cursor || !flash) return;

    root.classList.add("has-photo-cursor");

    const onMove = (e: MouseEvent) => {
      const x = Math.min(Math.max(e.clientX, 15), window.innerWidth - 15);
      const y = Math.min(Math.max(e.clientY, 15), window.innerHeight - 15);
      cursor.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
    };

    const onDown = () => {
      cursor.classList.add("is-shooting");
      flash.classList.remove("is-flashing");
      // Force reflow so the animation can restart on rapid clicks
      void flash.offsetWidth;
      flash.classList.add("is-flashing");

      setTimeout(() => {
        cursor.classList.remove("is-shooting");
      }, 180);

      setTimeout(() => {
        flash.classList.remove("is-flashing");
      }, 320);
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
    <>
      <div ref={flashRef} className="page-flash" aria-hidden="true" />
      <div ref={cursorRef} className="photo-cursor" aria-hidden="true">
        <svg
          className="cam-icon"
          viewBox="0 0 28.3 28.3"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <g>
            <path d="M8.495,3.628c0,0-3.556,1.322-5.656,6.294l11.585-2.19L8.495,3.628z" fill="#ffffff" />
            <path d="M2.664,10.631c0,0-1.568,3.455,0.481,8.448l6.612-9.763L2.664,10.631z" fill="#ffffff" />
            <path d="M3.588,19.571c0,0,1.322,3.556,6.294,5.656L7.693,13.64L3.588,19.571z" fill="#ffffff" />
            <path d="M10.591,25.401c0,0,3.455,1.567,8.448-0.481l-9.763-6.61L10.591,25.401z" fill="#ffffff" />
            <path d="M19.722,24.629c0,0,3.557-1.322,5.656-6.296l-11.586,2.189L19.722,24.629z" fill="#ffffff" />
            <path d="M25.071,9.177l-6.61,9.763l7.093-1.316C25.554,17.625,27.12,14.17,25.071,9.177z" fill="#ffffff" />
            <path d="M24.628,8.685c0,0-1.322-3.556-6.295-5.655l2.189,11.585L24.628,8.685z" fill="#ffffff" />
            <path d="M17.624,2.855c0,0-3.453-1.568-8.447,0.482l9.764,6.61L17.624,2.855z" fill="#ffffff" />
            <path d="M14.151,0C6.336,0,0,6.336,0,14.15C0,21.963,6.335,28.3,14.151,28.3 c7.813,0,14.149-6.338,14.149-14.15C28.301,6.336,21.965,0,14.151,0z M14.151,27.206c-7.199,0-13.057-5.857-13.057-13.056 S6.952,1.094,14.151,1.094c7.197,0,13.055,5.857,13.055,13.056C27.206,21.349,21.348,27.206,14.151,27.206z" fill="#ffffff" />
          </g>
        </svg>
      </div>
    </>
  );
}
