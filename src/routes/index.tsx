import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { reviews, services, shots, steps, ticker, FACEBOOK } from "@/data/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "In-Vogue Media — Capturăm momentele tale speciale" },
      {
        name: "description",
        content:
          "Fotografie și videografie de nuntă de înaltă calitate, pentru momente unice. Portofoliu, servicii și contact.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <main id="content">
      <section className="hero">
        <img
          className="hero-media"
          src="/portfolio/hero.jpg"
          alt="Miri lângă un lac, în lumină caldă de după-amiază"
          fetchPriority="high"
        />
        <div className="hero-scrim" />
        <div className="hero-copy wrap-wide">
          <p className="eyebrow" data-rise style={{ ["--d" as string]: "60ms" }}>
            Foto & film · România
          </p>
          <h1 className="display-xl mt-4 max-w-5xl">
            <span className="block" data-rise style={{ ["--d" as string]: "140ms" }}>
              Capturăm
            </span>
            <span className="block italic text-champagne" data-rise style={{ ["--d" as string]: "240ms" }}>
              momentele tale
            </span>
            <span className="block" data-rise style={{ ["--d" as string]: "340ms" }}>
              speciale
            </span>
          </h1>
          <div className="mt-8 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <p className="lede" data-rise style={{ ["--d" as string]: "460ms" }}>
              Fotografie și videografie de nuntă de înaltă calitate, pentru zile care nu se repetă.
              Pregătiri, ceremonie, oameni, ultimul dans.
            </p>
            <div className="flex flex-wrap gap-3" data-rise style={{ ["--d" as string]: "560ms" }}>
              <Link to="/portofoliu" search={{ cat: "toate" }} className="btn" data-cursor="view">
                Portofoliu
              </Link>
              <Link to="/contact" className="btn-ghost">
                Cere o ofertă
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="ticker" aria-hidden="true">
        <div className="ticker-track">
          {[...ticker, ...ticker].map((word, i) => (
            <span className="ticker-item" key={`${word}-${i}`}>
              <span className="ticker-dot" />
              {word}
            </span>
          ))}
        </div>
      </div>

      <section className="section">
        <div className="wrap-wide grid items-end gap-10 md:grid-cols-12">
          <div className="md:col-span-7" data-rise>
            <p className="eyebrow">Studioul</p>
            <h2 className="display mt-4 text-5xl md:text-7xl">
              O zi întreagă, spusă fără grabă.
            </h2>
          </div>
          <div className="md:col-span-5" data-rise style={{ ["--d" as string]: "120ms" }}>
            <p className="lede">
              In-Vogue Media e o echipă calmă, atentă la detalii și la felul în care se simte o zi,
              nu doar la cum arată. De la pregătiri până la dansul mirilor, fiecare cadru ține o
              poveste.
            </p>
            <Link to="/servicii" className="btn-ghost mt-6" data-cursor="view">
              Serviciile
              <ArrowUpRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="section pt-0" id="cadre">
        <div className="wrap-wide mb-8 flex flex-wrap items-end justify-between gap-4">
          <div data-rise>
            <p className="eyebrow">Portofoliu</p>
            <h2 className="display mt-3 text-5xl md:text-6xl">Cadre alese</h2>
          </div>
          <p className="lede max-w-sm" data-rise style={{ ["--d" as string]: "100ms" }}>
            Șase foldere. Fiecare e portofoliul categoriei — deschide-l și răsfoiește cadrele.
          </p>
        </div>
        <div className="wrap-wide folder-grid">
          {services.map((service, i) => {
            const frames = shots.filter((shot) => shot.category === service.id);
            const [cover, mid, back] = frames;
            return (
              <Link
                key={service.id}
                to="/portofoliu"
                search={{ cat: service.id }}
                className="folder"
                data-cursor="view"
                data-rise="scale"
                style={{ ["--d" as string]: `${i * 90}ms` }}
              >
                <span className="folder-sleeve">
                  {back ? <img className="folder-back" src={back.src} alt="" /> : null}
                  {mid ? <img className="folder-mid" src={mid.src} alt="" /> : null}
                  <img className="folder-cover" src={cover.src} alt="" />
                </span>
                <span className="folder-meta">
                  <span className="folder-index">{service.index}</span>
                  <span>
                    <span className="folder-name">{service.title}</span>
                    <span className="folder-count">
                      {frames.length} {frames.length === 1 ? "cadru" : "cadre"}
                    </span>
                  </span>
                </span>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="section" id="servicii">
        <div className="wrap-wide">
          <div data-rise>
            <p className="eyebrow">Servicii</p>
            <h2 className="display mt-3 max-w-3xl text-5xl md:text-6xl">
              In-Vogue Media vine cu următoarele.
            </h2>
          </div>
          <div className="mt-10">
            {services.map((service, i) => (
              <Link
                key={service.id}
                to="/portofoliu"
                search={{ cat: service.id }}
                className="service-row"
                data-cursor="view"
                data-rise="left"
                style={{ ["--d" as string]: `${i * 70}ms` }}
              >
                <span className="service-index">{service.index}</span>
                <span>
                  <span className="service-title block">{service.title}</span>
                  <span className="service-text block">{service.text}</span>
                </span>
                <img className="service-still" src={service.image} alt="" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section border-t border-line">
        <div className="wrap-wide">
          <div data-rise>
            <p className="eyebrow">Cum lucrăm</p>
            <h2 className="display mt-3 text-5xl md:text-6xl">Patru pași, fără surprize.</h2>
          </div>
          <ol className="mt-12 grid gap-10 md:grid-cols-4">
            {steps.map((step, i) => (
              <li key={step.n} data-rise style={{ ["--d" as string]: `${i * 90}ms` }}>
                <p className="eyebrow">{step.n}</p>
                <h3 className="display mt-3 text-4xl">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section border-t border-line" id="recenzii">
        <div className="wrap-wide grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4" data-rise>
            <p className="eyebrow">Recenzii</p>
            <h2 className="display mt-3 text-5xl">Ce rămâne după zi.</h2>
            <a href={FACEBOOK} target="_blank" rel="noreferrer" className="btn-ghost mt-8">
              Oferte și concursuri
              <ArrowUpRight className="size-4" />
            </a>
          </div>
          <div className="md:col-span-8">
            {reviews.map((review, i) => (
              <ReviewCard
                key={review.id}
                name={review.name}
                short={review.short}
                full={review.full}
                delay={`${i * 80}ms`}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-line">
        <div className="wrap-wide flex flex-col items-start justify-between gap-6 py-16 md:flex-row md:items-end">
          <div data-rise>
            <p className="eyebrow">Ofertă</p>
            <h2 className="display mt-3 text-5xl md:text-7xl">Spune-ne data.</h2>
          </div>
          <Link to="/contact" className="btn" data-cursor="view" data-rise style={{ ["--d" as string]: "120ms" }}>
            Contactați-ne pentru ofertă
          </Link>
        </div>
      </section>
    </main>
  );
}

function ReviewCard({
  name,
  short,
  full,
  delay,
}: {
  name: string;
  short: string;
  full: string;
  delay: string;
}) {
  const [open, setOpen] = useState(false);
  return (
    <article className="review" data-rise style={{ ["--d" as string]: delay }}>
      <h3 className="text-sm tracking-wide text-champagne">{name}</h3>
      <q className="mt-3 block">{open ? full : short}</q>
      <button type="button" className="nav-link mt-4" onClick={() => setOpen((v) => !v)}>
        {open ? "Mai puțin" : "Citește tot"}
      </button>
    </article>
  );
}
