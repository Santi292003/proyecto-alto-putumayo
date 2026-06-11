import type { Metadata } from 'next'
import { brand } from '@/lib/brand'
import MapaCliente from '@/components/MapaCliente'

export const metadata: Metadata = {
  title: 'Mapa Interactivo',
  description: `Explora el territorio ancestral del ${brand.names.region}: comunidades ${brand.names.kamentsá} e ${brand.names.inga}, resguardos y sitios de valor cultural.`,
}

const sectionAccent = brand.sections.find((s) => s.id === 'mapa')!.accentColor

export default function MapaPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

      {/* ── Page header ── */}
      <div className="mb-10">
        <div className="h-0.5 w-10 mb-6" style={{ backgroundColor: sectionAccent }} />
        <p
          className="font-body text-[0.65rem] font-semibold tracking-[0.28em] uppercase mb-4"
          style={{ color: sectionAccent }}
        >
          Territorio
        </p>
        <h1 className="font-display text-4xl sm:text-5xl font-semibold text-forest-deep mb-5">
          Mapa del {brand.names.region}
        </h1>
        <p className="font-body text-lg leading-relaxed max-w-2xl" style={{ color: 'rgba(26,61,40,0.65)' }}>
          Explora el territorio ancestral: comunidades, resguardos indígenas y
          puntos de interés cultural en el {brand.names.valle}.
        </p>
      </div>

      {/* ── Interactive map ── */}
      <div
        className="w-full overflow-hidden border border-forest-deep/[0.08]"
        style={{ borderTop: `3px solid ${sectionAccent}` }}
      >
        <MapaCliente />
      </div>

      {/* ── Legend ── */}
      <div className="flex flex-wrap items-center gap-x-8 gap-y-3 mt-5 pb-4 border-b border-forest-deep/[0.07]">
        <span
          className="font-body text-[0.6rem] font-semibold tracking-[0.22em] uppercase"
          style={{ color: 'rgba(26,61,40,0.38)' }}
        >
          Leyenda
        </span>

        {/* Municipios */}
        <div className="flex items-center gap-2">
          <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
            <circle
              cx="9" cy="9" r="7"
              fill={brand.colors.forest.hex}
              stroke="white"
              strokeWidth="2.5"
            />
            <circle cx="9" cy="9" r="3" fill="white" />
          </svg>
          <span className="font-body text-xs" style={{ color: 'rgba(26,61,40,0.65)' }}>
            Municipios
          </span>
        </div>

      </div>

      {/* ── OSM attribution ── */}
      <p
        className="font-body text-[0.68rem] mt-3"
        style={{ color: 'rgba(26,61,40,0.32)' }}
      >
        Mapa base &copy;{' '}
        <a
          href="https://www.openstreetmap.org/copyright"
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-2 hover:opacity-70 transition-opacity"
          style={{ color: 'rgba(26,61,40,0.32)' }}
        >
          OpenStreetMap contributors
        </a>
      </p>
    </div>
  )
}
