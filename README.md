# Devi Shaju Portfolio

A static portfolio built with HTML, Tailwind CSS, and JavaScript.

## Run locally

Run `npm run dev` from the repository root and open `http://localhost:8000`. The server uses Python 3. The compiled stylesheet, fonts, portrait, GSAP, and ScrollTrigger are already in `site/`, so previewing requires no Node package installation or internet access.

## Edit and deploy

- Edit `site/index.html` for content and `site/assets/site.js` for animation.
- After changing the HTML or `src/site.css`, run `npm ci` to install the pinned tooling and `npm run build` to regenerate `site/assets/site.css`.
- Publish the contents of `site/` to a static host.

## GitHub Pages

The `gh-pages` branch serves the contents of `site/` from its root. In GitHub repository settings, open **Pages**, choose **Deploy from a branch**, and select `gh-pages` and `/ (root)`.

For `https://s4b11.github.io/devishaju/`, set the repository name to `devishaju` under **Settings → General**. GitHub Pages derives a project site's first path segment from the repository name.

When publishing updates, refresh the root of `gh-pages` from the updated `site/` directory on `main`.
