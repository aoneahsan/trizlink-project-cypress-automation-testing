import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    projectId: "z8vgeu",
    baseUrl: "https://prettylinks.zaions.com",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});