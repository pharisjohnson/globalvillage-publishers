#!/usr/bin/env node
/**
 * Apply new image URLs to blog post metadata.
 * Usage: node apply-images.mjs < slug:url pairs as JSON file or inline JSON>
 *   node apply-images.mjs '{"slug":"https://...","slug2":"https://..."}'
 * Only updates the image line inside the metadata block. Verifies the new URL
 * returns 200 from images.unsplash.com before writing.
 */
import fs from 'node:fs'
import path from 'node:path'
import https from 'node:https'

const contentDir = path.join(process.cwd(), 'content')
const map = JSON.parse(process.argv[2] || '{}')

function httpOk(url) {
  return new Promise((resolve) => {
    const req = https.get(url, (res) => {
      res.resume()
      resolve(res.statusCode === 200)
    })
    req.on('error', () => resolve(false))
    req.setTimeout(15000, () => { req.destroy(); resolve(false) })
  })
}

const METADATA_RE = /export const metadata = \{([\s\S]*?)\n\}/

async function main() {
  let updated = 0
  for (const [slug, newUrl] of Object.entries(map)) {
    const file = path.join(contentDir, `${slug}.mdx`)
    if (!fs.existsSync(file)) { console.log(`SKIP ${slug}: file missing`); continue }
    const raw = fs.readFileSync(file, 'utf8')
    const m = raw.match(METADATA_RE)
    if (!m) { console.log(`SKIP ${slug}: no metadata`); continue }
    const ok = await httpOk(newUrl)
    if (!ok) { console.log(`SKIP ${slug}: new URL returns non-200`); continue }
    const block = m[1].replace(/^(\s*image\s*:\s*")[^"]*(")/m, `$1${newUrl}$2`)
    fs.writeFileSync(file, raw.replace(METADATA_RE, 'export const metadata = {' + block + '\n}'))
    console.log(`UPDATED ${slug}`)
    updated++
  }
  console.log(`SUMMARY: ${updated}/${Object.keys(map).length} updated`)
}

main()
