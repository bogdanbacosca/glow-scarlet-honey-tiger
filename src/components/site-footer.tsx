import { Link } from "@tanstack/react-router";
import { FACEBOOK, PHONE_DISPLAY, PHONE_TEL } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-line">
      <div className="wrap-wide grid gap-10 py-14 md:grid-cols-12">
        <div className="md:col-span-5">
          <img src="/logo.svg" alt="In-Vogue Media" className="h-12 w-auto md:h-14 mb-4" />
          <p className="lede mt-5">
            Capturăm momentele tale speciale. Nunți, botezuri, corporate, studio, majorate.
          </p>
        </div>
        <div className="flex flex-col gap-3 md:col-span-3">
          <p className="eyebrow">Studio</p>
          <Link to="/portofoliu" search={{ cat: "toate" }} className="text-paper-dim hover:text-paper">
            Portofoliu
          </Link>
          <Link to="/servicii" className="text-paper-dim hover:text-paper">
            Servicii
          </Link>
          <Link to="/contact" className="text-paper-dim hover:text-paper">
            Contact
          </Link>
        </div>
        <div className="flex flex-col gap-3 md:col-span-4">
          <p className="eyebrow">Ofertă</p>
          <a href={PHONE_TEL} className="display text-4xl text-paper hover:text-champagne">
            {PHONE_DISPLAY}
          </a>
          <a href={FACEBOOK} target="_blank" rel="noreferrer" className="text-paper-dim hover:text-paper">
            Oferte și concursuri pe Facebook
          </a>
        </div>
      </div>
      <div className="wrap-wide flex flex-wrap items-center justify-between gap-3 border-t border-line py-5 text-sm text-muted">
        <p>© {new Date().getFullYear()} In-Vogue Media</p>
        <a href="#top" className="hover:text-paper">
          Sus
        </a>
      </div>
    </footer>
  );
}
