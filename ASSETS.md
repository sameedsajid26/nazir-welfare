# Managing images and videos (without storing them in the repo)

The app uses a **central media manifest** for Cloudinary URLs and optional path-based assets.

## How it works

- **`src/lib/media.ts`**: single source of truth for all media. Cloudinary URLs live in the `media` object; path-based assets (e.g. not yet on Cloudinary) live in `mediaPaths`. Add, replace, or remove URLs here; components reference by key (e.g. `media.pump1`, `media.logoFinal`).
- **`VITE_ASSETS_URL`** (in `.env`): base URL for path-based assets only. Leave empty to serve from local `public/`.
- **`asset(path)`** (in `src/lib/assets.ts`): builds the full URL for a path; used only for `mediaPaths` entries (e.g. `asset(mediaPaths.clothingDrive)`).

## Option 1: Keep assets in the repo (current)

- Don’t set `VITE_ASSETS_URL`. Assets in `public/` are served as-is.
- Works well for small repos; large images/videos can make pushes slow or fail.

## Option 2: Host assets outside the repo (recommended for large files)

1. **Upload assets** to one of:
   - **[Cloudinary](https://cloudinary.com)** – free tier, CDN, optional transforms. Create a folder (e.g. `nazir-welfare`) and upload; base URL looks like `https://res.cloudinary.com/your-cloud/image/upload/nazir-welfare`.
   - **ImgBB / Imgur** – simple image hosting; use direct image URLs (no single base URL, so you’d need to use full URLs in code or a small mapping).
   - **AWS S3 + CloudFront** or **Cloudflare R2** – full control; use the bucket/CDN base URL.
   - **Vercel Blob / Netlify Large Media** – if you deploy there.

2. **Set the base URL** in `.env`:
   ```bash
   VITE_ASSETS_URL=https://your-cdn.com/nazir-welfare
   ```
   Paths in code stay like `/logo-final.png`; they become `https://your-cdn.com/nazir-welfare/logo-final.png`.

3. **Stop tracking large files** (optional): in `.gitignore`, uncomment the `public/*.mp4`, `public/*.png`, etc. lines. Then remove them from Git (e.g. `git rm --cached public/*.mp4 public/*.png` …) and push. Repo stays small; deploy or CI must have assets on the CDN.

## Favicon

The favicon in `index.html` is set to `/logo-final.png`. If you use a CDN, either:

- Keep a small `logo-final.png` in `public/` for the favicon, or  
- After build, replace the favicon link in `dist/index.html` with your CDN URL, or  
- Use a build step that injects `VITE_ASSETS_URL` into the favicon href.

## Summary

| Goal                         | Action                                                                 |
|-----------------------------|------------------------------------------------------------------------|
| Small repo, no big media    | Host on Cloudinary/S3/etc., set `VITE_ASSETS_URL`, optionally .gitignore `public/*` and remove from Git. |
| Quick push, keep local dev  | Leave `VITE_ASSETS_URL` unset; only remove the heaviest files from Git and host those on a CDN.        |
