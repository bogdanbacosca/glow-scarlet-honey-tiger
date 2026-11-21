import { useCallback, useEffect, useState } from "react";
import { categoryLabel, type Shot } from "@/data/site";
import { cn } from "@/lib/cn";
import { Lightbox } from "@/components/lightbox";

const ratioClass = {
  wide: "ratio-wide",
  tall: "ratio-tall",
  square: "ratio-square",
} as const;

export function ShotGrid({ shots }: { shots: Shot[] }) {
  const [index, setIndex] = useState<number | null>(null);

  const close = useCallback(() => setIndex(null), []);
  const prev = useCallback(() => {
    setIndex((i) => (i === null ? i : (i - 1 + shots.length) % shots.length));
  }, [shots.length]);
  const next = useCallback(() => {
    setIndex((i) => (i === null ? i : (i + 1) % shots.length));
  }, [shots.length]);

  useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index, close, prev, next]);

  return (
    <>
      <div className="folio">
        {shots.map((shot, i) => (
          <button
            key={shot.id}
            type="button"
            className="shot"
            data-cursor="view"
            data-rise="scale"
            style={{ ["--d" as string]: `${Math.min(i, 8) * 60}ms` }}
            onClick={() => setIndex(i)}
          >
            <span className={cn("shot-frame", ratioClass[shot.ratio])}>
              <img
                src={shot.src}
                alt={shot.alt}
                loading={i < 3 ? "eager" : "lazy"}
              />
              <span className="shot-meta">
                <span className="shot-kicker">
                  {categoryLabel(shot.category)} · {shot.place}
                </span>
                <span className="shot-title">{shot.title}</span>
              </span>
            </span>
          </button>
        ))}
      </div>
      {index !== null ? (
        <Lightbox
          shot={shots[index]}
          index={index}
          total={shots.length}
          onClose={close}
          onPrev={prev}
          onNext={next}
        />
      ) : null}
    </>
  );
}
