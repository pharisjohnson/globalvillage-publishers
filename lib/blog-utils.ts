import fs from 'fs'
import path from 'path'

export interface BlogPost {
  slug: string
  title: string
  date: string
  category: string
  excerpt: string
  image: string
}

function extractMetadata(fileContent: string): Partial<BlogPost> {
  const match = fileContent.match(/export const metadata\s*=\s*(\{[\s\S]*?\n\})/)
  if (!match) return {}

  try {
    const obj = new Function('return ' + match[1])()
    return obj
  } catch {
    return {}
  }
}

export function getPostMetadata(filePath: string): Partial<BlogPost> {
  const fileContent = fs.readFileSync(filePath, 'utf8')
  return extractMetadata(fileContent)
}

export function getAllPosts(): BlogPost[] {
  const contentDir = path.join(process.cwd(), 'content')
  const files = fs.readdirSync(contentDir).filter(f => f.endsWith('.mdx'))

  return files.map((filename) => {
    const slug = filename.replace('.mdx', '')
    const filePath = path.join(contentDir, filename)
    const metadata = getPostMetadata(filePath)

    return {
      slug,
      title: metadata.title || slug,
      date: metadata.date || '',
      category: metadata.category || '',
      excerpt: metadata.excerpt || '',
      image: metadata.image || '',
    }
  })
}
