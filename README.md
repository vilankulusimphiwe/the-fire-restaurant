# The Fire Restaurant

Public website for The Fire Restaurant, a South African shisanyama and restaurant in Johannesburg.

## Live site

https://vilankulusimphiwe.github.io/the-fire-restaurant/

Opening that address loads the published site. It is updated from the `main` branch.

This phase is the advertising and information site only. Point of sale, stock, staff, and other business-management tools are out of scope.

## Technology stack

- React 19
- JavaScript (ES modules)
- Vite 8
- React Router
- CSS, with the colour palette in custom properties
- Oxlint for linting

The current Vite React template ships Oxlint instead of ESLint. Oxlint is the linter for this project, run with `npm run lint`. The app stays in JavaScript. The `@types/react` packages from the Vite template are editor hints only.

## Prerequisites

- Node.js 20 or newer
- npm 10 or newer

## Installation

```bash
npm install
```

## Development server

```bash
npm run dev
```

Vite prints a local address, usually `http://localhost:5173`.

## Production build

```bash
npm run build
```

The built files are written to `dist/`. Preview that build with:

```bash
npm run preview
```

## Project structure

```text
src/
  components/   shared layout and UI
  data/         business facts and navigation
  hooks/        small React hooks
  pages/        one file per route
  services/     helpers such as the directions link
  styles/       palette, base styles, and layout
public/
  favicon.png
```

## Where to update content

- Business name, address, phone, and anything still unknown: `src/data/businessInfo.js`
- Navigation labels and paths: `src/data/navigation.js`
- Gallery photographs and captions: `src/data/gallery.js` and `src/assets/images/`
- The logo: `src/assets/images/logo.png` and `public/favicon.png`
- The directions link: `src/services/businessLinks.js`
- Colours and fonts: `src/styles/variables.css`

## Known placeholders

Confirmed and shown: the street address, the landmark next to John Foster Police Station, and the phone number 084 877 3423.

Not confirmed, so not shown: email, WhatsApp, opening hours, and social media accounts.

The gallery uses photographs supplied by the restaurant: braaied meat, chicken wings, amagwinya, and the menu board. A blurred sandwich photograph was left out. There are still no photos of the room, the butchery counter, drinks, or the snooker tables.

About and Offerings introduce the business. Dish names from the menu board are not listed as a priced menu.
