# vollstaedt.it

Source code of [vollstaedt.it](https://vollstaedt.it), the website of Vollstädt IT Solutions,
published as an Angular reference project.

## Stack

- Angular 21 with standalone components, signals and zoneless change detection
- Server-side rendering and prerendering with `@angular/ssr`, client hydration with event replay
- Tailwind CSS
- Legal pages and portfolio entries as Markdown and YAML, rendered with `ngx-markdown`
- Open Graph images generated with headless Chrome (`scripts/generate-og-images.mjs`)

## Running it

```bash
pnpm install
pnpm start          # dev server on http://localhost:4200
pnpm build          # production build with prerendering into dist/page
```

## What this repository is

This repository receives occasional snapshots of the private working repository, so its history
is short on purpose. Client logos, certificates and the deployment configuration are not included.

## License

The source code is licensed under the MIT License, see [LICENSE](LICENSE).

The content is not: texts, legal documents (terms, privacy policy, legal notice), photos, images,
logos and the Vollstädt IT Solutions brand are © Thomas Vollstädt, all rights reserved.
