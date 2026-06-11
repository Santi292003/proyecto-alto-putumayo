import type { Metadata } from 'next'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { getMdxFile } from '@/lib/mdx'
import MdxLayout from '@/components/MdxLayout'
import { brand } from '@/lib/brand'

const SEGMENTS = ['cultura', 'betscnate']

export async function generateMetadata(): Promise<Metadata> {
  const { frontmatter } = getMdxFile(SEGMENTS)
  return {
    title:       frontmatter.title,
    description: frontmatter.description,
  }
}

export default function BetscnatePage() {
  const { frontmatter, content } = getMdxFile(SEGMENTS)
  const accentColor = (frontmatter.accentColor as string) ?? brand.colors.purpleCeremony.hex

  return (
    <MdxLayout
      title={frontmatter.title}
      description={frontmatter.description}
      accentColor={accentColor}
      eyebrow="Ceremonia Mayor"
      breadcrumbs={[
        { href: '/cultura', label: 'Cultura' },
        { href: '/cultura/betscnate', label: brand.names.betscnate },
      ]}
    >
      <MDXRemote source={content} />
    </MdxLayout>
  )
}
