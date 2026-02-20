/*
  vite.config.js

  Two versions depending on your Tailwind version:

  VERSION A — Tailwind v4 (@tailwindcss/vite):
    Install: npm install @tailwindcss/vite
    Uses the vite plugin, no postcss.config.js needed

  VERSION B — Tailwind v3 (tailwindcss + postcss):
    Install: npm install tailwindcss postcss autoprefixer
    Uses postcss, needs postcss.config.js
    vite.config.js does NOT import tailwindcss here
*/

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

/* ── VERSION A: Tailwind v4 (uncomment if using @tailwindcss/vite) ── */
import tailwindcss from "@tailwindcss/vite";
export default defineConfig({
  plugins: [react(), tailwindcss()],
});

/*
── VERSION B: Tailwind v3 (comment out version A above and use this) ──

export default defineConfig({
  plugins: [react()],
});

And create postcss.config.js:
  export default {
    plugins: { tailwindcss: {}, autoprefixer: {} }
  };
*/