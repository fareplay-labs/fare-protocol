# FARE Protocol Web App

Frontend application for the FARE Protocol website, built with React, TypeScript, and Vite.

This app includes public-facing pages for protocol information, whitepaper content, FAQ, swag, and developer resources.

## Tech Stack

- React 19
- TypeScript
- Vite
- React Router
- Framer Motion / Motion
- Formik + Yup
- ESLint

## Getting Started

### Prerequisites

- Node.js 20+
- pnpm (recommended)

### Install

```bash
pnpm install
```

### Run Locally

```bash
pnpm dev
```

Starts the app in development mode (Vite dev server).

## Available Scripts

- `pnpm dev` — Start development server
- `pnpm build` — Type-check and create production build
- `pnpm preview` — Preview production build locally
- `pnpm lint` — Run ESLint

## Routes

- `/` — Home
- `/whitepaper` — Whitepaper page with scroll-linked carousel content
- `/developer` — Developer page (currently uses a Coming Soon placeholder)
- `/faq` — FAQ page
- `/swag` — Swag page

## Project Structure

```text
src/
  components/     Reusable UI components (navbar, modal, buttons, forms)
  pages/          Route-level pages
  data/           Static content/config for pages
  assets/         Fonts, SVGs, PNGs
  utils/          Small helper utilities
  routes.tsx      App route definitions
```

## Build

```bash
pnpm build
pnpm preview
```

## Contributing

1. Create a branch from `main`
2. Make focused changes
3. Run lint/build locally
4. Open a pull request with a clear description

## License

No license is currently specified in this repository.
