'use client'

import { useEffect, useMemo } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import { brand } from '@/lib/brand'

/* ── Marker data ──────────────────────────────────────────── */
type MarkerInfo = {
  name: string
  position: [number, number]
  description?: string
  link?: string
}

const MUNICIPIOS: MarkerInfo[] = [
  {
    name: 'Sibundoy',
    position: [1.203405, -76.917632],
    description: `Capital del ${brand.names.valle}, centro ceremonial ${brand.names.kamentsá} e ${brand.names.inga}.`,
    link: '/historia',
  },
  {
    name: 'San Pedro',
    position: [1.211307, -76.942678],
    description: `Municipio del ${brand.names.valle} con tradiciones ${brand.names.kamentsá}.`,
    link: '/historia',
  },
  {
    name: 'Colón',
    position: [1.189065, -76.975013],
    description: 'Reconocido por sus tradiciones culturales y paisajes de niebla.',
    link: '/cultura',
  },
  {
    name: 'Santiago',
    position: [1.146426, -77.004481],
    description: `Municipio con fuerte presencia de la comunidad ${brand.names.inga}.`,
    link: '/historia/inga',
  },
  {
    name: 'San Francisco',
    position: [1.175280, -76.879496],
    description: `En el corredor andino-amazónico del ${brand.names.region}.`,
    link: '/historia',
  },
]

/* ── Icon factory ─────────────────────────────────────────── */
function makeSvgIcon(color: string, size: number): L.DivIcon {
  const cx = size / 2
  const ro = cx - 2           // outer circle radius
  const ri = Math.round(size / 6) // inner white dot radius
  return L.divIcon({
    html: `<svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="${cx}" cy="${cx}" r="${ro}" fill="${color}" stroke="white" stroke-width="2.5"/>
      <circle cx="${cx}" cy="${cx}" r="${ri}" fill="white"/>
    </svg>`,
    className: '',
    iconSize:    [size, size],
    iconAnchor:  [cx, cx],
    popupAnchor: [0, -(cx + 6)],
  })
}

/* ── Popup content styles ─────────────────────────────────── */
const css = {
  title: {
    fontFamily: 'var(--font-playfair, serif)',
    fontSize: '0.95rem',
    fontWeight: 600,
    color: '#1A3D28',
    margin: '0 0 6px',
  } as React.CSSProperties,
  desc: {
    fontFamily: 'var(--font-inter, sans-serif)',
    fontSize: '0.72rem',
    color: 'rgba(26,61,40,0.62)',
    lineHeight: 1.55,
    margin: '0 0 10px',
  } as React.CSSProperties,
  link: {
    fontFamily: 'var(--font-inter, sans-serif)',
    fontSize: '0.62rem',
    fontWeight: 600,
    letterSpacing: '0.12em',
    textTransform: 'uppercase' as const,
    color: brand.colors.forest.hex,
    textDecoration: 'none',
  } as React.CSSProperties,
}

/* ── Component ────────────────────────────────────────────── */
export default function MapaInteractivo() {
  /* Fix the classic Next.js/Leaflet broken-icon webpack issue */
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    delete (L.Icon.Default.prototype as any)._getIconUrl
  }, [])

  /* Stable icon instance */
  const municipioIcon = useMemo(() => makeSvgIcon(brand.colors.forest.hex, 24), [])

  return (
    <MapContainer
      center={[1.185, -76.944]}
      zoom={12}
      style={{ height: '100%', width: '100%' }}
      className="z-0"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener noreferrer">OpenStreetMap</a> contributors'
        url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {/* Municipios — forest green markers */}
      {MUNICIPIOS.map((m) => (
        <Marker key={m.name} position={m.position} icon={municipioIcon}>
          <Popup minWidth={195}>
            <div style={{ padding: '2px 0' }}>
              <p style={css.title}>{m.name}</p>
              {m.description && <p style={css.desc}>{m.description}</p>}
              {m.link && (
                <a href={m.link} style={css.link}>
                  Ver más →
                </a>
              )}
            </div>
          </Popup>
        </Marker>
      ))}

    </MapContainer>
  )
}
