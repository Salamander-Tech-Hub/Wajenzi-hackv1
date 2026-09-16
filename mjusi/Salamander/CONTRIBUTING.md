# Contributing to Salamander

Thank you for helping Salamander Tech Hub build in the open. Contributions can improve the website, documentation, accessibility, performance, and the wider community experience.

Please read the [Code of Conduct](CODE_OF_CONDUCT.md) before participating.

## Before you start

1. Check existing issues and pull requests so work is not duplicated.
2. For a significant change, open an issue first and describe the problem and proposed direction.
3. Fork the repository and create a focused branch from the default branch.

Example:

```bash
git checkout -b feat/describe-your-change
```

## Local development

Install dependencies and start the site:

```bash
npm install
npm run dev
```

See [SETUP.md](SETUP.md) for the complete development setup and troubleshooting notes.

## Making changes

- Keep pull requests focused on one problem or feature.
- Follow the existing React, TypeScript, and Tailwind patterns.
- Prefer reusable components when a UI pattern appears in more than one place.
- Make responsive behavior and keyboard accessibility part of the change.
- Keep user-facing copy clear and consistent with Salamander's mission.
- Do not commit secrets, generated build output, or unrelated formatting changes.
- Update documentation when behavior or setup changes.

## Commit and pull request guidelines

Use a clear imperative commit message, such as:

```text
Add accessible label to chat launcher
```

Pull requests should include:

- A concise description of the problem and solution.
- Screenshots or a short recording for visual changes.
- Notes about responsive or accessibility checks when relevant.
- Any known limitations or follow-up work.

Before submitting, run:

```bash
npm run lint
npm run build
```

## Review process

Maintainers may request changes to improve correctness, accessibility, maintainability, or consistency with the project. Keep discussion constructive, respond to review comments, and update the branch when needed. A pull request can be merged once it has appropriate review and the required checks pass.

## Questions

For questions about contributing, open a discussion or contact [hello@salamander.tech](mailto:hello@salamander.tech).