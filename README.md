# Stoic Wisdom Series — Landing

[![Live](https://img.shields.io/badge/Live-stoic.abvx.xyz-2ea44f)](https://stoic.abvx.xyz)
![Next.js](https://img.shields.io/badge/Next.js-App%20Router-black)
![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue)
[![License: MIT](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)

## Live
https://stoic.abvx.xyz

Bilingual landing page (**English / toki pona**) for the *Stoic Wisdom Series*: classic Stoic texts reimagined in **toki pona**, with **sitelen pona** alongside Latin script.

Current catalog on the landing:
- **Meditations of Marcus Aurelius — in Toki Pona** (Kindle + paperback)
- **The Toki Pona Reader’s Kit** (free PDF)

---

## ✦ About

This project is intentionally **content-first**:
- editorial layout
- strong typography
- simple structure
- easy reuse for future book-series landings

Texts live in JSON dictionaries; book links and images are kept in a single place.

---

## 🧱 Tech Stack

- **Framework:** Next.js (App Router)
- **Language:** TypeScript
- **Styling:** CSS Modules
- **i18n:** Dictionary-based JSON (`/en` and `/tp` routes)
- **Hosting:** Vercel

---

## 📁 Project Structure

```
src/
├── app/
│   └── [lang]/           # Localized routes (/en, /tp)
│       ├── page.tsx      # Main landing
│       ├── legal/
│       └── privacy/
├── components/
│   ├── Hero.tsx          # Book stack hero
│   ├── WhySection.tsx    # Why-this-series section
│   ├── BookSection.tsx   # Book blocks with CTAs
│   └── Footer.tsx
├── data/
│   └── books.ts          # Book metadata & links
└── dictionaries/
    ├── en.json
    └── tp.json

public/
└── assets/books/
    ├── marcus-meditations/
    └── readers-kit/
```

---

## ✍️ Content Editing

### Dictionaries
All visible text lives in:
- `src/dictionaries/en.json`
- `src/dictionaries/tp.json`

### Books
Book entries and outgoing links:
- `src/data/books.ts`

Images:
- `public/assets/books/{book-id}/`

---

## 🚀 Development

```bash
npm install
npm run dev
npm run build
```

---

## © License

© 2026 ABVX.xyz. All rights reserved.
