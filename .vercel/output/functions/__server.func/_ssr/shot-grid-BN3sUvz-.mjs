import { i as __toESM } from "../_runtime.mjs";
import { a as categoryLabel } from "./site-bvkzLDvJ.mjs";
import { J as require_react, q as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as ChevronRight, o as ChevronLeft, t as X } from "../_libs/lucide-react.mjs";
import { r as cn } from "./router-DFgrJk40.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/shot-grid-BN3sUvz-.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Lightbox({ shot, index, total, onClose, onPrev, onNext }) {
	(0, import_react.useEffect)(() => {
		const prev = document.body.style.overflow;
		document.body.style.overflow = "hidden";
		return () => {
			document.body.style.overflow = prev;
		};
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "lightbox",
		role: "dialog",
		"aria-modal": "true",
		"aria-label": shot.title,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "wrap-wide flex items-center justify-between gap-4 py-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "eyebrow",
					children: [
						categoryLabel(shot.category),
						" · ",
						shot.year
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "display mt-1 text-3xl",
					children: shot.title
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mr-2 hidden text-sm text-paper-dim sm:block",
						children: [
							index + 1,
							" / ",
							total,
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mx-2 text-muted",
								children: "·"
							}),
							"esc"
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "lb-btn",
						onClick: onClose,
						"aria-label": "Închide",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" })
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "lightbox-stage",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "lb-btn absolute left-3 md:left-6",
						onClick: onPrev,
						"aria-label": "Cadrul anterior",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "size-5" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: shot.src,
						alt: shot.alt
					}, shot.id),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "lb-btn absolute right-3 md:right-6",
						onClick: onNext,
						"aria-label": "Cadrul următor",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "size-5" })
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "wrap-wide flex items-center justify-between py-4 text-sm text-paper-dim",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: shot.place }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "sm:hidden",
					children: [
						index + 1,
						" / ",
						total
					]
				})]
			})
		]
	});
}
var ratioClass = {
	wide: "ratio-wide",
	tall: "ratio-tall",
	square: "ratio-square"
};
function ShotGrid({ shots }) {
	const [index, setIndex] = (0, import_react.useState)(null);
	const close = (0, import_react.useCallback)(() => setIndex(null), []);
	const prev = (0, import_react.useCallback)(() => {
		setIndex((i) => i === null ? i : (i - 1 + shots.length) % shots.length);
	}, [shots.length]);
	const next = (0, import_react.useCallback)(() => {
		setIndex((i) => i === null ? i : (i + 1) % shots.length);
	}, [shots.length]);
	(0, import_react.useEffect)(() => {
		if (index === null) return;
		const onKey = (e) => {
			if (e.key === "Escape") close();
			if (e.key === "ArrowLeft") prev();
			if (e.key === "ArrowRight") next();
		};
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, [
		index,
		close,
		prev,
		next
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "folio",
		children: shots.map((shot, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			className: "shot",
			"data-cursor": "view",
			onClick: () => setIndex(i),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: cn("shot-frame", ratioClass[shot.ratio]),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: shot.src,
					alt: shot.alt,
					loading: i < 3 ? "eager" : "lazy"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "shot-meta",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "shot-kicker",
						children: [
							categoryLabel(shot.category),
							" · ",
							shot.place
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "shot-title",
						children: shot.title
					})]
				})]
			})
		}, shot.id))
	}), index !== null ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lightbox, {
		shot: shots[index],
		index,
		total: shots.length,
		onClose: close,
		onPrev: prev,
		onNext: next
	}) : null] });
}
//#endregion
export { ShotGrid as t };
