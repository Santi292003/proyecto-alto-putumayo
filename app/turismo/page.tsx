import type { Metadata } from 'next'
import { brand } from '@/lib/brand'

export const metadata: Metadata = {
  title: 'Turismo',
  description: `Rutas de naturaleza y cultura en el ${brand.names.region}: senderismo, ecoturismo y experiencias auténticas con los pueblos ${brand.names.kamentsá} e ${brand.names.inga}.`,
}

const ROUTES = [
  {
    title:       'Sendero del Río Putumayo',
    duration:    '2–3 días',
    type:        'Naturaleza',
    description: 'Recorre las orillas del río sagrado entre selva y comunidades indígenas.',
    accent:      brand.colors.riverBlue.hex,
    symbol:      '◎',
  },
  {
    title:       brand.names.valle,
    duration:    '1 día',
    type:        'Cultural',
    description: `Visita los mercados tradicionales y los centros ceremoniales de ${brand.names.kamentsá} e ${brand.names.inga}.`,
    accent:      brand.colors.coral.hex,
    symbol:      '◈',
  },
  {
    title:       'Laguna la Cocha',
    duration:    '1–2 días',
    type:        'Ecoturismo',
    description: 'Ramsar internacional: biodiversidad andino-amazónica y artesanías locales.',
    accent:      brand.colors.forest.hex,
    symbol:      '◇',
  },
]

const sectionAccent = brand.sections.find(s => s.id === 'turismo')!.accentColor

export default function TurismoPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

      {/* ── Page header ── */}
      <div className="mb-14">
        <div className="h-0.5 w-10 mb-6" style={{ backgroundColor: sectionAccent }} />
        <p
          className="font-body text-[0.65rem] font-semibold tracking-[0.28em] uppercase mb-4"
          style={{ color: sectionAccent }}
        >
          Turismo Responsable
        </p>
        <h1 className="font-display text-4xl sm:text-5xl font-semibold text-forest-deep mb-5">
          Rutas del {brand.names.region}
        </h1>
        <p className="font-body text-lg leading-relaxed max-w-2xl" style={{ color: 'rgba(26,61,40,0.65)' }}>
          Experiencias de naturaleza, cultura y espiritualidad que respetan y
          valoran los saberes de los pueblos originarios.
        </p>
      </div>

      {/* ── Route cards ── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {ROUTES.map((r) => (
          <div
            key={r.title}
            className="relative overflow-hidden shadow-card border border-t-[3px] border-forest-deep/[0.07]"
            style={{
              borderTopColor: r.accent,
              backgroundColor: brand.colors.cream.hex,
            }}
          >
            {/* Watermark */}
            <span
              className="absolute -top-2 right-3 font-display leading-none pointer-events-none select-none"
              style={{ fontSize: '4rem', color: r.accent, opacity: 0.055 }}
              aria-hidden="true"
            >
              {r.symbol}
            </span>

            <div className="relative p-7">
              <div className="flex items-center justify-between mb-4">
                <span
                  className="font-body text-[0.6rem] font-semibold tracking-[0.2em] uppercase"
                  style={{ color: r.accent }}
                >
                  {r.type}
                </span>
                <span className="font-body text-xs" style={{ color: 'rgba(26,61,40,0.38)' }}>
                  {r.duration}
                </span>
              </div>
              <h2 className="font-display text-lg font-semibold text-forest-deep mb-2 leading-snug">
                {r.title}
              </h2>
              <p className="font-body text-sm leading-relaxed" style={{ color: 'rgba(26,61,40,0.60)' }}>
                {r.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <p className="font-body text-sm italic mt-12 text-center" style={{ color: 'rgba(26,61,40,0.38)' }}>
        — Información detallada de rutas, alojamientos y guías locales
        disponible próximamente —
      </p>
    </div>
  )
}
