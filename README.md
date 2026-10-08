# portfolio-web

My personal portfolio and online CV, built as a Next.js app located in the repository root.

## Stack

- Next.js 16 (App Router) + React 19
- TypeScript
- Tailwind CSS 4
- ESLint 9

## Running it locally

You'll need Node.js 20.9.0 or later and [pnpm](https://pnpm.io/).

```bash
pnpm install
pnpm dev
```

The development server runs at http://localhost:3000.

## Commands

```bash
pnpm build
pnpm start
pnpm lint
pnpm format:check
pnpm format
```

Run `pnpm build` before `pnpm start`; the start command serves the production build. `pnpm format:check` checks formatting, while `pnpm format` applies formatting changes. No test script is configured.

## Routes

The app supports Spanish (`es`), Catalan (`ca`), and English (`en`). The portfolio is available at `/{lang}` and the extended CV at `/{lang}/cv`. Visiting `/` redirects to the valid locale in the `NEXT_LOCALE` cookie, otherwise to a valid locale from `Accept-Language`, and falls back to Spanish (`es`).

## License

MIT — see [`LICENSE`](./LICENSE). Free to use, fork, copy or take as a starting point for your own portfolio. Just keep the copyright notice.
