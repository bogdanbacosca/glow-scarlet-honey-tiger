import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";
import { PHONE_DISPLAY, PHONE_TEL } from "@/data/site";
import { cn } from "@/lib/cn";

export function SiteHeader() {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);
  const path = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 12 || path !== "/");
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [path]);

  useEffect(() => {
    setOpen(false);
  }, [path]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-paper focus:px-3 focus:py-2 focus:text-ink"
      >
        Sari la conținut
      </a>
      <header className={cn("site-header", (solid || open) && "is-solid")}>
        <div className="wrap-wide flex h-16 items-center justify-between gap-4 md:h-20">
          <Link to="/" className="flex items-center gap-3 leading-none" aria-label="In-Vogue Media, acasă">
            <img src="/logo.svg" alt="In-Vogue Media" className="h-8 w-auto md:h-10" />
          </Link>
          <nav className="hidden items-center gap-8 md:flex" aria-label="Principal">
            <Link
              to="/portofoliu"
              search={{ cat: "toate" }}
              className="nav-link"
              activeProps={{ className: "is-active" }}
            >
              Portofoliu
            </Link>
            <Link to="/servicii" className="nav-link" activeProps={{ className: "is-active" }}>
              Servicii
            </Link>
            <Link to="/" hash="recenzii" className="nav-link">
              Recenzii
            </Link>
            <Link to="/contact" className="nav-link" activeProps={{ className: "is-active" }}>
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-2">
            <a href={PHONE_TEL} className="lb-btn sm:hidden" aria-label={`Sună ${PHONE_DISPLAY}`}>
              <Phone className="size-4" />
            </a>
            <a href={PHONE_TEL} className="btn hidden sm:inline-flex">
              <Phone className="size-3.5" aria-hidden="true" />
              {PHONE_DISPLAY}
            </a>
            <button
              type="button"
              className="lb-btn md:hidden"
              aria-expanded={open}
              aria-label={open ? "Închide meniul" : "Deschide meniul"}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>
      </header>
      {open ? (
        <div className="menu-panel md:hidden">
          <Link to="/">Acasă</Link>
          <Link to="/portofoliu" search={{ cat: "toate" }}>
            Portofoliu
          </Link>
          <Link to="/servicii">Servicii</Link>
          <Link to="/" hash="recenzii">
            Recenzii
          </Link>
          <Link to="/contact">Contact</Link>
          <a href={PHONE_TEL} className="btn mt-4 w-fit">
            <Phone className="size-3.5" />
            {PHONE_DISPLAY}
          </a>
        </div>
      ) : null}
    </>
  );
}

