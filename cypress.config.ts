import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "https://prettylinks.zaions.com",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    defaultCommandTimeout: 30 * 1000,
    execTimeout: 2 * 60 * 1000,
    taskTimeout: 2 * 60 * 1000,
    pageLoadTimeout: 2 * 60 * 1000,
    requestTimeout: 1 * 60 * 1000,
    responseTimeout: 2 * 60 * 1000,
    numTestsKeptInMemory: 100, // reduce this for systems with less ram/memory
    watchForFileChanges: false
  },

  component: {
    devServer: {
      framework: "react",
      bundler: "vite",
    },
  },
});
