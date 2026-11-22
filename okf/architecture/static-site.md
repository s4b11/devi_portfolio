---
type: Architecture
title: Static site
description: Documents the asset layout, development workflow, and animation behavior.
---

# Static site

Serve `site/` as the web root. The HTML defines all section content and navigation. Tailwind compiles `src/site.css` to `site/assets/site.css` with `npm run build`. Local runtime assets include both fonts, the WebP portrait, GSAP and ScrollTrigger.

The optional script reveals offscreen content as it enters the viewport and reverses the reveal when scrolling back. All content remains available with JavaScript disabled or reduced motion enabled. Outbound navigation is limited to contact links.

Run `npm ci` to install pinned build dependencies and `npm run dev` to start the local static server. See [current state](/current-state.md) for the latest validation.
