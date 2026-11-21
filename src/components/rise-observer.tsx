import { useRouterState } from "@tanstack/react-router";
import { useEffect } from "react";

/** Marks [data-rise] elements as visible once they enter the viewport. */
export function RiseObserver() {
  const ready = useRouterState({
    select: (s) => (s.status === "idle" ? s.location.href : ""),
  });

  useEffect(() => {
    if (!ready) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const seen = new WeakSet<Element>();
    let io: IntersectionObserver | null = null;

    const arm = (el: HTMLElement) => {
      if (seen.has(el)) return;
      seen.add(el);
      if (reduce) {
        el.classList.add("is-shown");
        return;
      }
      io?.observe(el);
    };

    const scan = () => {
      document.querySelectorAll<HTMLElement>("[data-rise]").forEach(arm);
    };

    // Wait until the route has committed so class changes don't fight hydration.
    const timer = window.setTimeout(() => {
      io = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (!entry.isIntersecting) continue;
            entry.target.classList.add("is-shown");
            io?.unobserve(entry.target);
          }
        },
        { threshold: 0.12, rootMargin: "0px 0px 40px 0px" },
      );
      scan();
    }, 40);

    return () => {
      window.clearTimeout(timer);
      io?.disconnect();
    };
  }, [ready]);

  return null;
}
