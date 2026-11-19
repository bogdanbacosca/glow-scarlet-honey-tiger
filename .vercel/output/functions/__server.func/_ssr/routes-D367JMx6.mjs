import { i as __toESM } from "../_runtime.mjs";
import { c as shots, l as steps, o as reviews, s as services, t as FACEBOOK, u as ticker } from "./site-8tVnFK6M.mjs";
import { J as require_jsx_runtime, Y as require_react, x as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { s as ArrowUpRight } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-D367JMx6.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		id: "content",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "hero",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						className: "hero-media",
						src: "/portfolio/hero.jpg",
						alt: "Miri lângă un lac, în lumină caldă de după-amiază",
						fetchPriority: "high"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "hero-scrim" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "hero-copy wrap-wide",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "eyebrow",
								children: "Foto & film · România"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
								className: "display-xl mt-4 max-w-5xl",
								children: [
									"Capturăm",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "block italic text-champagne",
										children: "momentele tale"
									}),
									"speciale"
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-8 flex flex-col gap-6 md:flex-row md:items-end md:justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "lede",
									children: "Fotografie și videografie de nuntă de înaltă calitate, pentru zile care nu se repetă. Pregătiri, ceremonie, oameni, ultimul dans."
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-wrap gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/portofoliu",
										search: { cat: "toate" },
										className: "btn",
										"data-cursor": "view",
										children: "Portofoliu"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/contact",
										className: "btn-ghost",
										children: "Cere o ofertă"
									})]
								})]
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "ticker",
				"aria-hidden": "true",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "ticker-track",
					children: [...ticker, ...ticker].map((word, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "ticker-item",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "ticker-dot" }), word]
					}, `${word}-${i}`))
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "section",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "wrap-wide grid items-end gap-10 md:grid-cols-12",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "md:col-span-7",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow",
							children: "Studioul"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "display mt-4 text-5xl md:text-7xl",
							children: "O zi întreagă, spusă fără grabă."
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "md:col-span-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "lede",
							children: "In-Vogue Media e o echipă calmă, atentă la detalii și la felul în care se simte o zi, nu doar la cum arată. De la pregătiri până la dansul mirilor, fiecare cadru ține o poveste."
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/servicii",
							className: "btn-ghost mt-6",
							"data-cursor": "view",
							children: ["Serviciile", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-4" })]
						})]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "section pt-0",
				id: "cadre",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "wrap-wide mb-8 flex flex-wrap items-end justify-between gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow",
						children: "Portofoliu"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "display mt-3 text-5xl md:text-6xl",
						children: "Cadre alese"
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "lede max-w-sm",
						children: "Șase foldere. Fiecare e portofoliul categoriei — deschide-l și răsfoiește cadrele."
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "wrap-wide folder-grid",
					children: services.map((service) => {
						const frames = shots.filter((shot) => shot.category === service.id);
						const [cover, mid, back] = frames;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/portofoliu",
							search: { cat: service.id },
							className: "folder",
							"data-cursor": "view",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "folder-sleeve",
								children: [
									back ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										className: "folder-back",
										src: back.src,
										alt: ""
									}) : null,
									mid ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										className: "folder-mid",
										src: mid.src,
										alt: ""
									}) : null,
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										className: "folder-cover",
										src: cover.src,
										alt: ""
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "folder-meta",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "folder-index",
									children: service.index
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "folder-name",
									children: service.title
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "folder-count",
									children: [
										frames.length,
										" ",
										frames.length === 1 ? "cadru" : "cadre"
									]
								})] })]
							})]
						}, service.id);
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "section",
				id: "servicii",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "wrap-wide",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow",
							children: "Servicii"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "display mt-3 max-w-3xl text-5xl md:text-6xl",
							children: "In-Vogue Media vine cu următoarele."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-10",
							children: services.map((service) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/portofoliu",
								search: { cat: service.id },
								className: "service-row",
								"data-cursor": "view",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "service-index",
										children: service.index
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "service-title block",
										children: service.title
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "service-text block",
										children: service.text
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										className: "service-still",
										src: service.image,
										alt: ""
									})
								]
							}, service.id))
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "section border-t border-line",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "wrap-wide",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow",
							children: "Cum lucrăm"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "display mt-3 text-5xl md:text-6xl",
							children: "Patru pași, fără surprize."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
							className: "mt-12 grid gap-10 md:grid-cols-4",
							children: steps.map((step) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "eyebrow",
									children: step.n
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "display mt-3 text-4xl",
									children: step.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 text-sm leading-relaxed text-muted",
									children: step.text
								})
							] }, step.n))
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "section border-t border-line",
				id: "recenzii",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "wrap-wide grid gap-12 md:grid-cols-12",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "md:col-span-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "eyebrow",
								children: "Recenzii"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "display mt-3 text-5xl",
								children: "Ce rămâne după zi."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: FACEBOOK,
								target: "_blank",
								rel: "noreferrer",
								className: "btn-ghost mt-8",
								children: ["Oferte și concursuri", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-4" })]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "md:col-span-8",
						children: reviews.map((review) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReviewCard, {
							name: review.name,
							short: review.short,
							full: review.full
						}, review.id))
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "border-t border-line",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "wrap-wide flex flex-col items-start justify-between gap-6 py-16 md:flex-row md:items-end",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow",
						children: "Ofertă"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "display mt-3 text-5xl md:text-7xl",
						children: "Spune-ne data."
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/contact",
						className: "btn",
						"data-cursor": "view",
						children: "Contactați-ne pentru ofertă"
					})]
				})
			})
		]
	});
}
function ReviewCard({ name, short, full }) {
	const [open, setOpen] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "review",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "text-sm tracking-wide text-champagne",
				children: name
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("q", {
				className: "mt-3 block",
				children: open ? full : short
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "nav-link mt-4",
				onClick: () => setOpen((v) => !v),
				children: open ? "Mai puțin" : "Citește tot"
			})
		]
	});
}
//#endregion
export { Home as component };
