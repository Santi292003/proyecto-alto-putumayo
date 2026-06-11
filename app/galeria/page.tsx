import type { Metadata } from 'next'
import { brand } from '@/lib/brand'

export const metadata: Metadata = { title: 'Galería' }

const PLACEHOLDER_ITEMS = [
  { label: `${brand.names.betscnate} — Danzantes`,     accent: brand.colors.purpleCeremony.hex },
  { label: brand.names.valle,                           accent: brand.colors.forest.hex },
  { label: `Artesanías ${brand.names.kamentsá}`,        accent: brand.colors.coral.hex },
  { label: 'Río Putumayo al amanecer',                  accent: brand.colors.riverBlue.hex },
  { label: 'Plantas medicinales',                       accent: brand.colors.forest.hex },
  { label: `Tejido ${brand.names.inga}`,                accent: brand.colors.ochre.hex },
  { label: 'Laguna la Cocha',                           accent: brand.colors.riverBlue.hex },
  { label: 'Yachak en ceremonia',                       accent: brand.colors.purpleCeremony.hex },
  { label: 'Mercado tradicional',                       accent: brand.colors.earth.hex },
]

const sectionAccent = brand.sections.find(s => s.id === 'galeria')!.accentColor

export default function GaleriaPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

      {/* ── Page header ── */}
      <div className="mb-14">
        <div className="h-0.5 w-10 mb-6" style={{ backgroundColor: sectionAccent }} />
        <p
          className="font-body text-[0.65rem] font-semibold tracking-[0.28em] uppercase mb-4"
          style={{ color: sectionAccent }}
        >
          Galería
        </p>
        <h1 className="font-display text-4xl sm:text-5xl font-semibold text-forest-deep mb-5">
          Imágenes del {brand.names.region}
        </h1>
        <p className="font-body text-lg leading-relaxed max-w-2xl" style={{ color: 'rgba(26,61,40,0.65)' }}>
          Fotografías que capturan la esencia del paisaje, las ceremonias y la
          vida cotidiana de los pueblos {brand.names.kamentsá} e {brand.names.inga}.
        </p>
      </div>

      {/* ── Placeholder grid ── */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {PLACEHOLDER_ITEMS.map((item) => (
          <div
            key={item.label}
            className="aspect-square flex items-end p-5 border border-t-[3px] border-forest-deep/[0.06]"
            style={{
              backgroundColor: `${item.accent}10`,
              borderTopColor: item.accent,
            }}
          >
            <span
              className="font-body text-xs font-medium leading-snug"
              style={{ color: item.accent }}
            >
              {item.label}
            </span>
          </div>
        ))}
      </div>

      <p className="font-body text-sm italic mt-10 text-center" style={{ color: 'rgba(26,61,40,0.35)' }}>
        — Galería fotográfica completa disponible próximamente —
      </p>
    </div>
  )
}
