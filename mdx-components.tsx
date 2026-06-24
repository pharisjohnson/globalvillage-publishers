import type { MDXComponents } from 'mdx/types'

const components: MDXComponents = {
  h1: ({ children }) => (
    <h1 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1rem', color: '#414142' }}>{children}</h1>
  ),
  h2: ({ children }) => (
    <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '0.75rem', color: '#414142' }}>{children}</h2>
  ),
  h3: ({ children }) => (
    <h3 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '0.5rem', color: '#414142' }}>{children}</h3>
  ),
  p: ({ children }) => (
    <p style={{ fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '1.5rem', color: '#414142' }}>{children}</p>
  ),
  a: ({ children, ...props }) => (
    <a {...props} style={{ color: '#EC5C23', textDecoration: 'underline' }}>{children}</a>
  ),
  ul: ({ children }) => (
    <ul style={{ marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>{children}</ul>
  ),
  ol: ({ children }) => (
    <ol style={{ marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>{children}</ol>
  ),
  li: ({ children }) => (
    <li style={{ marginBottom: '0.5rem', lineHeight: 1.8 }}>{children}</li>
  ),
  blockquote: ({ children }) => (
    <blockquote style={{ borderLeft: '4px solid #EC5C23', paddingLeft: '1rem', marginLeft: 0, fontStyle: 'italic', color: '#666' }}>{children}</blockquote>
  ),
  img: ({ src, alt }) => (
    <img src={src} alt={alt || ''} style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px', margin: '1.5rem 0' }} />
  ),
}

export function useMDXComponents(): MDXComponents {
  return components
}
