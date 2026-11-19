import { i as __toESM } from "../_runtime.mjs";
import { a as categoryLabel, c as shots, i as categories, s as services } from "./site-8tVnFK6M.mjs";
import { J as require_jsx_runtime, Y as require_react, d as require_react_dom, x as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as ChevronRight, o as ChevronLeft, t as X } from "../_libs/lucide-react.mjs";
import { n as Route$1, r as cn } from "./router-CiU9Sili.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/portofoliu-CJXVoptY.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var import_react_dom = require_react_dom();
function Lightbox({ shot, index, total, onClose, onPrev, onNext }) {
	const drag = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const prev = document.body.style.overflow;
		document.body.style.overflow = "hidden";
		return () => {
			document.body.style.overflow = prev;
		};
	}, []);
	return (0, import_react_dom.createPortal)(/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "lightbox",
		role: "dialog",
		"aria-modal": "true",
		"aria-label": shot.title,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "lb-bar",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lb-copy",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "eyebrow",
						children: [
							categoryLabel(shot.category),
							" · ",
							shot.year
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "lb-title",
						children: shot.title
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "lb-btn",
					onClick: onClose,
					"aria-label": "Închide",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" })
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "lightbox-stage",
				onPointerDown: (e) => {
					if (e.target.closest("button")) return;
					drag.current = {
						x: e.clientX,
						y: e.clientY
					};
				},
				onPointerUp: (e) => {
					const start = drag.current;
					drag.current = null;
					if (!start) return;
					const dx = e.clientX - start.x;
					const dy = e.clientY - start.y;
					if (Math.abs(dx) < 48 || Math.abs(dx) < Math.abs(dy)) return;
					if (dx < 0) onNext();
					else onPrev();
				},
				onPointerCancel: () => {
					drag.current = null;
				},
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: shot.src,
					alt: shot.alt
				}, shot.id)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
				className: "lb-bar",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "lb-btn",
						onClick: onPrev,
						"aria-label": "Cadrul anterior",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "size-5" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "lb-meta",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: shot.place }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "lb-count",
							children: [
								index + 1,
								" / ",
								total
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "lb-btn",
						onClick: onNext,
						"aria-label": "Cadrul următor",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "size-5" })
					})
				]
			})
		]
	}), document.body);
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
function PortfolioPage() {
	const { cat } = Route$1.useSearch();
	const visible = cat === "toate" ? shots : shots.filter((s) => s.category === cat);
	const folder = services.find((s) => s.id === cat);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		id: "content",
		className: "page-enter pt-24 md:pt-28",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
			className: "wrap-wide pb-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow",
					children: folder ? `Folder · ${folder.index}` : "Portofoliu"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4 flex flex-col gap-6 md:flex-row md:items-end md:justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "display text-6xl md:text-8xl",
						children: folder ? folder.title : "Cadrele."
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
