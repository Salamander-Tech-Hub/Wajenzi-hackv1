# Salamander Tech Hub

Salamander Tech Hub is an open-source community in Nairobi. We help developers, designers, and makers learn in public, contribute, and ship real software.

This repository is the community website: mission, team, events, and ways to get involved.

## Explore

- **Home** — story, community impact, and how to join
- **About** — mission, founders, and core team
- **Contact** — events, partnerships, and collaboration
- **GitHub** — [Salamander-Tech-Hub](https://github.com/Salamander-Tech-Hub)

## Run locally

```bash
pnpm install
pnpm dev
```

Requires Node.js 20+ and pnpm 9+. See [SETUP.md](SETUP.md) for full setup.

## Project layout

```text
src/
  pages/           Routes: home, About, Contact, loading screen
  components/      Site chrome (nav, hero, story, community, footer)
    ui/            Shared UI (wave grid, spotlight nav, buttons, cards)
    originkit/     Isolated motion components (join CTA)
  data/            Nav items and outbound links
  assets/          Team photos, video, and brand images
public/            Favicon, logos, and static images
```

The site is React, TypeScript, Vite, Tailwind CSS, and React Router. Theme is dark only (yellow on black).

## License

[MIT](LICENSE). Contribution guide: [CONTRIBUTING.md](CONTRIBUTING.md).

<p><span style="color: #FCD34D;"><strong>Happy coding!</strong></span></p>
