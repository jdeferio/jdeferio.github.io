# Joseph Deferio

Personal site at https://josephdeferio.com, built with Next.js App Router,
React, TypeScript, and statically rendered pages deployed on Vercel.

## Development

Use Node.js 26 (`nvm use`) and Yarn 4.5.3 through Corepack. Node 26 no
longer bundles Corepack; the commands below run a pinned version explicitly:

```sh
npx --yes corepack@0.36.0 yarn install --immutable
npx --yes corepack@0.36.0 yarn dev
npx --yes corepack@0.36.0 yarn lint
npx --yes corepack@0.36.0 yarn build
```

Production builds are written to `.next/`; development uses `.next-dev/` so
verification builds do not replace live development assets. Routes include Overview, Experience,
Research, and Working with me. `/projects/` retains earlier work as an
unindexed archive. The approved ink-blue design is applied throughout.

## Site metadata and analytics

The public domain and indexable routes live in `src/lib/site.ts`. Navigation,
`sitemap.xml`, and `robots.txt` use that shared configuration. The sitemap omits
the archived Projects page. It does not invent a new
modification date on every build.

The root JSON-LD graph describes Joseph Deferio, the website, and the two
ventures. Page schemas reference the same person and website identifiers;
the research archive includes the papers and presentations visible on the page.

Google Tag Manager uses container `GTM-PRMRV9QL`. Set `NEXT_PUBLIC_GTM_ID`
before building to override it, or set an empty value to disable it. Public
variables are embedded in the build, so changes require rebuilding
and deploying. The loader runs after hydration on `josephdeferio.com` and
`www.josephdeferio.com`; localhost and preview domains do not initialize it. This integration requires JavaScript.

In Tag Manager, configure a Google tag with the GA4 web stream's `G-…` ID and
publish the container. This repository does not deploy a second direct GA4 tag.
Enable GA4 Enhanced Measurement's page views and browser-history page changes
for client-side navigation. Avoid an additional manual page-view tag unless
automatic history-based page views are disabled, to prevent double counting.
Verify initial loads and navigation in Tag Assistant and GA4 DebugView/Realtime
after deployment. The website integration alone does not verify the tags
configured inside the container.

References:
- https://support.google.com/tagmanager/answer/9442095
- https://developers.google.com/analytics/devguides/collection/ga4/views

## Vercel deployment

Use the existing Vercel account/team that hosts Onça. Import
`jdeferio/jdeferio.github.io` with the Next.js framework preset and repository
root as the root directory. `vercel.json` supplies the Yarn install and build
commands. Both commands invoke Corepack 0.36.0 explicitly through `npx`, since
Node 26 no longer includes Corepack. This uses npm only to bootstrap Corepack;
Yarn 4.5.3 installs project dependencies from the committed lockfile. A global
Yarn Classic binary cannot silently ignore the Yarn 4 lockfile. The install
log prints the Node version and should show Yarn 4.5.3 without rewriting the
lockfile.

In Vercel Project Settings → Environment Variables, set
`ENABLE_EXPERIMENTAL_COREPACK=1` for Production and Preview (and any other
environment with native checks). This tells Vercel to honor `packageManager`
when selecting Yarn, including for the separate native Lint and Typecheck
jobs. Adding it only to a local `.env` file does not configure Vercel's runners.
Redeploy after saving the project setting.

Use Node.js 26.x and the framework's default output directory;
remove any old `out` output-directory override. No GitHub Pages export is needed.

Use `main` as the production branch and pull-request branches for previews.
The GTM ID is configured in code; optional overrides are in `.env.example`.
The Corepack project setting above is required for consistent package-manager
selection in Vercel's runners.

Verify the preview's pages, research downloads, metadata, and legacy redirects.
The app intentionally does not initialize GTM on `*.vercel.app` previews.
Vercel routing supplies security headers, the `www` to apex redirect, and
redirects for the earlier Jekyll `.html` URLs and portrait URL.

For the domain cutover:

1. Attach `josephdeferio.com` and `www.josephdeferio.com` to the verified Vercel
   project, using the apex as the primary domain.
2. Use the exact DNS records Vercel shows for that project. Preserve unrelated
   DNS records, especially mail records. Do not replace the domain's entire DNS
   zone or assume a generic Vercel IP address.
3. After approval of the preview, update the web DNS records from GitHub Pages
   to Vercel. Keep the existing GitHub Pages deployment available during the
   cutover so cached DNS still reaches a working site.
4. Verify HTTPS, the apex and `www`, redirects, sitemap, robots, document links,
   and GTM/GA4 on the live domain. Retire the GitHub Pages deployment after
   the new site is confirmed live.

`public/CNAME` was specific to GitHub Pages and is no longer part of this build.
The `jdeferio.github.io` hostname is controlled by GitHub Pages, so any redirect
from that hostname must be handled there; Vercel cannot redirect traffic that
never reaches it.

Package-manager reference: https://vercel.com/docs/package-managers
