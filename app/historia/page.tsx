import type { Metadata } from 'next'
import Link from 'next/link'
import { brand } from '@/lib/brand'

export const metadata: Metadata = {
  title: 'Historia',
  description: `Origen de los pueblos ${brand.names.kamentsá} e ${brand.names.inga} en el ${brand.names.valle}: historia prehispánica, lenguas y resistencia cultural hasta hoy.`,
}

const SUB_PAGES = [
  {
    href:        '/historia/kamentsa',
    title:       `Pueblo ${brand.names.kamentsá}`,
    description: `Los guardianes del idioma camëntsá y del ${brand.names.betscnate}.`,
    accent:      brand.colors.coral.hex,
    symbol:      '◈',
  },
  {
    href:        '/historia/inga',
    title:       `Pueblo ${brand.names.inga}`,
    description: 'Herederos de una lengua quechua viva en el corazón de Colombia.',
    accent:      brand.colors.riverBlue.hex,
    symbol:      '◎',
  },
]

const sectionAccent = brand.sections.find(s => s.id === 'historia')!.accentColor

export default function HistoriaPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

      {/* ── Page header ── */}
      <div className="mb-14">
        <div className="h-0.5 w-10 mb-6" style={{ backgroundColor: sectionAccent }} />
        <p
          className="font-body text-[0.65rem] font-semibold tracking-[0.28em] uppercase mb-4"
          style={{ color: sectionAccent }}
        >
          Historia
        </p>
        <h1 className="font-display text-4xl sm:text-5xl font-semibold text-forest-deep mb-5">
          Historia del {brand.names.region}
        </h1>
        <p className="font-body text-lg leading-relaxed max-w-2xl" style={{ color: 'rgba(26,61,40,0.65)' }}>
          Milenios de presencia indígena en el {brand.names.valle}, desde los
          orígenes prehispánicos hasta la resistencia cultural contemporánea.
        </p>
      </div>

      {/* ── Sub-page cards ── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
        {SUB_PAGES.map((p) => (
          <Link
            key={p.href}
            href={p.href}
            className="group relative block overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-1.5 shadow-card hover:shadow-card-hover border border-t-[3px] border-forest-deep/[0.07]"
            style={{
              borderTopColor: p.accent,
              backgroundColor: brand.colors.cream.hex,
            }}
          >
            {/* Hover tint */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
              style={{ backgroundColor: `${p.accent}09` }}
              aria-hidden="true"
            />
            {/* Watermark symbol */}
            <span
              className="absolute -top-2 right-4 font-display leading-none pointer-events-none select-none"
              style={{ fontSize: '4.5rem', color: p.accent, opacity: 0.055 }}
              aria-hidden="true"
            >
              {p.symbol}
            </span>

            <div className="relative p-8">
              <h2
                className="font-display text-2xl font-semibold mb-2"
                style={{ color: p.accent }}
              >
                {p.title}
              </h2>
              <p className="font-body text-sm leading-relaxed mb-5" style={{ color: 'rgba(26,61,40,0.60)' }}>
                {p.description}
              </p>
              <span
                className="font-body text-[0.65rem] font-semibold tracking-[0.15em] uppercase flex items-center gap-1.5"
                style={{ color: p.accent }}
              >
                Leer más
                <span className="group-hover:translate-x-1 transition-transform inline-block" aria-hidden="true">→</span>
              </span>
            </div>
          </Link>
        ))}
      </div>

      {/* ── Intro text ── */}
      <div className="font-body text-base text-forest-deep/70 leading-relaxed">
        <p>
          El {brand.names.valle}, conocido en lengua camëntsá como{' '}
          <em>Bëngbe Uáman Tabanók</em> (&ldquo;Nuestro Gran Territorio&rdquo;), ha sido
          habitado durante más de dos milenios por comunidades que desarrollaron
          sistemas de conocimiento sofisticados sobre botánica, astronomía y
          medicina. Este contenido se expandirá con archivos MDX próximamente.
        </p>
      </div>
    </div>
  )
}
