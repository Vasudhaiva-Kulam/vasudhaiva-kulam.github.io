// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://vasudhaiva-kulam.github.io",
  base: "/website", // only needed for a project page, not a custom domain
  vite: { plugins: [tailwindcss()] },
});
