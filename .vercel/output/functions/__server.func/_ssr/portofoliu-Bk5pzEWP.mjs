import { c as shots, i as categories } from "./site-bvkzLDvJ.mjs";
import { b as Link, q as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as Route$1, r as cn } from "./router-DFgrJk40.mjs";
import { t as ShotGrid } from "./shot-grid-BN3sUvz-.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/portofoliu-Bk5pzEWP.js
var import_jsx_runtime = require_jsx_runtime();
function PortfolioPage() {
	const { cat } = Route$1.useSearch();
	const visible = cat === "toate" ? shots : shots.filter((s) => s.category === cat);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		id: "content",
		className: "page-enter pt-24 md:pt-28",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
			className: "wrap-wide pb-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow",
					children: "Portofoliu"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4 flex flex-col gap-6 md:flex-row md:items-end md:justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "display text-6xl md:text-8xl",
						children: "Cadrele."
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "lede",
						children: [
							visible.length,
							" ",
							visible.length === 1 ? "cadru" : "cadre",
							cat === "toate" ? ". Apasă pe o imagine — săgețile merg mai departe." : "."
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "chip-row mt-8",
					role: "tablist",
					"aria-label": "Filtrează portofoliul",
					children: categories.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/portofoliu",
						search: { cat: c.id },
						resetScroll: false,
						role: "tab",
						"aria-selected": cat === c.id,
						className: cn("chip", cat === c.id && "is-on"),
						children: c.label
					}, c.id))
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "wrap-wide pb-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShotGrid, { shots: visible }, cat)
		})]
	});
}
//#endregion
export { PortfolioPage as component };
