'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { brand } from '@/lib/brand'

/* ── Types ────────────────────────────────────────────────── */
type Category = 'Bëtscnaté' | 'Cultura' | 'Territorio' | 'Naturaleza'
type FilterKey = 'Todos' | Category | 'Videos'

type ImageItem = {
  src:      string
  title:    string
  category: Category
  accent:   string
}

type VideoItem = {
  youtubeId: string
  title:     string
}

/* ── Data ─────────────────────────────────────────────────── */
const IMAGES: ImageItem[] = [
  {
    src:      '/images/galeria/betscnate-danzantes.jpg',
    title:    `${brand.names.betscnate} — Danzantes`,
    category: 'Bëtscnaté',
    accent:   brand.colors.purpleCeremony.hex,
  },
  {
    src:      '/images/galeria/valle-sibundoy.jpg',
    title:    'Valle de Sibundoy',
    category: 'Territorio',
    accent:   brand.colors.riverBlue.hex,
  },
  {
    src:      '/images/galeria/artesanias-kamentsá.jpg',
    title:    `Artesanías ${brand.names.kamentsá}`,
    category: 'Cultura',
    accent:   brand.colors.coral.hex,
  },
  {
    src:      '/images/galeria/rio-putumayo.jpg',
    title:    'Río Putumayo al amanecer',
    category: 'Territorio',
    accent:   brand.colors.riverBlue.hex,
  },
  {
    src:      '/images/galeria/plantas.jpg',
    title:    'Flora del Alto Putumayo',
    category: 'Naturaleza',
    accent:   brand.colors.forest.hex,
  },
  {
    src:      '/images/galeria/tejido-inga.jpg',
    title:    `Tejido ${brand.names.inga}`,
    category: 'Cultura',
    accent:   brand.colors.ochre.hex,
  },
  {
    src:      '/images/galeria/laguna-cocha.jpg',
    title:    'Laguna La Cocha',
    category: 'Territorio',
    accent:   brand.colors.riverBlue.hex,
  },
  {
    src:      '/images/galeria/yachak-ceremonia.jpg',
    title:    'Yachak en ceremonia',
    category: 'Cultura',
    accent:   brand.colors.purpleCeremony.hex,
  },
]

const VIDEOS: VideoItem[] = [
  { youtubeId: 'MU3u17w21Bo', title: 'Carnaval del Perdón — Sibundoy' },
  { youtubeId: 'KjFsEYWzI0M', title: `Vistas del ${brand.names.valle}` },
  { youtubeId: 'd2jhKTcPfIM', title: `Pueblo ${brand.names.kamentsá}` },
]

const FILTERS: FilterKey[] = [
  'Todos', 'Bëtscnaté', 'Cultura', 'Territorio', 'Naturaleza', 'Videos',
]

const sectionAccent = brand.sections.find(s => s.id === 'galeria')!.accentColor

