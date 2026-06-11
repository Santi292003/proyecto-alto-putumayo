'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { brand } from '@/lib/brand'

const NAV_LINKS = brand.sections.map(s => ({ href: s.route, label: s.label }))

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header
      className="bg-forest-deep sticky top-0 z-50 border-b border-white/[0.07]"
      style={{ boxShadow: '0 1px 20px rgba(0,0,0,0.28)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between h-16">

          {/* ── Logo ── */}
          <Link
            href="/"
            className="flex items-center gap-2.5 group transition-opacity hover:opacity-80"
          >
            <span className="text-ochre text-[0.7rem]" aria-hidden="true">◈</span>
            <span className="font-display text-lg font-semibold tracking-wide text-cream">
              {brand.site.name}
            </span>
          </Link>

          {/* ── Desktop links ── */}
          <ul className="hidden md:flex items-center gap-9">
            {NAV_LINKS.map(({ href, label }) => {
              const active = pathname === href || pathname.startsWith(href + '/')
              return (
                <li key={href}>
                  <Link
                    href={href}
                    className={`font-body text-[0.7rem] font-semibold tracking-[0.18em] uppercase pb-0.5 border-b transition-all duration-200 ${
                      active
                        ? 'text-ochre border-ochre/50'
                        : 'text-forest-mist border-transparent hover:text-cream hover:border-cream/20'
                    }`}
                  >
                    {label}
                  </Link>
                </li>
              )
            })}
          </ul>

          {/* ── Mobile burger ── */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden flex flex-col justify-center gap-[5px] w-8 h-8 focus:outline-none focus-visible:ring-2 focus-visible:ring-ochre rounded"
            aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={open}
          >
            <span className={`block w-5 h-px bg-cream origin-center transition-all duration-200 ${open ? 'rotate-45 translate-y-[7px]' : ''}`} />
            <span className={`block w-5 h-px bg-cream transition-opacity duration-200 ${open ? 'opacity-0' : ''}`} />
            <span className={`block w-5 h-px bg-cream origin-center transition-all duration-200 ${open ? '-rotate-45 -translate-y-[7px]' : ''}`} />
          </button>
        </nav>
      </div>

      {/* ── Mobile dropdown ── */}
      {open && (
        <div className="md:hidden border-t border-white/[0.07]">
          <ul className="max-w-7xl mx-auto px-6 py-6 flex flex-col gap-5">
            {NAV_LINKS.map(({ href, label }) => {
              const active = pathname === href || pathname.startsWith(href + '/')
              return (
                <li key={href}>
                  <Link
                    href={href}
                    onClick={() => setOpen(false)}
                    className={`flex items-center gap-3 font-body text-[0.7rem] font-semibold tracking-[0.2em] uppercase transition-colors py-1 ${
                      active ? 'text-ochre' : 'text-forest-mist hover:text-cream'
                    }`}
                  >
                    {active && (
                      <span className="w-1 h-1 rounded-full bg-ochre flex-shrink-0" aria-hidden="true" />
                    )}
                    {label}
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      )}
    </header>
  )
}
