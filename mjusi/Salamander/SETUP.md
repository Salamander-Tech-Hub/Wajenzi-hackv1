# Development Setup

This guide gets the Salamander Tech Hub website running locally.

## Requirements

- Node.js 20 or newer
- npm 10 or newer
- Git

Check your versions:

```bash
node --version
npm --version
git --version
```

## Install

Clone the repository and move into the project directory:

```bash
git clone https://github.com/Salamander-Tech-Hub/<repository-name>.git
cd Salamander
npm install
```

Use the actual repository URL and directory name if they differ from the example above.

## Run locally

Start the Vite development server:

```bash
npm run dev
```

Open the URL shown in the terminal. Vite supports hot module replacement, so changes under `src/` appear in the browser as you work.

## Validate changes

Run both checks before opening a pull request:

```bash
npm run lint
npm run build
```

`npm run build` runs the TypeScript project build before creating the Vite output in `dist/`.

To preview that production output:

```bash
npm run preview
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

- If dependencies look stale, remove `node_modules` and run `npm install` again.
- If a route works through navigation but not after a direct refresh in production, check the host's single-page application fallback configuration.
- If the first-visit loading screen does not appear, clear the browser's session storage for the site.