/* ── Component ────────────────────────────────────────────── */
export default function GaleriaInteractiva() {
  const [activeFilter, setActiveFilter]       = useState<FilterKey>('Todos')
  const [selectedImage, setSelectedImage]     = useState<ImageItem | null>(null)

  /* Escape key closes lightbox */
  useEffect(() => {
    if (!selectedImage) return
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setSelectedImage(null) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [selectedImage])

  /* Lock body scroll while lightbox is open */
  useEffect(() => {
    if (!selectedImage) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = prev }
  }, [selectedImage])

  const showImages = activeFilter !== 'Videos'
  const showVideos = activeFilter === 'Todos' || activeFilter === 'Videos'
  const filteredImages = showImages
    ? activeFilter === 'Todos'
      ? IMAGES
      : IMAGES.filter(img => img.category === (activeFilter as Category))
    : []

  return (
    <>
      {/* ── Filters ── */}
      <div
        className="flex flex-wrap gap-2 mb-10"
        role="group"
        aria-label="Filtrar por categoría"
      >
        {FILTERS.map(filter => {
          const isActive = filter === activeFilter
          return (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              aria-pressed={isActive}
              className="font-body text-[0.65rem] font-semibold tracking-[0.18em] uppercase px-4 py-2 border transition-colors duration-150"
              style={
                isActive
                  ? {
                      backgroundColor: brand.colors.forest.hex,
                      color:           brand.colors.cream.hex,
                      borderColor:     brand.colors.forest.hex,
                    }
                  : {
                      backgroundColor: 'transparent',
                      color:           'rgba(26,61,40,0.52)',
                      borderColor:     'rgba(26,61,40,0.16)',
                    }
              }
            >
              {filter}
            </button>
          )
        })}
      </div>

      {/* ── Image grid ── */}
      {showImages && (
        filteredImages.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredImages.map(img => (
              <button
                key={img.src}
                className="group relative aspect-[4/3] overflow-hidden border border-forest-deep/[0.06] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest"
                style={{ borderTop: `3px solid ${img.accent}` }}
                onClick={() => setSelectedImage(img)}
                aria-label={`Ver imagen: ${img.title}`}
              >
                <Image
                  src={img.src}
                  alt={img.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.05]"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
                {/* Hover overlay with title */}
                <div className="absolute inset-0 bg-forest-deep/0 group-hover:bg-forest-deep/55 transition-colors duration-300 flex items-end p-3">
                  <span className="font-body text-[0.7rem] font-semibold text-cream leading-snug text-left opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {img.title}
                  </span>
                </div>
              </button>
            ))}
          </div>
        ) : (
          <p
            className="font-body text-sm text-center py-20"
            style={{ color: 'rgba(26,61,40,0.35)' }}
          >
            No hay imágenes en esta categoría.
          </p>
        )
      )}

      {/* ── Videos ── */}
      {showVideos && (
        <section className={showImages && filteredImages.length > 0 ? 'mt-16' : ''}>
          {/* Divider only shown when both images and videos are visible */}
          {activeFilter === 'Todos' && (
            <div className="flex items-center gap-5 mb-10">
              <div className="flex-1 h-px" style={{ backgroundColor: 'rgba(26,61,40,0.08)' }} />
              <span
                className="font-body text-[0.6rem] font-semibold tracking-[0.28em] uppercase"
                style={{ color: 'rgba(26,61,40,0.35)' }}
              >
                Videos
              </span>
              <div className="flex-1 h-px" style={{ backgroundColor: 'rgba(26,61,40,0.08)' }} />
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {VIDEOS.map(v => (
              <div
                key={v.youtubeId}
                className="overflow-hidden border border-forest-deep/[0.07]"
                style={{ borderTop: `3px solid ${sectionAccent}` }}
              >
                {/* 16:9 responsive iframe container */}
                <div className="relative pb-[56.25%]">
                  <iframe
                    src={`https://www.youtube-nocookie.com/embed/${v.youtubeId}`}
                    title={v.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    loading="lazy"
                    className="absolute inset-0 w-full h-full"
                  />
                </div>
                <div className="px-4 py-3" style={{ backgroundColor: 'rgba(26,61,40,0.02)' }}>
                  <p className="font-display text-sm font-semibold text-forest-deep leading-snug">
                    {v.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ── Lightbox ── */}
      {selectedImage && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={selectedImage.title}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-10"
          style={{ backgroundColor: 'rgba(26,61,40,0.92)' }}
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative w-full max-w-4xl"
            onClick={e => e.stopPropagation()}
          >
            {/* Close */}
            <button
              className="absolute -top-9 right-0 font-body text-[0.62rem] font-semibold tracking-[0.22em] uppercase transition-opacity duration-150 opacity-60 hover:opacity-100"
              style={{ color: brand.colors.cream.hex }}
              onClick={() => setSelectedImage(null)}
              aria-label="Cerrar"
            >
              Cerrar ×
            </button>

            {/* Full image */}
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={selectedImage.src}
                alt={selectedImage.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 95vw, 80vw"
                priority
              />
              <div
                className="absolute top-0 inset-x-0 h-[3px]"
                style={{ backgroundColor: selectedImage.accent }}
              />
            </div>

            {/* Caption */}
            <p
              className="font-display text-lg sm:text-xl font-medium mt-4"
              style={{ color: brand.colors.cream.hex }}
            >
              {selectedImage.title}
            </p>
          </div>
        </div>
      )}
    </>
  )
}
