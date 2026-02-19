// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import devtoolsJson from 'vite-plugin-devtools-json';

export default defineConfig({
  base: "/Personal-Website/",
  vite: { 
    plugins: [
      tailwindcss(), 
      devtoolsJson()
    ] 
  },
  i18n: {
    defaultLocale: "en",
    locales: ["en", "ro"]
  }
});