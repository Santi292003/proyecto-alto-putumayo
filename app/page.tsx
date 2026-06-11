import Link from 'next/link'
import { brand } from '@/lib/brand'

const SYMBOLS: Record<string, string> = {
  historia: '◈',
  cultura:  '◉',
  mapa:     '◎',
  turismo:  '◇',
  galeria:  '◫',
}

const SECTIONS = brand.sections.map(s => ({
  href:        s.route,
  title:       s.label,
  description: s.description,
  accent:      s.accentColor,
  symbol:      SYMBOLS[s.id] ?? '◆',
}))

/* Compound ornament divider reused in two sections */
function OrnamentDivider({ symbol = '◈' }: { symbol?: string }) {
  return (
    <div className="flex items-center justify-center gap-3" aria-hidden="true">
      <div className="flex items-center gap-1.5">
        <div className="h-px w-6"  style={{ backgroundColor: 'rgba(197,151,32,0.2)' }} />
        <div className="h-px w-14" style={{ backgroundColor: 'rgba(197,151,32,0.45)' }} />
      </div>
      <div className="flex items-center gap-2" style={{ color: brand.colors.ochre.hex }}>
        <span style={{ fontSize: '0.38rem' }}>◆</span>
        <span style={{ fontSize: '1.1rem' }}>{symbol}</span>
        <span style={{ fontSize: '0.38rem' }}>◆</span>
      </div>
      <div className="flex items-center gap-1.5">
        <div className="h-px w-14" style={{ backgroundColor: 'rgba(197,151,32,0.45)' }} />
        <div className="h-px w-6"  style={{ backgroundColor: 'rgba(197,151,32,0.2)' }} />
      </div>
    </div>
  )
}

