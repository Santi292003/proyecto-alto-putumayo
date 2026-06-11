import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const CONTENT_DIR = path.join(process.cwd(), 'content')

export type Frontmatter = {
  title:       string
  description?: string
  date?:        string
  author?:      string
  tags?:        string[]
  [key: string]: unknown
}

export type MdxFile = {
  frontmatter: Frontmatter
  content:     string
  slug:        string
}

/** Read a single MDX file by path segments relative to /content */
export function getMdxFile(segments: string[]): MdxFile {
  const filePath = path.join(CONTENT_DIR, ...segments) + '.mdx'
  const raw = fs.readFileSync(filePath, 'utf-8')
  const { data, content } = matter(raw)
  const slug = segments.join('/')
  return { frontmatter: data as Frontmatter, content, slug }
}

/** List all MDX files inside a sub-directory of /content */
export function listMdxFiles(dir: string): MdxFile[] {
  const dirPath = path.join(CONTENT_DIR, dir)
  if (!fs.existsSync(dirPath)) return []
  const files = fs.readdirSync(dirPath).filter((f) => f.endsWith('.mdx'))
  return files.map((file) => {
    const slug = file.replace(/\.mdx$/, '')
    return getMdxFile([dir, slug])
  })
}
