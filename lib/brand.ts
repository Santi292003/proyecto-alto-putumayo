// lib/brand.ts
// Fuente de verdad de marca para el proyecto Alto Putumayo
// Importa este archivo en cualquier componente o prompt para mantener consistencia visual y editorial

export const brand = {

  // ─── Identidad ───────────────────────────────────────────────────────────────
  site: {
    name: "Alto Putumayo",
    tagline: "Tierra de niebla, cultura milenaria",
    taglineEN: "Land of mist, millennial culture",
    description:
      "Portal cultural y turístico del Alto Putumayo, Colombia. Divulga la historia, tradiciones y paisajes del Valle de Sibundoy, hogar ancestral de los pueblos Kamëntsá e Inga.",
    descriptionEN:
      "Cultural and tourism portal for the Alto Putumayo region, Colombia. Showcases the history, traditions, and landscapes of the Valle de Sibundoy, ancestral home of the Kamëntsá and Inga peoples.",
    url: "https://alto-putumayo.vercel.app",
    locale: "es-CO",
  },

  // ─── Nombres oficiales ────────────────────────────────────────────────────────
  // Usar siempre estas grafías exactas — respetan la ortografía indígena
  names: {
    kamentsá: "Kamëntsá",         // pueblo indígena del Valle de Sibundoy
    inga: "Inga",                  // pueblo indígena del Alto Putumayo
    betscnate: "Bëtscnaté",       // Carnaval del Perdón, celebración mayor Kamëntsá
    valle: "Valle de Sibundoy",    // territorio principal
    region: "Alto Putumayo",       // región geográfica
    municipios: [
      "Sibundoy",
      "Santiago",
      "San Francisco",
      "Colón",
    ],
  },

  // ─── Paleta de colores ────────────────────────────────────────────────────────
  colors: {
    // Primarios — base territorial
    forestDeep:  { hex: "#1A3D28", usage: "Fondos hero, navbar, secciones oscuras" },
    forest:      { hex: "#1D6B3A", usage: "Color primario de marca, botones principales, iconos activos" },
    coral:       { hex: "#D45320", usage: "Acento festivo Bëtscnaté, CTAs secundarios, badges culturales" },
    ochre:       { hex: "#C59720", usage: "Acento artesanía, links activos en navbar, detalles decorativos" },
    cream:       { hex: "#F5EDD8", usage: "Texto sobre fondos oscuros, fondo de secciones cálidas" },

    // Apoyo — territorio y espiritualidad
    purpleCeremony: { hex: "#4A1B8C", usage: "Sección Historia, badges ceremoniales" },
    riverBlue:      { hex: "#1B5C8A", usage: "Sección Mapa, elementos de agua y geografía" },
    earth:          { hex: "#6B3A1A", usage: "Sección Turismo, tonos de tierra andina" },

    // Fondos neutros
    bgLight: { hex: "#F0F4EE", usage: "Fondo general de páginas interiores" },
    bgCard:  { hex: "#FFFFFF", usage: "Fondo de cards y componentes sobre bgLight" },
  },

  // ─── Tipografía ───────────────────────────────────────────────────────────────
  typography: {
    display: {
      family: "Playfair Display",
      weights: [400, 500, 700],
      usage: "Títulos de sección, hero headline, nombres propios destacados",
      cssVar: "--font-playfair",
      tailwind: "font-display",
    },
    body: {
      family: "Inter",
      weights: [400, 500],
      usage: "Cuerpo de texto, UI, navegación, labels, botones",
      cssVar: "--font-inter",
      tailwind: "font-body",
    },
    scale: {
      hero:    { size: "clamp(3.5rem, 8vw, 8rem)", weight: 500, family: "display" },
      h1:      { size: "2.5rem",  weight: 500, family: "display" },
      h2:      { size: "1.875rem", weight: 500, family: "display" },
      h3:      { size: "1.25rem",  weight: 500, family: "body" },
      body:    { size: "1rem",     weight: 400, family: "body", lineHeight: "1.7" },
      small:   { size: "0.875rem", weight: 400, family: "body" },
      label:   { size: "0.6875rem", weight: 500, family: "body", letterSpacing: "0.08em", transform: "uppercase" },
    },
  },

  // ─── Secciones del sitio ──────────────────────────────────────────────────────
  sections: [
    {
      id: "historia",
      label: "Historia",
      route: "/historia",
      accentColor: "#4A1B8C",   // purpleCeremony
      icon: "ti-book",
      description: "Origen de los pueblos Kamëntsá e Inga, el Valle de Sibundoy y su historia ancestral.",
      subsections: [
        { label: "Pueblo Kamëntsá", route: "/historia/kamentsá" },
        { label: "Pueblo Inga",     route: "/historia/inga" },
      ],
    },
    {
      id: "cultura",
      label: "Cultura",
      route: "/cultura",
      accentColor: "#D45320",   // coral
      icon: "ti-masks-theater",
      description: "Lengua, Bëtscnaté, artesanías, música y medicina ancestral.",
      subsections: [
        { label: "Bëtscnaté",  route: "/cultura/betscnate" },
        { label: "Lengua",     route: "/cultura/lengua" },
      ],
    },
    {
      id: "mapa",
      label: "Mapa",
      route: "/mapa",
      accentColor: "#1B5C8A",   // riverBlue
      icon: "ti-map-2",
      description: "Municipios, resguardos indígenas y sitios de interés del Alto Putumayo.",
      subsections: [],
    },
    {
      id: "turismo",
      label: "Turismo",
      route: "/turismo",
      accentColor: "#C59720",   // ochre
      icon: "ti-trail",
      description: "Rutas de senderismo, ecoturismo, gastronomía y experiencias culturales auténticas.",
      subsections: [
        { label: "Rutas", route: "/turismo/rutas" },
      ],
    },
    {
      id: "galeria",
      label: "Galería",
      route: "/galeria",
      accentColor: "#1D6B3A",   // forest
      icon: "ti-photo",
      description: "Fotografías, videos y grabaciones de audio de la región y sus tradiciones.",
      subsections: [],
    },
  ],

  // ─── Tono de voz ─────────────────────────────────────────────────────────────
  voice: {
    language: ["es", "en"],
    primaryLanguage: "es",
    traits: [
      "Cultural y respetuoso — honra las tradiciones indígenas sin exotizarlas",
      "Cercano y accesible — habla a turistas, estudiantes y comunidad por igual",
      "Informativo sin ser académico — riguroso pero legible",
      "Bilingüe — español primero, inglés como segunda capa",
    ],
    avoid: [
      "Lenguaje folclorizante o pintoresco",
      "Generalizar como 'indios' o 'nativos'",
      "Presentar las tradiciones como curiosidades exóticas",
    ],
  },

  // ─── Componentes visuales ─────────────────────────────────────────────────────
  ui: {
    borderRadius: {
      sm: "4px",
      md: "8px",
      lg: "12px",
      xl: "16px",
      full: "9999px",
    },
    hero: {
      background: "#1A3D28",          // forestDeep
      textPrimary: "#F5EDD8",         // cream
      textSecondary: "#9FC4A8",       // verde claro sobre oscuro
      patternColor: "cream/ochre/coral", // patrón SVG textil Kamëntsá
      ctaPrimary: { bg: "#D45320", text: "#F5EDD8" },
      ctaSecondary: { bg: "transparent", text: "#9FC4A8", border: "#3A5C45" },
    },
    navbar: {
      background: "#1A3D28",
      linkDefault: "#9FC4A8",
      linkActive: "#C59720",          // ochre
      logoColor: "#F5EDD8",
    },
  },

} as const;

export type Brand = typeof brand;