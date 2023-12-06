import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "https://prettylinks.zaions.com",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },

  component: {
    devServer: {
      framework: "react",
      bundler: "vite",
    },
  },
});
