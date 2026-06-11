import type { Metadata } from 'next'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { getMdxFile } from '@/lib/mdx'
import MdxLayout from '@/components/MdxLayout'
import { brand } from '@/lib/brand'

const SEGMENTS = ['historia', 'inga']

export async function generateMetadata(): Promise<Metadata> {
  const { frontmatter } = getMdxFile(SEGMENTS)
  return {
    title:       frontmatter.title,
    description: frontmatter.description,
  }
}

export default function IngaPage() {
  const { frontmatter, content } = getMdxFile(SEGMENTS)
  const accentColor = (frontmatter.accentColor as string) ?? brand.colors.riverBlue.hex

  return (
    <MdxLayout
      title={frontmatter.title}
      description={frontmatter.description}
      accentColor={accentColor}
      eyebrow="Pueblo Originario"
      breadcrumbs={[
        { href: '/historia', label: 'Historia' },
        { href: '/historia/inga', label: brand.names.inga },
      ]}
    >
      <MDXRemote source={content} />
    </MdxLayout>
  )
}