export default function HomePage() {
  return (
    <>
      {/* ══════════════════════════════════════════════════════
          HERO
      ══════════════════════════════════════════════════════ */}
      <section className="relative min-h-[calc(100dvh-4rem)] flex flex-col items-center justify-center bg-forest-deep overflow-hidden">

        {/* Radial gradient backdrop */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 100% 80% at 50% 35%, #1D6B3A 0%, #1A3D28 48%, #0d2218 100%)',
          }}
        />

        {/* ── Textile pattern — inspired by Kamëntsá weavings ── */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <svg
            width="100%"
            height="100%"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid slice"
          >
            <defs>
              <pattern id="textile" x="0" y="0" width="160" height="160" patternUnits="userSpaceOnUse">
                {/* Dot grid — textile weave texture */}
                {[0, 40, 80, 120, 160].map(x =>
                  [0, 40, 80, 120, 160].map(y => (
                    <circle key={`g-${x}-${y}`} cx={x} cy={y} r="1.2" fill="#F5EDD8" opacity="0.04" />
                  ))
                )}

                {/* Outer diamond — cream */}
                <polygon points="80,5 155,80 80,155 5,80"
                  fill="none" stroke="#F5EDD8" strokeWidth="0.8" opacity="0.07" />

                {/* Cross arms through outer midpoints */}
                <line x1="80" y1="5"   x2="80"  y2="155" stroke="#C59720" strokeWidth="0.45" opacity="0.07" />
                <line x1="5"  y1="80"  x2="155" y2="80"  stroke="#C59720" strokeWidth="0.45" opacity="0.07" />

                {/* Second ring — ochre */}
                <polygon points="80,20 140,80 80,140 20,80"
                  fill="none" stroke="#C59720" strokeWidth="0.7" opacity="0.09" />

                {/* Third ring — cream */}
                <polygon points="80,38 122,80 80,122 38,80"
                  fill="none" stroke="#F5EDD8" strokeWidth="0.5" opacity="0.06" />

                {/* Inner diamond — coral */}
                <polygon points="80,52 108,80 80,108 52,80"
                  fill="none" stroke="#D45320" strokeWidth="0.7" opacity="0.10" />

                {/* Core diamond — ochre */}
                <polygon points="80,64 96,80 80,96 64,80"
                  fill="none" stroke="#C59720" strokeWidth="0.5" opacity="0.09" />

                {/* Center lozenge (filled) */}
                <polygon points="80,74 86,80 80,86 74,80" fill="#C59720" opacity="0.14" />

                {/* Vertex arrow-triangles pointing inward */}
                <polygon points="80,5 87,16 73,16"    fill="#C59720" opacity="0.07" />
                <polygon points="155,80 144,73 144,87" fill="#D45320" opacity="0.07" />
                <polygon points="80,155 87,144 73,144" fill="#C59720" opacity="0.07" />
                <polygon points="5,80 16,73 16,87"    fill="#D45320" opacity="0.07" />

                {/* Edge mini-diamonds (connect to neighbouring tiles) */}
                <polygon points="80,0 87,7 80,14 73,7"     fill="none" stroke="#F5EDD8" strokeWidth="0.5" opacity="0.05" />
                <polygon points="160,80 153,73 146,80 153,87" fill="none" stroke="#F5EDD8" strokeWidth="0.5" opacity="0.05" />
                <polygon points="80,160 87,153 80,146 73,153" fill="none" stroke="#F5EDD8" strokeWidth="0.5" opacity="0.05" />
                <polygon points="0,80 7,73 14,80 7,87"      fill="none" stroke="#F5EDD8" strokeWidth="0.5" opacity="0.05" />

                {/* Quadrant mini-diamonds */}
                <polygon points="40,28 52,40 40,52 28,40"     fill="none" stroke="#F5EDD8" strokeWidth="0.4" opacity="0.04" />
                <polygon points="120,28 132,40 120,52 108,40"  fill="none" stroke="#F5EDD8" strokeWidth="0.4" opacity="0.04" />
                <polygon points="40,108 52,120 40,132 28,120"  fill="none" stroke="#F5EDD8" strokeWidth="0.4" opacity="0.04" />
                <polygon points="120,108 132,120 120,132 108,120" fill="none" stroke="#F5EDD8" strokeWidth="0.4" opacity="0.04" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#textile)" />
          </svg>
        </div>

        {/* Bottom vignette for depth */}
        <div
          className="absolute bottom-0 left-0 right-0 h-48 pointer-events-none"
          style={{ background: 'linear-gradient(to bottom, transparent, rgba(13,34,24,0.65))' }}
          aria-hidden="true"
        />

        {/* ── Hero content ── */}
        <div
          className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto py-28"
          style={{ animation: 'fade-in-up 0.8s ease-out both' }}
        >
          {/* Region label */}
          <p
            className="font-body text-[0.65rem] font-semibold tracking-[0.32em] uppercase mb-8 inline-flex items-center gap-3"
            style={{ color: brand.colors.ochre.hex }}
          >
            <span className="hidden sm:block h-px w-8" style={{ backgroundColor: 'rgba(197,151,32,0.4)' }} />
            {brand.names.valle} · Putumayo · Colombia
            <span className="hidden sm:block h-px w-8" style={{ backgroundColor: 'rgba(197,151,32,0.4)' }} />
          </p>

          {/* Decorative rule */}
          <div className="mb-10">
            <OrnamentDivider symbol="◈" />
          </div>

          {/* Main title */}
          <h1
            className="font-display font-bold leading-[0.93] text-cream mb-5"
            style={{ fontSize: 'clamp(3.5rem, 11vw, 8.5rem)', letterSpacing: '-0.02em' }}
          >
            Alto
            <br />
            Putumayo
          </h1>

          {/* Tagline from brand */}
          <p
            className="font-display italic mb-5"
            style={{
              fontSize: 'clamp(1rem, 2.2vw, 1.3rem)',
              color: brand.ui.hero.textSecondary,
              letterSpacing: '0.01em',
            }}
          >
            {brand.site.tagline}
          </p>

          {/* Body */}
          <p
            className="font-body text-base sm:text-lg leading-[1.8] max-w-xl mx-auto mb-14"
            style={{ color: 'rgba(245,237,216,0.50)' }}
          >
            Un viaje a través de los saberes milenarios, las tradiciones vivas y
            los paisajes del sur de Colombia, donde la selva amazónica conversa
            con los Andes.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/historia"
              className="inline-flex items-center justify-center gap-2.5 font-body text-xs font-semibold tracking-[0.18em] uppercase px-9 py-4 transition-opacity hover:opacity-90"
              style={{
                backgroundColor: brand.ui.hero.ctaPrimary.bg,
                color: brand.ui.hero.ctaPrimary.text,
              }}
            >
              Descubrir Historia
              <span aria-hidden="true">→</span>
            </Link>
            <Link
              href="/mapa"
              className="inline-flex items-center justify-center gap-2.5 font-body text-xs font-semibold tracking-[0.18em] uppercase px-9 py-4 border transition-colors hover:text-cream hover:border-forest-mist/40"
              style={{
                borderColor: brand.ui.hero.ctaSecondary.border,
                color: brand.ui.hero.ctaSecondary.text,
              }}
            >
              Ver Mapa
              <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          aria-hidden="true"
        >
          <span
            className="font-body text-[0.6rem] tracking-[0.28em] uppercase"
            style={{ color: 'rgba(245,237,216,0.22)' }}
          >
            Explorar
          </span>
          <div
            className="relative w-px h-10 overflow-hidden"
            style={{ backgroundColor: 'rgba(245,237,216,0.08)' }}
          >
            <div
              className="absolute top-0 w-full h-1/2"
              style={{
                backgroundColor: 'rgba(245,237,216,0.38)',
                animation: 'slide-down 1.8s ease-in-out infinite',
              }}
            />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          SECTION CARDS
      ══════════════════════════════════════════════════════ */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-bg-light">
        <div className="max-w-7xl mx-auto">

          {/* Heading */}
          <div className="text-center mb-16">
            <p
              className="font-body text-[0.65rem] font-semibold tracking-[0.3em] uppercase mb-4"
              style={{ color: brand.colors.ochre.hex }}
            >
              Descubrir
            </p>
            <h2 className="font-display text-3xl sm:text-4xl text-forest-deep mb-4">
              Explora el {brand.names.region}
            </h2>
            <p
              className="font-body text-base max-w-md mx-auto leading-relaxed"
              style={{ color: 'rgba(26,61,40,0.58)' }}
            >
              Un territorio donde coexisten la naturaleza exuberante, la
              espiritualidad y la riqueza cultural de las naciones originarias.
            </p>
            <div className="flex items-center justify-center gap-3 mt-8" aria-hidden="true">
              <div className="h-px w-10" style={{ backgroundColor: 'rgba(197,151,32,0.3)' }} />
              <span style={{ color: brand.colors.ochre.hex, fontSize: '0.45rem' }}>◆</span>
              <div className="h-px w-10" style={{ backgroundColor: 'rgba(197,151,32,0.3)' }} />
            </div>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
            {SECTIONS.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="group relative block overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-2 shadow-card hover:shadow-card-hover border border-t-[3px] border-forest-deep/[0.07]"
                style={{
                  borderTopColor: s.accent,
                  backgroundColor: brand.colors.cream.hex,
                }}
              >
                {/* Hover tint overlay */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{ backgroundColor: `${s.accent}09` }}
                  aria-hidden="true"
                />

                {/* Watermark symbol */}
                <span
                  className="absolute -top-2 right-3 font-display leading-none pointer-events-none select-none"
                  style={{ fontSize: '5.5rem', color: s.accent, opacity: 0.055 }}
                  aria-hidden="true"
                >
                  {s.symbol}
                </span>

                <div className="relative p-7">
                  <span
                    className="block text-xl mb-5"
                    style={{ color: s.accent }}
                    aria-hidden="true"
                  >
                    {s.symbol}
                  </span>
                  <h3 className="font-display font-semibold text-lg text-forest-deep mb-2 leading-snug">
                    {s.title}
                  </h3>
                  <p
                    className="font-body text-sm leading-relaxed mb-6"
                    style={{ color: 'rgba(26,61,40,0.58)' }}
                  >
                    {s.description}
                  </p>
                  <span
                    className="font-body text-[0.65rem] font-semibold tracking-[0.15em] uppercase flex items-center gap-2"
                    style={{ color: s.accent }}
                  >
                    Explorar
                    <span
                      className="group-hover:translate-x-1.5 transition-transform duration-200 inline-block"
                      aria-hidden="true"
                    >
                      →
                    </span>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          INTRO BLOCK
      ══════════════════════════════════════════════════════ */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-3xl mx-auto text-center">

          <div className="mb-12">
            <OrnamentDivider symbol="◉" />
          </div>

          <h2 className="font-display text-2xl sm:text-3xl text-forest-deep mb-8">
            Un territorio de saberes vivos
          </h2>

          <p
            className="font-body text-base sm:text-lg leading-[1.88] mb-6"
            style={{ color: 'rgba(26,61,40,0.68)' }}
          >
            El Alto Putumayo, enclavado entre los Andes y la Amazonía, es hogar
            de dos naciones indígenas con tradiciones milenarias:{' '}
            <strong className="font-semibold text-forest-deep">{brand.names.kamentsá}</strong>,
            guardianes del idioma camëntsá y del{' '}
            <em>{brand.names.betscnate}</em>, y{' '}
            <strong className="font-semibold text-forest-deep">{brand.names.inga}</strong>,
            herederos de una lengua quechua viva que aún resuena en el{' '}
            {brand.names.valle}.
          </p>

          <p
            className="font-body text-base sm:text-lg leading-[1.88]"
            style={{ color: 'rgba(26,61,40,0.68)' }}
          >
            Este sitio nació para acompañar ese patrimonio: documentarlo,
            compartirlo y honrarlo.
          </p>

          <div className="flex items-center justify-center mt-14" aria-hidden="true">
            <div className="h-px w-20" style={{ backgroundColor: 'rgba(197,151,32,0.22)' }} />
          </div>
        </div>
      </section>
    </>
  )
}
