import type { Metadata } from 'next'
import Link from 'next/link'
import { brand } from '@/lib/brand'

export const metadata: Metadata = { title: 'Lenguas del Alto Putumayo' }

const accent = brand.colors.ochre.hex

export default function LenguaPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

      {/* Breadcrumb */}
      <nav className="font-body text-xs mb-10 flex items-center gap-2" style={{ color: 'rgba(26,61,40,0.40)' }}>
        <Link href="/" className="hover:text-forest-deep/70 transition-colors">Inicio</Link>
        <span aria-hidden="true">/</span>
        <Link href="/cultura" className="hover:text-forest-deep/70 transition-colors">Cultura</Link>
        <span aria-hidden="true">/</span>
        <span style={{ color: accent }}>Lenguas</span>
      </nav>

      {/* Header */}
      <div className="mb-10">
        <div className="h-0.5 w-10 mb-6" style={{ backgroundColor: accent }} />
        <p className="font-body text-[0.65rem] font-semibold tracking-[0.28em] uppercase mb-4" style={{ color: accent }}>
          Patrimonio Lingüístico
        </p>
        <h1 className="font-display text-4xl sm:text-5xl font-semibold text-forest-deep mb-5">
          Lenguas del {brand.names.region}
        </h1>
        <p className="font-body text-lg leading-relaxed" style={{ color: 'rgba(26,61,40,0.65)' }}>
          Dos lenguas únicas —el camëntsá y el inga— son el alma de las
          comunidades del {brand.names.valle}.
        </p>
      </div>

      {/* Divider */}
      <div className="flex items-center gap-4 mb-10" aria-hidden="true">
        <div className="h-px flex-1" style={{ backgroundColor: `${accent}25` }} />
        <span style={{ color: accent }}>◫</span>
        <div className="h-px flex-1" style={{ backgroundColor: `${accent}25` }} />
      </div>

      {/* Language cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
        <div
          className="shadow-card border border-t-[3px] border-forest-deep/[0.07] p-6"
          style={{
            borderTopColor: brand.colors.coral.hex,
            backgroundColor: brand.colors.cream.hex,
          }}
        >
          <h2
            className="font-display text-xl font-semibold mb-3"
            style={{ color: brand.colors.coral.hex }}
          >
            Camëntsá
          </h2>
          <p className="font-body text-sm leading-relaxed" style={{ color: 'rgba(26,61,40,0.65)' }}>
            Aislado lingüístico sin parentesco conocido. Hablado por la
            comunidad {brand.names.kamentsá} del {brand.names.valle}. Declarado en riesgo de
            extinción, con revitalización activa.
          </p>
        </div>
        <div
          className="shadow-card border border-t-[3px] border-forest-deep/[0.07] p-6"
          style={{
            borderTopColor: brand.colors.riverBlue.hex,
            backgroundColor: brand.colors.cream.hex,
          }}
        >
          <h2
            className="font-display text-xl font-semibold mb-3"
            style={{ color: brand.colors.riverBlue.hex }}
          >
            Inga
          </h2>
          <p className="font-body text-sm leading-relaxed" style={{ color: 'rgba(26,61,40,0.65)' }}>
            Variedad del quechua sureño. Hablada por miles de personas en el
            Putumayo y otras regiones. Lengua de comercio y de saberes
            medicinales ancestrales.
          </p>
        </div>
      </div>

      <p className="font-body text-sm italic" style={{ color: 'rgba(26,61,40,0.38)' }}>
        — Contenido completo con vocabulario, frases y recursos disponible
        próximamente vía MDX —
      </p>
    </div>
  )
}
