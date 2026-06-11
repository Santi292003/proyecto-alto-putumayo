import type { Metadata } from 'next'
import Link from 'next/link'
import { brand } from '@/lib/brand'

export const metadata: Metadata = { title: 'Cultura' }

const SUB_PAGES = [
  {
    href:        '/cultura/betscnate',
    title:       brand.names.betscnate,
    description: 'El Carnaval del Perdón: fiesta de renovación y reconciliación.',
    accent:      brand.colors.purpleCeremony.hex,
    symbol:      '◉',
  },
  {
    href:        '/cultura/lengua',
    title:       'Lenguas',
    description: 'Camëntsá e Inga: dos voces milenarias que aún resuenan.',
    accent:      brand.colors.ochre.hex,
    symbol:      '◫',
  },
]

const sectionAccent = brand.sections.find(s => s.id === 'cultura')!.accentColor

export default function CulturaPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

      {/* ── Page header ── */}
      <div className="mb-14">
        <div className="h-0.5 w-10 mb-6" style={{ backgroundColor: sectionAccent }} />
        <p
          className="font-body text-[0.65rem] font-semibold tracking-[0.28em] uppercase mb-4"
          style={{ color: sectionAccent }}
        >
          Cultura
        </p>
        <h1 className="font-display text-4xl sm:text-5xl font-semibold text-forest-deep mb-5">
          Cultura Viva del {brand.names.region}
        </h1>
        <p className="font-body text-lg leading-relaxed max-w-2xl" style={{ color: 'rgba(26,61,40,0.65)' }}>
          Ceremonias, lenguas y saberes que se transmiten de generación en
          generación, resistiendo el tiempo y enriqueciendo la diversidad
          cultural de Colombia.
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
            {/* Watermark */}
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

      <p className="font-body text-base text-forest-deep/70 leading-relaxed">
        La cultura del {brand.names.region} es un tejido vivo de prácticas
        ceremoniales, conocimiento botánico, música, danza y lengua.
        Contenido completo disponible próximamente.
      </p>
    </div>
  )
}
