import Link from 'next/link'
import { brand } from '@/lib/brand'

export default function Footer() {
  return (
    <footer className="bg-forest-deep text-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16">

          {/* ── Brand ── */}
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <span className="text-ochre text-[0.7rem]" aria-hidden="true">◈</span>
              <p className="font-display text-lg font-semibold">{brand.site.name}</p>
            </div>
            <p className="font-display italic text-xs text-forest-mist mb-5 leading-relaxed">
              &ldquo;{brand.site.tagline}&rdquo;
            </p>
            <p className="font-body text-sm text-cream/50 leading-relaxed max-w-xs">
              Un espacio digital dedicado a preservar y difundir la riqueza
              cultural de los pueblos {brand.names.kamentsá} e {brand.names.inga}{' '}
              del sur de Colombia.
            </p>
          </div>

          {/* ── Explorar ── */}
          <div>
            <h3 className="font-body text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-ochre mb-5">
              Explorar
            </h3>
            <ul className="space-y-2.5">
              {brand.sections.map(s => (
                <li key={s.route}>
                  <Link
                    href={s.route}
                    className="font-body text-sm text-cream/50 hover:text-cream transition-colors"
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Territorio ── */}
          <div>
            <h3 className="font-body text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-ochre mb-5">
              Territorio
            </h3>
            <address className="not-italic font-body text-sm text-cream/50 space-y-1.5">
              <p className="font-medium text-cream/70">{brand.names.valle}</p>
              {brand.names.municipios.map(m => (
                <p key={m}>{m}</p>
              ))}
              <p className="pt-1">Departamento del Putumayo</p>
              <p>Colombia</p>
            </address>
          </div>
        </div>

        {/* ── Bottom ── */}
        <div className="mt-14 pt-6 border-t border-white/[0.07] flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-body text-xs text-cream/20">
            &copy; {new Date().getFullYear()} {brand.site.name} — Hecho con respeto por los pueblos originarios
          </p>
          <div className="flex items-center gap-2" aria-hidden="true">
            <div className="h-px w-8" style={{ backgroundColor: 'rgba(197,151,32,0.2)' }} />
            <span className="text-ochre/30 text-[0.65rem]">◈</span>
            <div className="h-px w-8" style={{ backgroundColor: 'rgba(197,151,32,0.2)' }} />
          </div>
        </div>
      </div>
    </footer>
  )
}
