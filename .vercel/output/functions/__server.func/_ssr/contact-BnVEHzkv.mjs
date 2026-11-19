import { i as __toESM } from "../_runtime.mjs";
import { n as PHONE_DISPLAY, r as PHONE_TEL, s as services, t as FACEBOOK } from "./site-8tVnFK6M.mjs";
import { J as require_jsx_runtime, Y as require_react } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-BnVEHzkv.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var STORAGE_KEY = "ivm-inquiries";
function ContactPage() {
	const [name, setName] = (0, import_react.useState)("");
	const [event, setEvent] = (0, import_react.useState)("Nuntă");
	const [date, setDate] = (0, import_react.useState)("");
	const [note, setNote] = (0, import_react.useState)("");
	const [error, setError] = (0, import_react.useState)("");
	const [saved, setSaved] = (0, import_react.useState)(null);
	const [past, setPast] = (0, import_react.useState)([]);
	(0, import_react.useEffect)(() => {
		try {
			const raw = localStorage.getItem(STORAGE_KEY);
			if (!raw) return;
			const parsed = JSON.parse(raw);
			if (Array.isArray(parsed)) setPast(parsed);
		} catch {
			setPast([]);
		}
	}, [saved]);
	function onSubmit(e) {
		e.preventDefault();
		if (name.trim().length < 2) {
			setError("Spune-ne cum te cheamă.");
			return;
		}
		if (note.trim().length < 8) {
			setError("Câteva rânduri despre eveniment ne ajută să-ți răspundem concret.");
			return;
		}
		const inquiry = {
			name: name.trim(),
			event,
			date,
			note: note.trim(),
			at: Date.now()
		};
		const next = [inquiry, ...past].slice(0, 8);
		localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
		setSaved(inquiry);
		setError("");
		setName("");
		setDate("");
		setNote("");
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
		id: "content",
		className: "page-enter pt-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "wrap-wide grid gap-14 pb-20 md:grid-cols-12",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "md:col-span-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow",
						children: "Contact"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "display mt-4 text-6xl md:text-7xl",
						children: "Contactați-ne pentru ofertă."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "lede mt-6",
						children: "Cel mai rapid e telefonul. Dacă lași o cerere aici, rămâne pe acest dispozitiv ca să o ai la îndemână când suni."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: PHONE_TEL,
						className: "display mt-8 block text-5xl text-paper hover:text-champagne",
						children: PHONE_DISPLAY
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: FACEBOOK,
						target: "_blank",
						rel: "noreferrer",
						className: "mt-6 inline-block text-paper-dim hover:text-paper",
						children: "Oferte și concursuri pe Facebook"
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "md:col-span-7",
				children: [saved ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "border border-line p-6 md:p-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow",
							children: "Cerere notată"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "display mt-3 text-4xl",
							children: [
								"Te așteptăm la telefon, ",
								saved.name.split(" ")[0],
								"."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-4 text-paper-dim",
							children: [
								saved.event,
								saved.date ? ` · ${saved.date}` : "",
								" — ",
								saved.note
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 flex flex-wrap gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: PHONE_TEL,
								className: "btn",
								children: ["Sună ", PHONE_DISPLAY]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: "btn-ghost",
								onClick: () => setSaved(null),
								children: "Altă cerere"
							})]
						})
					]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit,
					className: "grid gap-6",
					noValidate: true,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "field",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Nume" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								value: name,
								onChange: (e) => setName(e.target.value),
								name: "name",
								autoComplete: "name"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-6 sm:grid-cols-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "field",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Eveniment" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
									value: event,
									onChange: (e) => setEvent(e.target.value),
									name: "event",
									children: [services.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: s.title }, s.id)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Altceva" })]
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "field",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Data, dacă o știi" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									value: date,
									onChange: (e) => setDate(e.target.value),
									name: "date",
									type: "date"
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "field",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Despre zi" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
								value: note,
								onChange: (e) => setNote(e.target.value),
								name: "note",
								placeholder: "Loc, câți oameni, foto, film sau amândouă."
							})]
						}),
						error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "field-error",
							children: error
						}) : null,
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "submit",
							className: "btn w-fit",
							children: "Notează cererea"
						})
					]
				}), past.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-10 border-t border-line",
					children: past.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "border-b border-line py-4 text-sm text-paper-dim",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-paper",
								children: item.name
							}),
							" · ",
							item.event,
							item.date ? ` · ${item.date}` : "",
							" — ",
							item.note
						]
					}, item.at))
				}) : null]
			})]
		})
	});
}
//#endregion
export { ContactPage as component };
