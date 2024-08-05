import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";

import alpinejs from "@astrojs/alpinejs";


// https://astro.build/config
export default defineConfig({
  site: "https://nekohige.com",
  integrations: [tailwind(), mdx(), sitemap(), icon(), alpinejs({ entrypoint: '/src/entrypoint' })]
});