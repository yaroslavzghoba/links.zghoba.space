# links.zghoba.space

[![Website](https://img.shields.io/badge/Site-Up-gray?style=flat&labelColor=202526&color=e85d04)](https://links.zghoba.space)
[![Astro](https://img.shields.io/badge/Astro-7.4.0-gray?style=flat&logo=Astro&logoColor=fff8e8&labelColor=202526&color=ffba08)](https://astro.build/)
[![Node.js](https://img.shields.io/badge/NodeJS-%3E%3D22.22.0-gray?style=flat&logo=nodedotjs&logoColor=fff8e8&labelColor=202526&color=556b2f)](https://nodejs.org/)
[![Languages](https://img.shields.io/badge/Locales-en%20%7C%20de%20%7C%20ua-gray?style=flat&logo=nodedotjs&logoColor=fff8e8&labelColor=202526&color=2f7770)](https://links.zghoba.space/)

[`links.zghoba.space`](https://links.zghoba.space) is Yaroslav Zghoba’s personal link hub for presenting a portfolio, social profiles, contact email, and GitHub in one focused interface. It is designed as a fast, multilingual landing page for visitors who want to find the right channel quickly.

This repository contains the Astro website, its localized page content, the shared page template, styling, and the small client-side interaction used by the link buttons.

## 🚀 Project Overview

- **Personal link hub:** portfolio, YouTube, TikTok, email, and GitHub are exposed as clear, direct actions.
- **Multilingual routes:** English at `/`, German at `/de/`, and Ukrainian at `/ua/`.
- **Localized content:** labels, descriptions, links, status text, and profile details live in separate JSON locale files.
- **Single source of layout:** all language pages use the shared `MainPageTemplate` component, so the visual structure stays consistent across locales.
- **Responsive presentation:** the desktop card layout becomes a full-height mobile experience on narrow screens.
- **Static-first delivery:** Astro renders the pages at build time, keeping the deployed site lightweight and easy to host.
- **Design-system styling:** the page builds on [`sys.override`](https://github.com/yaroslavzghoba/SYS.OVERRIDE) tokens and components, with project-specific styles layered on top.

## 🗂️ Project Structure

```text
/
├── public/                  # Favicon and other public assets
├── src/
│   ├── components/          # Shared Astro page template
│   ├── layouts/             # Base HTML layout and metadata
│   ├── locales/             # English, German, and Ukrainian content
│   ├── pages/               # Localized routes
│   ├── scripts/             # Small client-side interactions
│   └── styles/              # Global and page-specific styles
├── astro.config.mjs         # Astro and internationalization configuration
└── package.json             # Scripts and dependencies
```

## ▶️ How to Run

### Prerequisites

- Node.js `>=22.22.0`
- npm

### Running

<details>
  <summary>Option 1: Running the development version</summary>

Install the dependencies from the repository root:

```sh
npm install
```

Start the Astro development server:

```sh
npm run dev
```

The site is then available at [http://localhost:4321](http://localhost:4321). To run it in the background, use the project’s Astro command directly:

```sh
astro dev --background
```

The background server can be managed with `astro dev status`, `astro dev logs`, and `astro dev stop`.

</details>

<details>
  <summary>Option 2: Running the production version</summary>

Create the production output and preview it locally:

```sh
npm run build
npm run preview
```

The build is written to `dist/` and the preview server is typically available at [http://localhost:4321](http://localhost:4321).

</details>

## 🔧 Available Commands

| Command | Description |
| --- | --- |
| `npm install` | Install project dependencies. |
| `npm run dev` | Start the local development server. |
| `npm run build` | Build the static production site in `dist/`. |
| `npm run preview` | Serve the production build locally. |
| `npm run astro -- --help` | Show available Astro CLI commands. |

## 🌍 Adding or Updating a Language

Add or update a JSON file in `src/locales/`, then create the corresponding page under `src/pages/`. Register the locale in `astro.config.mjs` and pass the locale object to `MainPageTemplate` so the route uses the same layout and behavior as the existing pages.
