/* eslint-disable no-undef */
import { build } from 'esbuild'

try {
  const { errors, warnings } = await build({
    entryPoints: ['src/extension.ts'],
    bundle: true,
    minify: process.argv[2] === '--minify',
    platform: 'node',
    outdir: 'out/',
    external: ['vscode', 'markdoc-ls'],
    format: 'cjs',
    color: true,
    sourcemap: false,
  })
  if (warnings.length) {
    console.warn(...warnings)
  }
  if (errors.length) {
    console.error(...errors)
  }
} catch (error) {
  console.error(error)
  process.exit(1)
}
