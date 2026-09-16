# Development Setup

This guide gets the Salamander Tech Hub website running locally.

## Requirements

- Node.js 20 or newer
- pnpm 9 or newer
- Git

Enable pnpm with Corepack if it is not already installed:

```bash
corepack enable
corepack prepare pnpm@12.4.1 --activate
```

Check your versions:

```bash
node --version
pnpm --version
git --version
```

## Install

Clone the repository and move into the project directory:

```bash
git clone https://github.com/Salamander-Tech-Hub/Wajenzi-hackv1.git
cd Wajenzi-hackv1
pnpm install
```

Use the actual repository URL if it differs from the example above.

## Run locally

Start the Vite development server:

```bash
pnpm dev
```

Open the URL shown in the terminal. Vite supports hot module replacement, so changes under `src/` appear in the browser as you work.

## Validate changes

Run both checks before opening a pull request:

```bash
pnpm lint
pnpm build
```

`pnpm build` runs the TypeScript project build before creating the Vite output in `dist/`.

To preview that production output:

```bash
pnpm preview
```

## Where to make changes

- Add or update pages in `src/pages/`.
- Add reusable interface pieces in `src/components/`.
- Update chatbot responses in `src/data/chatKnowledge.ts`.
- Update navigation labels and paths in `src/data/Menu.ts`.
- Keep images, team photos, and other media in `src/assets/`.
- Update the document title and metadata in `index.html`.

## Environment variables

The current website does not require environment variables or third-party API keys to run locally. If a future integration needs secrets, keep them in a local `.env` file and document only the variable names and safe example values in this guide. Never commit credentials.

## Troubleshooting

- If dependencies look stale, remove `node_modules` and run `pnpm install` again.
- If a route works through navigation but not after a direct refresh in production, check the host's single-page application fallback configuration.
- If the first-visit loading screen does not appear, clear the browser's session storage for the site.