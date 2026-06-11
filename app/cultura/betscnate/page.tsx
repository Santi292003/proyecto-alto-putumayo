import type { Metadata } from 'next'
import Link from 'next/link'
import { brand } from '@/lib/brand'

export const metadata: Metadata = { title: `${brand.names.betscnate} — Carnaval del Perdón` }

const accent = brand.colors.purpleCeremony.hex

export default function BetscnatePage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

      {/* Breadcrumb */}
      <nav className="font-body text-xs mb-10 flex items-center gap-2" style={{ color: 'rgba(26,61,40,0.40)' }}>
        <Link href="/" className="hover:text-forest-deep/70 transition-colors">Inicio</Link>
        <span aria-hidden="true">/</span>
        <Link href="/cultura" className="hover:text-forest-deep/70 transition-colors">Cultura</Link>
        <span aria-hidden="true">/</span>
        <span style={{ color: accent }}>{brand.names.betscnate}</span>
      </nav>

      {/* Header */}
      <div className="mb-10">
        <div className="h-0.5 w-10 mb-6" style={{ backgroundColor: accent }} />
        <p className="font-body text-[0.65rem] font-semibold tracking-[0.28em] uppercase mb-4" style={{ color: accent }}>
          Ceremonia Mayor
        </p>
        <h1 className="font-display text-4xl sm:text-5xl font-semibold text-forest-deep mb-5">
          {brand.names.betscnate}
        </h1>
        <p className="font-body text-lg leading-relaxed" style={{ color: 'rgba(26,61,40,0.65)' }}>
          El Carnaval del Perdón: una celebración de renovación, reconciliación
          y alegría que congrega a los {brand.names.kamentsá} cada año antes de la Cuaresma.
        </p>
      </div>

      {/* Divider */}
      <div className="flex items-center gap-4 mb-10" aria-hidden="true">
        <div className="h-px flex-1" style={{ backgroundColor: `${accent}25` }} />
        <span style={{ color: accent }}>◉</span>
        <div className="h-px flex-1" style={{ backgroundColor: `${accent}25` }} />
      </div>

      {/* Content */}
      <div className="space-y-5 font-body text-base leading-[1.85]" style={{ color: 'rgba(26,61,40,0.70)' }}>
        <p>
          El {brand.names.betscnate} (en camëntsá: &ldquo;día grande&rdquo;) es la celebración más
          importante del pueblo {brand.names.kamentsá}. Se realiza el lunes anterior al
          Miércoles de Ceniza y fue declarado{' '}
          <strong className="font-semibold text-forest-deep">
            Patrimonio Cultural Inmaterial de Colombia
          </strong>{' '}
          en 2015.
        </p>
        <p>
          Durante el {brand.names.betscnate}, los danzantes —especialmente el{' '}
          <em>Matachín</em>— recorren las calles de Sibundoy ataviados con
          trajes de colores vibrantes, expresando mediante la danza y la música
          la cosmovisión {brand.names.kamentsá}: el perdón de las ofensas, la gratitud por
          la vida y la comunión con la naturaleza.
        </p>
        <p className="italic text-sm" style={{ color: 'rgba(26,61,40,0.38)' }}>
          — Contenido completo disponible próximamente vía MDX —
        </p>
      </div>
    </div>
  )
}
