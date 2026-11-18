import { useEffect, useRef } from "react";

export function CameraCursor() {
  const camRef = useRef<HTMLDivElement>(null);
  const retRef = useRef<HTMLDivElement>(null);
  const flashRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine) and (min-width: 1080px)");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!fine.matches || reduce.matches) return;

    const cam = camRef.current;
    const ret = retRef.current;
    const flash = flashRef.current;
    if (!cam || !ret || !flash) return;

    const root = document.documentElement;
    let mx = window.innerWidth * 0.72;
    let my = window.innerHeight * 0.38;
    let cx = mx - 92;
    let cy = my + 8;
    let shown = false;
    let raf = 0;

    const frame = () => {
      const ang = Math.atan2(my - cy, mx - cx);
      const tx = mx - Math.cos(ang) * 92;
      const ty = my - Math.sin(ang) * 92;
      cx += (tx - cx) * 0.18;
      cy += (ty - cy) * 0.18;
      const rot = (Math.atan2(my - cy, mx - cx) * 180) / Math.PI;
      cam.style.transform = `translate3d(${cx}px, ${cy}px, 0) translate(-50%, -50%) rotate(${rot}deg)`;
      ret.style.transform = `translate3d(${mx}px, ${my}px, 0) translate(-50%, -50%)`;
      raf = requestAnimationFrame(frame);
    };

    const show = () => {
      if (shown) return;
      shown = true;
      cx = mx - 92;
      cy = my;
      root.classList.add("has-cam");
      cam.style.opacity = "1";
      ret.style.opacity = "1";
    };

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      show();
      const el = document.elementFromPoint(e.clientX, e.clientY);
      ret.classList.toggle("is-hot", Boolean(el?.closest("a, button")));
    };

    const onDown = () => {
      if (!shown) return;
      flash.classList.remove("is-on");
      void flash.offsetWidth;
      flash.classList.add("is-on");
    };

    const onLeave = () => {
      shown = false;
      root.classList.remove("has-cam");
      cam.style.opacity = "0";
      ret.style.opacity = "0";
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("pointerdown", onDown);
    document.addEventListener("mouseleave", onLeave);
    raf = requestAnimationFrame(frame);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("pointerdown", onDown);
      document.removeEventListener("mouseleave", onLeave);
      root.classList.remove("has-cam");
    };
  }, []);

  return (
    <>
      <div ref={flashRef} className="cam-flash" aria-hidden="true" />
      <div ref={camRef} className="cam" aria-hidden="true">
        <svg className="cam-svg" viewBox="0 0 78 46">
          <rect className="cam-bump" x="10" y="4" width="16" height="8" rx="2" />
          <rect className="cam-body" x="2" y="10" width="50" height="30" rx="7" />
          <circle className="cam-dot" cx="14" cy="18" r="2.1" />
          <circle className="cam-lens" cx="56" cy="25" r="13" />
          <circle className="cam-glass" cx="56" cy="25" r="6.5" />
          <circle className="cam-catch" cx="58.2" cy="22.6" r="1.7" />
        </svg>
      </div>
      <div ref={retRef} className="reticle" aria-hidden="true">
        <span className="tgt-ring" />
        <span className="tgt-h" />
        <span className="tgt-v" />
        <span className="tgt-dot" />
      </div>
    </>
  );
}
