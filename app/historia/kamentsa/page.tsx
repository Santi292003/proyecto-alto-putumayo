import type { Metadata } from 'next'
import Link from 'next/link'
import { brand } from '@/lib/brand'

export const metadata: Metadata = { title: `Pueblo ${brand.names.kamentsá}` }

const accent = brand.colors.coral.hex

export default function KamentsaPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

      {/* Breadcrumb */}
      <nav className="font-body text-xs mb-10 flex items-center gap-2" style={{ color: 'rgba(26,61,40,0.40)' }}>
        <Link href="/" className="hover:text-forest-deep/70 transition-colors">Inicio</Link>
        <span aria-hidden="true">/</span>
        <Link href="/historia" className="hover:text-forest-deep/70 transition-colors">Historia</Link>
        <span aria-hidden="true">/</span>
        <span style={{ color: accent }}>{brand.names.kamentsá}</span>
      </nav>

      {/* Header */}
      <div className="mb-10">
        <div className="h-0.5 w-10 mb-6" style={{ backgroundColor: accent }} />
        <p className="font-body text-[0.65rem] font-semibold tracking-[0.28em] uppercase mb-4" style={{ color: accent }}>
          Pueblo Originario
        </p>
        <h1 className="font-display text-4xl sm:text-5xl font-semibold text-forest-deep mb-5">
          Pueblo {brand.names.kamentsá}
        </h1>
        <p className="font-body text-lg leading-relaxed" style={{ color: 'rgba(26,61,40,0.65)' }}>
          Los {brand.names.kamentsá} —<em>Camëntsá Biyá</em>, &ldquo;Gente de aquí de siempre&rdquo;—
          son los guardianes del {brand.names.valle} y de una de las lenguas más
          singulares de Colombia.
        </p>
      </div>

      {/* Divider */}
      <div className="flex items-center gap-4 mb-10" aria-hidden="true">
        <div className="h-px flex-1" style={{ backgroundColor: `${accent}25` }} />
        <span style={{ color: accent }}>◈</span>
        <div className="h-px flex-1" style={{ backgroundColor: `${accent}25` }} />
      </div>

      {/* Content */}
      <div className="space-y-5 font-body text-base leading-[1.85]" style={{ color: 'rgba(26,61,40,0.70)' }}>
        <p>
          El pueblo {brand.names.kamentsá} habita el {brand.names.valle} en el departamento del
          Putumayo. Su lengua, el camëntsá, es un aislado lingüístico —no
          pertenece a ninguna familia de lenguas conocida— y constituye una de
          las joyas del patrimonio lingüístico de América.
        </p>
        <p>
          Su cosmología está íntimamente ligada al río Putumayo, la selva y los
          ciclos ceremoniales, especialmente el{' '}
          <strong className="font-semibold text-forest-deep">{brand.names.betscnate}</strong>{' '}
          (Carnaval del Perdón), celebrado el lunes anterior al Miércoles de
          Ceniza, y declarado Patrimonio Cultural Inmaterial de Colombia.
        </p>
        <p className="italic text-sm" style={{ color: 'rgba(26,61,40,0.38)' }}>
          — Contenido completo disponible próximamente vía MDX —
        </p>
      </div>
    </div>
  )
}
