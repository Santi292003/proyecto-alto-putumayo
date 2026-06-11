import Link from 'next/link'
import { brand } from '@/lib/brand'

export default function NotFound() {
  return (
    <div
      className="relative flex items-center justify-center overflow-hidden"
      style={{
        backgroundColor: brand.ui.hero.background,
        minHeight: 'calc(100dvh - 4rem)',
      }}
    >
      {/* Radial glow — mismo backdrop que el hero */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 75% 65% at 50% 45%, rgba(29,107,58,0.20) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 text-center px-6 max-w-md mx-auto">

        {/* Símbolo decorativo ◈ */}
        <div
          className="font-display leading-none mb-5 select-none"
          style={{ fontSize: '5.5rem', color: brand.colors.ochre.hex }}
          aria-hidden="true"
        >
          ◈
        </div>

        {/* Etiqueta 404 */}
        <p
          className="font-body text-[0.62rem] font-semibold tracking-[0.38em] uppercase mb-5"
          style={{ color: brand.colors.ochre.hex }}
        >
          404
        </p>

        {/* Título */}
        <h1
          className="font-display text-3xl sm:text-4xl font-semibold leading-tight mb-6"
          style={{ color: brand.colors.cream.hex }}
        >
          Página no encontrada
        </h1>

        {/* Subtítulo con personalidad del sitio */}
        <p
          className="font-body text-base leading-relaxed mb-10"
          style={{ color: brand.ui.hero.textSecondary }}
        >
          Como la niebla del {brand.names.valle},
          esta página se ha disuelto entre los Andes.
          Hay otros caminos.
        </p>

        {/* CTAs — mismo estilo que el hero */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2.5 font-body text-xs font-semibold tracking-[0.18em] uppercase px-9 py-4 transition-opacity hover:opacity-90 w-full sm:w-auto"
            style={{
              backgroundColor: brand.ui.hero.ctaPrimary.bg,
              color:           brand.ui.hero.ctaPrimary.text,
            }}
          >
            Volver al inicio
            <span aria-hidden="true">→</span>
          </Link>
          <Link
            href="/mapa"
            className="inline-flex items-center justify-center gap-2.5 font-body text-xs font-semibold tracking-[0.18em] uppercase px-9 py-4 border transition-colors hover:text-cream hover:border-forest-mist/40 w-full sm:w-auto"
            style={{
              borderColor: brand.ui.hero.ctaSecondary.border,
              color:       brand.ui.hero.ctaSecondary.text,
            }}
          >
            Ver el mapa
            <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </div>
    </div>
  )
}
