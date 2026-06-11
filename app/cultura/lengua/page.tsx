import type { Metadata } from 'next'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { getMdxFile } from '@/lib/mdx'
import MdxLayout from '@/components/MdxLayout'
import { brand } from '@/lib/brand'

const SEGMENTS = ['cultura', 'lengua']

export async function generateMetadata(): Promise<Metadata> {
  const { frontmatter } = getMdxFile(SEGMENTS)
  return {
    title:       frontmatter.title,
    description: frontmatter.description,
  }
}

export default function LenguaPage() {
  const { frontmatter, content } = getMdxFile(SEGMENTS)
  const accentColor = (frontmatter.accentColor as string) ?? brand.colors.ochre.hex

  return (
    <MdxLayout
      title={frontmatter.title}
      description={frontmatter.description}
      accentColor={accentColor}
      eyebrow="Patrimonio Lingüístico"
      breadcrumbs={[
        { href: '/cultura', label: 'Cultura' },
        { href: '/cultura/lengua', label: 'Lenguas' },
      ]}
    >
      <MDXRemote source={content} />
    </MdxLayout>
  )
}
