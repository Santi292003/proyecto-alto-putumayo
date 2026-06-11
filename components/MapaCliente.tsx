'use client'

/* Thin 'use client' wrapper needed because ssr:false is not allowed
   in Server Components in Next.js 16 — it must live in a Client Component. */

import dynamic from 'next/dynamic'
import { brand } from '@/lib/brand'

const sectionAccent = brand.sections.find((s) => s.id === 'mapa')!.accentColor

const MapaInteractivo = dynamic(() => import('./MapaInteractivo'), {
  ssr: false,
  loading: () => (
    <div
      style={{
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: `${sectionAccent}0A`,
        borderTop: `3px solid ${sectionAccent}`,
      }}
    >
      <div style={{ textAlign: 'center' }}>
        <span
          style={{
            display: 'block',
            fontSize: '2.5rem',
            marginBottom: '0.75rem',
            color: `${sectionAccent}40`,
          }}
          aria-hidden="true"
        >
          ◎
        </span>
        <p
          style={{
            fontFamily: 'var(--font-inter, sans-serif)',
            fontSize: '0.8rem',
            color: 'rgba(26,61,40,0.35)',
          }}
        >
          Cargando mapa…
        </p>
      </div>
    </div>
  ),
})

export default function MapaCliente() {
  return (
    <div style={{ height: 'clamp(420px, 60vh, 800px)', width: '100%' }}>
      <MapaInteractivo />
    </div>
  )
}
