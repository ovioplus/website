import { dirname } from 'path'
import { fileURLToPath } from 'url'
import { FlatCompat } from '@eslint/eslintrc'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({ baseDirectory: __dirname })

/**
 * Mirrors ovioplus-platform's config so both repos lint by the same rules.
 * This site had a `lint` script but no config at all, so `next lint` fell
 * through to its interactive setup wizard — which passes locally by opening a
 * prompt and fails in CI. Nothing here had ever actually been linted.
 */
const eslintConfig = [
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  {
    ignores: ['.next/**', 'node_modules/**', 'out/**', 'dist/**', 'next-env.d.ts'],
  },
]

export default eslintConfig
