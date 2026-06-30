# OvioPlus Website

The marketing site for [OvioPlus](https://ovioplus.ai) — an AI receptionist for restaurants.

## Stack

- **Next.js 15** (App Router) + **TypeScript**
- **Tailwind CSS** with custom brand tokens
- **Framer Motion** for animations
- **Lucide React** for icons
- Cormorant Garamond + Outfit + JetBrains Mono via `next/font`

## Architecture

```
app/                  # Next.js App Router
  layout.tsx          # Root layout, fonts, metadata
  page.tsx            # Home composition
  globals.css         # Tailwind + design tokens

components/
  ui/                 # Generic primitives (Logo, Reveal, GradientOrb)
  sections/           # Page sections (Hero, Pricing, FAQ, …)

lib/
  constants.ts        # All copy + product data
  utils.ts            # cn() helper

public/               # Static assets
```

## Brand tokens

| Purpose          | Value      |
| ---------------- | ---------- |
| Primary purple   | `#6833A9`  |
| Primary cyan     | `#2CABE6`  |
| Hospitality amber| `#FFA042`  |
| Background       | `#0A0820`  |
| Surface          | `#14102E`  |
| Surface 2        | `#1F1944`  |
| Text primary     | `#F5F3FF`  |
| Text secondary   | `#A8A4C9`  |

All defined in `tailwind.config.ts` under `theme.extend.colors.brand`.

## Local development

```bash
npm install
npm run dev
```

Then open <http://localhost:3000>.

## Production build

```bash
npm run build
npm start
```

## Editing copy

All copy lives in `lib/constants.ts`. Update there, no need to touch components.

## Adding sections

1. Create `components/sections/MySection.tsx`
2. Use `<Reveal>` for entrance animations and `glass` / `glass-strong` for cards
3. Import in `app/page.tsx`

## Deploying to Vercel

The repo is connected to Vercel via the GitHub App on the `ovioplus` org.
Pushes to `main` deploy automatically.
