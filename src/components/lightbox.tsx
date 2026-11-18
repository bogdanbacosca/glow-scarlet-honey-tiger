import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { categoryLabel, type Shot } from "@/data/site";

type Props = {
  shot: Shot;
  index: number;
  total: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
};

export function Lightbox({ shot, index, total, onClose, onPrev, onNext }: Props) {
  const drag = useRef<{ x: number; y: number } | null>(null);

  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, []);

  return createPortal(
    <div className="lightbox" role="dialog" aria-modal="true" aria-label={shot.title}>
      <header className="lb-bar">
        <div className="lb-copy">
          <p className="eyebrow">
            {categoryLabel(shot.category)} · {shot.year}
          </p>
          <p className="lb-title">{shot.title}</p>
        </div>
        <button type="button" className="lb-btn" onClick={onClose} aria-label="Închide">
          <X className="size-4" />
        </button>
      </header>

      <div
        className="lightbox-stage"
        onPointerDown={(e) => {
          if ((e.target as HTMLElement).closest("button")) return;
          drag.current = { x: e.clientX, y: e.clientY };
        }}
        onPointerUp={(e) => {
          const start = drag.current;
          drag.current = null;
          if (!start) return;
          const dx = e.clientX - start.x;
          const dy = e.clientY - start.y;
          if (Math.abs(dx) < 48 || Math.abs(dx) < Math.abs(dy)) return;
          if (dx < 0) onNext();
          else onPrev();
        }}
        onPointerCancel={() => {
          drag.current = null;
        }}
      >
        <img key={shot.id} src={shot.src} alt={shot.alt} />
      </div>

      <footer className="lb-bar">
        <button type="button" className="lb-btn" onClick={onPrev} aria-label="Cadrul anterior">
          <ChevronLeft className="size-5" />
        </button>
        <p className="lb-meta">
          <span>{shot.place}</span>
          <span className="lb-count">
            {index + 1} / {total}
          </span>
        </p>
        <button type="button" className="lb-btn" onClick={onNext} aria-label="Cadrul următor">
          <ChevronRight className="size-5" />
        </button>
      </footer>
    </div>,
    document.body,
  );
}
