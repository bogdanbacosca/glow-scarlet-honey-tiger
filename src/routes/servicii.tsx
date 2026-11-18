import { createFileRoute, Link } from "@tanstack/react-router";
import { services } from "@/data/site";

export const Route = createFileRoute("/servicii")({
  head: () => ({
    meta: [
      { title: "Servicii — In-Vogue Media" },
      {
        name: "description",
        content:
          "Nuntă, botez, evenimente corporate, ședințe studio, majorate, foto produs și reels.",
      },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <main id="content" className="page-enter pt-28">
      <header className="wrap-wide">
        <p className="eyebrow">Servicii</p>
        <h1 className="display mt-4 max-w-4xl text-6xl md:text-8xl">
          Ce filmăm și ce fotografiem.
        </h1>
        <p className="lede mt-6">
          Nu vindem pachete cu nume de flori. Spune-ne evenimentul și îți trimitem o ofertă clară,
          pe telefon.
        </p>
      </header>
      <div className="wrap-wide mt-14">
        {services.map((service) => (
          <article key={service.id} className="grid gap-6 border-t border-line py-10 md:grid-cols-12 md:items-center">
            <div className="md:col-span-5">
              <img src={service.image} alt={service.alt} className="aspect-video w-full object-cover" />
            </div>
            <div className="md:col-span-7">
              <p className="eyebrow">{service.index}</p>
              <h2 className="display mt-2 text-5xl">{service.title}</h2>
              <p className="lede mt-4">{service.text}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  to="/portofoliu"
                  search={{ cat: service.id }}
                  className="btn-ghost"
                  data-cursor="view"
                >
                  Vezi cadrele
                </Link>
                <Link to="/contact" className="btn">
                  Cere ofertă
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
