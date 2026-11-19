import { s as services } from "./site-8tVnFK6M.mjs";
import { J as require_jsx_runtime, x as Link } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/servicii-BtDe-s8A.js
var import_jsx_runtime = require_jsx_runtime();
function ServicesPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		id: "content",
		className: "page-enter pt-28",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
			className: "wrap-wide",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow",
					children: "Servicii"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "display mt-4 max-w-4xl text-6xl md:text-8xl",
					children: "Ce filmăm și ce fotografiem."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "lede mt-6",
					children: "Nu vindem pachete cu nume de flori. Spune-ne evenimentul și îți trimitem o ofertă clară, pe telefon."
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "wrap-wide mt-14",
			children: services.map((service) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "grid gap-6 border-t border-line py-10 md:grid-cols-12 md:items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "md:col-span-5",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: service.image,
						alt: service.alt,
						className: "aspect-video w-full object-cover"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "md:col-span-7",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow",
							children: service.index
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "display mt-2 text-5xl",
							children: service.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "lede mt-4",
							children: service.text
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 flex flex-wrap gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/portofoliu",
								search: { cat: service.id },
								className: "btn-ghost",
								"data-cursor": "view",
								children: "Vezi cadrele"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/contact",
								className: "btn",
								children: "Cere ofertă"
							})]
						})
					]
				})]
			}, service.id))
		})]
	});
}
//#endregion
export { ServicesPage as component };
