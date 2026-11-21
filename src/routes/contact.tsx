import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { FACEBOOK, PHONE_DISPLAY, PHONE_TEL, services } from "@/data/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — In-Vogue Media" },
      {
        name: "description",
        content: "Cere o ofertă In-Vogue Media. Telefon 0754 970 688.",
      },
    ],
  }),
  component: ContactPage,
});

type Inquiry = {
  name: string;
  event: string;
  date: string;
  note: string;
  at: number;
};

const STORAGE_KEY = "ivm-inquiries";

function ContactPage() {
  const [name, setName] = useState("");
  const [event, setEvent] = useState("Nuntă");
  const [date, setDate] = useState("");
  const [note, setNote] = useState("");
  const [error, setError] = useState("");
  const [saved, setSaved] = useState<Inquiry | null>(null);
  const [past, setPast] = useState<Inquiry[]>([]);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return;
      const parsed = JSON.parse(raw) as Inquiry[];
      if (Array.isArray(parsed)) setPast(parsed);
    } catch {
      setPast([]);
    }
  }, [saved]);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (name.trim().length < 2) {
      setError("Spune-ne cum te cheamă.");
      return;
    }
    if (note.trim().length < 8) {
      setError("Câteva rânduri despre eveniment ne ajută să-ți răspundem concret.");
      return;
    }
    const inquiry: Inquiry = {
      name: name.trim(),
      event,
      date,
      note: note.trim(),
      at: Date.now(),
    };
    const next = [inquiry, ...past].slice(0, 8);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    setSaved(inquiry);
    setError("");
    setName("");
    setDate("");
    setNote("");
  }

  return (
    <main id="content" className="page-enter pt-28">
      <div className="wrap-wide grid gap-14 pb-20 md:grid-cols-12">
        <div className="md:col-span-5">
          <p className="eyebrow" data-rise>Contact</p>
          <h1 className="display mt-4 text-6xl md:text-7xl" data-rise style={{ ["--d" as string]: "80ms" }}>
            Contactați-ne pentru ofertă.
          </h1>
          <p className="lede mt-6" data-rise style={{ ["--d" as string]: "160ms" }}>
            Cel mai rapid e telefonul. Dacă lași o cerere aici, rămâne pe acest dispozitiv ca să o
            ai la îndemână când suni.
          </p>
          <a
            href={PHONE_TEL}
            className="display mt-8 block text-5xl text-paper hover:text-champagne"
            data-rise
            style={{ ["--d" as string]: "240ms" }}
          >
            {PHONE_DISPLAY}
          </a>
          <a
            href={FACEBOOK}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-block text-paper-dim hover:text-paper"
            data-rise
            style={{ ["--d" as string]: "320ms" }}
          >
            Oferte și concursuri pe Facebook
          </a>
        </div>
        <div className="md:col-span-7">
          {saved ? (
            <div className="border border-line p-6 md:p-8" data-rise="scale">
              <p className="eyebrow">Cerere notată</p>
              <h2 className="display mt-3 text-4xl">Te așteptăm la telefon, {saved.name.split(" ")[0]}.</h2>
              <p className="mt-4 text-paper-dim">
                {saved.event}
                {saved.date ? ` · ${saved.date}` : ""} — {saved.note}
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href={PHONE_TEL} className="btn">
                  Sună {PHONE_DISPLAY}
                </a>
                <button type="button" className="btn-ghost" onClick={() => setSaved(null)}>
                  Altă cerere
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="grid gap-6" noValidate data-rise="scale" style={{ ["--d" as string]: "120ms" }}>
              <label className="field">
                <span>Nume</span>
                <input value={name} onChange={(e) => setName(e.target.value)} name="name" autoComplete="name" />
              </label>
              <div className="grid gap-6 sm:grid-cols-2">
                <label className="field">
                  <span>Eveniment</span>
                  <select value={event} onChange={(e) => setEvent(e.target.value)} name="event">
                    {services.map((s) => (
                      <option key={s.id}>{s.title}</option>
                    ))}
                    <option>Altceva</option>
                  </select>
                </label>
                <label className="field">
                  <span>Data, dacă o știi</span>
                  <input value={date} onChange={(e) => setDate(e.target.value)} name="date" type="date" />
                </label>
              </div>
              <label className="field">
                <span>Despre zi</span>
                <textarea
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  name="note"
                  placeholder="Loc, câți oameni, foto, film sau amândouă."
                />
              </label>
              {error ? <p className="field-error">{error}</p> : null}
              <button type="submit" className="btn w-fit">
                Notează cererea
              </button>
            </form>
          )}
          {past.length > 0 ? (
            <ul className="mt-10 border-t border-line">
              {past.map((item) => (
                <li key={item.at} className="border-b border-line py-4 text-sm text-paper-dim">
                  <span className="text-paper">{item.name}</span> · {item.event}
                  {item.date ? ` · ${item.date}` : ""} — {item.note}
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </div>
    </main>
  );
}
