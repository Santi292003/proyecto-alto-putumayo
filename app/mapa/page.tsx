import type { Metadata } from 'next'
import { brand } from '@/lib/brand'

export const metadata: Metadata = { title: 'Mapa Interactivo' }

const sectionAccent = brand.sections.find(s => s.id === 'mapa')!.accentColor

export default function MapaPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

      {/* ── Page header ── */}
      <div className="mb-12">
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
          Explora el territorio ancestral: comunidades, sitios sagrados, rutas
          de la naturaleza y puntos de interés cultural.
        </p>
      </div>

      {/* ── Map placeholder ── */}
      <div
        className="w-full border border-t-[3px] flex items-center justify-center"
        style={{
          height: '520px',
          backgroundColor: `${sectionAccent}0D`,
          borderColor: `${sectionAccent}25`,
          borderTopColor: sectionAccent,
        }}
      >
        <div className="text-center px-4">
          <span
            className="block text-4xl mb-4"
            style={{ color: `${sectionAccent}50` }}
            aria-hidden="true"
          >
            ◎
          </span>
          <p className="font-display text-lg font-medium mb-2" style={{ color: `${sectionAccent}80` }}>
            Mapa Interactivo
          </p>
          <p className="font-body text-sm" style={{ color: 'rgba(26,61,40,0.40)' }}>
            Leaflet — próximamente
          </p>
        </div>
      </div>

      <p className="font-body text-xs mt-5 leading-relaxed" style={{ color: 'rgba(26,61,40,0.35)' }}>
        El mapa mostrará las comunidades {brand.names.kamentsá} e {brand.names.inga}, resguardos,
        senderos y sitios de valor cultural en el {brand.names.valle} y
        el corredor del río Putumayo.
      </p>
    </div>
  )
}
