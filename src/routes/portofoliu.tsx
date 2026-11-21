import { createFileRoute, Link } from "@tanstack/react-router";
import { ShotGrid } from "@/components/shot-grid";
import { categories, services, shots, type CategoryId } from "@/data/site";
import { cn } from "@/lib/cn";

const ids = categories.map((c) => c.id);

function isCategory(value: unknown): value is CategoryId {
  return typeof value === "string" && ids.includes(value as CategoryId);
}

export const Route = createFileRoute("/portofoliu")({
  validateSearch: (search: Record<string, unknown>) => ({
    cat: isCategory(search.cat) ? search.cat : "toate",
  }),
  head: () => ({
    meta: [
      { title: "Portofoliu — In-Vogue Media" },
      {
        name: "description",
        content: "Nunți, botezuri, corporate, studio, majorate și foto produs. Portofoliul In-Vogue Media.",
      },
    ],
  }),
  component: PortfolioPage,
});

function PortfolioPage() {
  const { cat } = Route.useSearch();
  const visible = cat === "toate" ? shots : shots.filter((s) => s.category === cat);
  const folder = services.find((s) => s.id === cat);

  return (
    <main id="content" className="page-enter pt-24 md:pt-28">
      <header className="wrap-wide pb-8">
        <p className="eyebrow" data-rise>
          {folder ? `Folder · ${folder.index}` : "Portofoliu"}
        </p>
        <div className="mt-4 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <h1 className="display text-6xl md:text-8xl" data-rise style={{ ["--d" as string]: "80ms" }}>
            {folder ? folder.title : "Cadrele."}
          </h1>
          <p className="lede" data-rise style={{ ["--d" as string]: "160ms" }}>
            {visible.length} {visible.length === 1 ? "cadru" : "cadre"}
            {cat === "toate" ? ". Apasă pe o imagine — săgețile merg mai departe." : "."}
          </p>
        </div>
        <div className="chip-row mt-8" role="tablist" aria-label="Filtrează portofoliul" data-rise style={{ ["--d" as string]: "220ms" }}>
          {categories.map((c) => (
            <Link
              key={c.id}
              to="/portofoliu"
              search={{ cat: c.id }}
              resetScroll={false}
              role="tab"
              aria-selected={cat === c.id}
              className={cn("chip", cat === c.id && "is-on")}
            >
              {c.label}
            </Link>
          ))}
        </div>
      </header>
      <div className="wrap-wide pb-20">
        <ShotGrid key={cat} shots={visible} />
      </div>
    </main>
  );
}
