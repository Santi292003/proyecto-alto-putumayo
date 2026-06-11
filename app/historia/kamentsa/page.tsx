import type { Metadata } from 'next'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { getMdxFile } from '@/lib/mdx'
import MdxLayout from '@/components/MdxLayout'
import { brand } from '@/lib/brand'

const SEGMENTS = ['historia', 'kamentsa']

export async function generateMetadata(): Promise<Metadata> {
  const { frontmatter } = getMdxFile(SEGMENTS)
  return {
    title:       frontmatter.title,
    description: frontmatter.description,
  }
}

export default function KamentsaPage() {
  const { frontmatter, content } = getMdxFile(SEGMENTS)
  const accentColor = (frontmatter.accentColor as string) ?? brand.colors.coral.hex

  return (
    <MdxLayout
      title={frontmatter.title}
      description={frontmatter.description}
      accentColor={accentColor}
      eyebrow="Pueblo Originario"
      breadcrumbs={[
        { href: '/historia', label: 'Historia' },
        { href: '/historia/kamentsa', label: brand.names.kamentsá },
      ]}
    >
      <MDXRemote source={content} />
    </MdxLayout>
  )
}
