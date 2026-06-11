import type { Metadata } from 'next'
import { brand } from '@/lib/brand'
import GaleriaInteractiva from './GaleriaInteractiva'

export const metadata: Metadata = {
  title: 'Galería',
  description: `Fotografías y videos del ${brand.names.region}: ceremonias, paisajes y vida cotidiana de los pueblos ${brand.names.kamentsá} e ${brand.names.inga}.`,
}

const sectionAccent = brand.sections.find(s => s.id === 'galeria')!.accentColor

export default function GaleriaPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

      {/* ── Page header ── */}
      <div className="mb-12">
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

      <GaleriaInteractiva />
    </div>
  )
}
