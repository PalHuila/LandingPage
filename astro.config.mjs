import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import compress from "astro-compress";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), compress({ 
    Path: ["./Target", "./Build"],
    CSS: true,
    HTML: true,
    Image: false,
    JavaScript: true,
    SVG: false,
  })]
});