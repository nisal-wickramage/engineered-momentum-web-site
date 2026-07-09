// @ts-check
import { defineConfig } from 'astro/config';
import expressiveCode from 'astro-expressive-code';

// https://astro.build/config
export default defineConfig({
  integrations: [expressiveCode()],
  // Update 'site' to your GitHub Pages URL
  // For project repos: https://username.github.io/repository-name
  // For user/org repos: https://username.github.io
  site: 'https://nisal-wickramage.github.io/engineered-momentum-web-site/',
  
  // Uncomment if using a project repo (not username.github.io)
  // base: '/engineered-momentum-web-site',
});
