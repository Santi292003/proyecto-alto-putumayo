import type { ReactNode } from 'react'
import Link from 'next/link'

export interface Breadcrumb {
  href:  string
  label: string
}

interface Props {
  title:        string
  description?: string
  accentColor:  string
  eyebrow?:     string
  breadcrumbs?: Breadcrumb[]
  children:     ReactNode
}

/**
 * Wrapper visual para páginas de contenido MDX.
 * Renders: breadcrumb → page header → ornamental divider → prose children.
 */
export default function MdxLayout({
  title,
  description,
  accentColor,
  eyebrow,
  breadcrumbs,
  children,
}: Props) {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

      {/* ── Breadcrumb ── */}
      {breadcrumbs && breadcrumbs.length > 0 && (
        <nav
          className="font-body text-xs mb-10 flex items-center gap-2 flex-wrap"
          aria-label="Ruta de navegación"
          style={{ color: 'rgba(26,61,40,0.40)' }}
        >
          <Link href="/" className="hover:text-forest-deep/70 transition-colors">
            Inicio
          </Link>
          {breadcrumbs.map((crumb, i) => (
            <span key={crumb.href} className="flex items-center gap-2">
              <span aria-hidden="true">/</span>
              {i === breadcrumbs.length - 1 ? (
                <span style={{ color: accentColor }}>{crumb.label}</span>
              ) : (
                <Link href={crumb.href} className="hover:text-forest-deep/70 transition-colors">
                  {crumb.label}
                </Link>
              )}
            </span>
          ))}
        </nav>
      )}

      {/* ── Page header ── */}
      <header className="mb-10">
        <div className="h-0.5 w-10 mb-6" style={{ backgroundColor: accentColor }} />

        {eyebrow && (
          <p
            className="font-body text-[0.65rem] font-semibold tracking-[0.28em] uppercase mb-4"
            style={{ color: accentColor }}
          >
            {eyebrow}
          </p>
        )}

        <h1 className="font-display text-4xl sm:text-5xl font-semibold text-forest-deep mb-5 leading-tight">
          {title}
        </h1>

        {description && (
          <p className="font-body text-lg leading-relaxed" style={{ color: 'rgba(26,61,40,0.65)' }}>
            {description}
          </p>
        )}
      </header>

      {/* ── Ornamental divider ── */}
      <div className="flex items-center gap-4 mb-12" aria-hidden="true">
        <div className="h-px flex-1" style={{ backgroundColor: `${accentColor}28` }} />
        <span style={{ color: accentColor }}>◈</span>
        <div className="h-px flex-1" style={{ backgroundColor: `${accentColor}28` }} />
      </div>

      {/* ── MDX prose content ── */}
      <div className="mdx-prose">
        {children}
      </div>
    </div>
  )
}
