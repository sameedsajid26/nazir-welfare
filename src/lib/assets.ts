/**
 * Base URL for static assets (images, videos).
 * Set VITE_ASSETS_URL in .env to point to a CDN or external host so you don't need to commit large files.
 * Leave unset for local dev (assets served from public/).
 */
const base = import.meta.env.VITE_ASSETS_URL ?? "";

/** Build full URL for an asset path. Use for images/videos so they can be hosted outside the repo. Pass full URLs (http/https) to use Cloudinary or other CDNs as-is. */
export function asset(path: string): string {
  if (path.startsWith("http://") || path.startsWith("https://")) {
    return path;
  }
  const p = path.startsWith("/") ? path : `/${path}`;
  return base ? `${base.replace(/\/$/, "")}${p}` : p;
}
