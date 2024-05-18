import type { SiteConfig } from "@/types";

export const siteConfig: SiteConfig = {
	// Used as both a meta property (src/components/BaseHead.astro L:31 + L:49) & the generated satori png (src/pages/og-image/[slug].png.ts)
	author: "Juan Narváez",
	// Meta property used to construct the meta title property, found in src/components/BaseHead.astro L:11
	title: "Portfolio de Juan Narvaez",
	// Meta property used as the default description meta property
	description: "¡Échale un vistazo a mi portafolio y conoceme un poco más!",
	// HTML lang property, found in src/layouts/Base.astro L:18
	lang: "es-AR",
	// Meta property, found in src/components/BaseHead.astro L:42
	ogLocale: "es_AR",
	// Date.prototype.toLocaleDateString() parameters, found in src/utils/date.ts.
	date: {
		locale: "es-AR",
		options: {
			day: "numeric",
			month: "short",
			year: "numeric",
		},
	},
};

// Used to generate links in both the Header & Footer.
export const menuLinks: Array<{ title: string; path: string }> = [
	{
		title: "Experiencia",
		path: "#experience",
	},
	{
		title: "Proyectos",
		path: "#projects",
	},
	{
		title: "Blog",
		path: "#blog",
	},
	{
		title: "Contacto",
		path: "#contact",
	},
];
