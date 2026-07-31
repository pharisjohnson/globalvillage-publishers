#!/usr/bin/env node
/**
 * Blog draft manager for Global Village Publishers.
 *
 * Modes:
 *   node scripts/publish-drafts.mjs [count] [--dry-run]
 *     Publishes the next `count` draft posts (default 1): removes the
 *     `draft: true` flag and re-stamps the date to today (UTC). Drafts are
 *     published in ascending date order (earliest scheduled date first).
 *     Used by the GitHub Actions schedule (Mon + Thu) and can be run
 *     manually to catch up.
 *
 *   node scripts/publish-drafts.mjs --mark-drafts <slug1,slug2,...>
 *     Marks every post EXCEPT the given slugs as draft. One-time setup.
 *
 *   node scripts/publish-drafts.mjs --list
 *     Prints all posts with draft status and date, newest first.
 *
 * The script never publishes more than `count` posts per run and exits
 * cleanly when no drafts remain, so the CI workflow stays green.
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const contentDir = path.join(__dirname, '..', 'content')

const args = process.argv.slice(2)
const dryRun = args.includes('--dry-run')

const METADATA_RE = /export const metadata = \{([\s\S]*?)\n\}/
const DRAFT_LINE_RE = /^\s*draft\s*:\s*true\s*,?\s*$/m

function readPost(file) {
  const raw = fs.readFileSync(file, 'utf8')
  const m = raw.match(METADATA_RE)
  if (!m) return null
  const block = m[1]
  return {
    file,
    raw,
    block,
    slug: path.basename(file, '.mdx'),
    draft: DRAFT_LINE_RE.test(block),
    date: (block.match(/^\s*date\s*:\s*"([^"]+)"/m) || [])[1] || '',
  }
}

function allPosts() {
  return fs
    .readdirSync(contentDir)
    .filter((f) => f.endsWith('.mdx'))
    .map((f) => readPost(path.join(contentDir, f)))
    .filter(Boolean)
}

function writePost(post, block) {
  const next = post.raw.replace(METADATA_RE, 'export const metadata = {' + block + '\n}')
  if (!dryRun) fs.writeFileSync(post.file, next)
}

// ---- mode: list ----
if (args.includes('--list')) {
  const posts = allPosts().sort((a, b) => (a.date || '').localeCompare(b.date || ''))
  for (const p of posts) {
    console.log(`${p.draft ? 'DRAFT   ' : 'LIVE    '} ${p.date || '????-??-??'}  ${p.slug}`)
  }
  const live = posts.filter((p) => !p.draft).length
  console.log(`\n${live} live, ${posts.length - live} drafts`)
  process.exit(0)
}

// ---- mode: mark drafts (one-time setup) ----
const markIdx = args.indexOf('--mark-drafts')
if (markIdx !== -1) {
  const keep = (args[markIdx + 1] || '')
    .split(',')
    .map((s) => s.trim())
    .filter(Boolean)
  let marked = 0
  for (const post of allPosts()) {
    if (keep.includes(post.slug)) continue
    if (post.draft) continue
    const block = post.block.replace(/(\S)(\s*)$/, '$1,\n  draft: true')
    writePost(post, block)
    console.log(`MARKED DRAFT: ${post.slug}`)
    marked++
  }
  console.log(`SUMMARY: ${marked} posts marked as draft`)
  process.exit(0)
}

// ---- mode: publish next N drafts ----
const count = parseInt(args.find((a) => /^\d+$/.test(a)) || '1', 10)

const drafts = allPosts()
  .filter((p) => p.draft)
  .sort((a, b) => (a.date || '').localeCompare(b.date || '') || a.slug.localeCompare(b.slug))

if (drafts.length === 0) {
  console.log('NO_DRAFTS: nothing to publish')
  process.exit(0)
}

const toPublish = drafts.slice(0, Math.min(count, drafts.length))
const today = new Date().toISOString().slice(0, 10)

for (const post of toPublish) {
  let block = post.block.replace(DRAFT_LINE_RE, '') // drop draft flag
  block = block.replace(/^(\s*date\s*:\s*")[^"]*(")/m, `$1${today}$2`) // re-stamp date
  writePost(post, block)
  console.log(`PUBLISH: ${post.slug} (new date ${today})`)
}

console.log(`SUMMARY: ${toPublish.length} published, ${drafts.length - toPublish.length} drafts remaining`)
