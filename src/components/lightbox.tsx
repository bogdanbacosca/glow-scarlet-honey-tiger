import { useEffect } from "react";
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
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, []);

  return (
    <div className="lightbox" role="dialog" aria-modal="true" aria-label={shot.title}>
      <div className="wrap-wide flex items-center justify-between gap-4 py-4">
        <div>
          <p className="eyebrow">
            {categoryLabel(shot.category)} · {shot.year}
          </p>
          <p className="display mt-1 text-3xl">{shot.title}</p>
        </div>
        <div className="flex items-center gap-2">
          <p className="mr-2 hidden text-sm text-paper-dim sm:block">
            {index + 1} / {total}
            <span className="mx-2 text-muted">·</span>
            esc
          </p>
          <button type="button" className="lb-btn" onClick={onClose} aria-label="Închide">
            <X className="size-4" />
          </button>
        </div>
      </div>
      <div className="lightbox-stage">
        <button type="button" className="lb-btn absolute left-3 md:left-6" onClick={onPrev} aria-label="Cadrul anterior">
          <ChevronLeft className="size-5" />
        </button>
        <img key={shot.id} src={shot.src} alt={shot.alt} />
        <button type="button" className="lb-btn absolute right-3 md:right-6" onClick={onNext} aria-label="Cadrul următor">
          <ChevronRight className="size-5" />
        </button>
      </div>
      <div className="wrap-wide flex items-center justify-between py-4 text-sm text-paper-dim">
        <p>{shot.place}</p>
        <p className="sm:hidden">
          {index + 1} / {total}
        </p>
      </div>
    </div>
  );
}
