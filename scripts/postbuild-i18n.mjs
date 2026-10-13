// Post-build i18n fixups for the static export.
//
// English lives at the root and Spanish under out/es/. Next renders a single
// root <html lang="en"> into every file, so here we rewrite the lang attribute
// (and og:locale) to Spanish for every HTML file under out/es/. This keeps the
// lang correct at the HTML level (SSR-correct for crawlers) without needing a
// [lang] route restructure that would change the English URLs.

import { readdir, readFile, writeFile } from 'node:fs/promises'
import { join } from 'node:path'

const ES_DIR = join(process.cwd(), 'out', 'es')

async function walk(dir) {
  let entries
  try {
    entries = await readdir(dir, { withFileTypes: true })
  } catch {
    return [] // out/es may not exist yet if no ES pages were built
  }
  const files = []
  for (const e of entries) {
    const p = join(dir, e.name)
    if (e.isDirectory()) files.push(...(await walk(p)))
    else if (e.name.endsWith('.html')) files.push(p)
  }
  return files
}

const files = await walk(ES_DIR)
let changed = 0

for (const file of files) {
  let html = await readFile(file, 'utf8')
  const before = html
  // <html lang="en"> → es (only the root html tag)
  html = html.replace(/<html([^>]*?)\slang="en"/i, '<html$1 lang="es"')
  // og:locale if present
  html = html.replace(
    /(<meta[^>]*property="og:locale"[^>]*content=")en_US(")/i,
    '$1es_US$2'
  )
  if (html !== before) {
    await writeFile(file, html, 'utf8')
    changed++
  }
}

console.log(`postbuild-i18n: set lang="es" on ${changed}/${files.length} file(s) under out/es/`)
