// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  telemetry: { enabled: false },
  devtools: { enabled: false },
  experimental: {
    viewTransition: true,
    crossOriginPrefetch: true,
  },
  modules: [
    "@nuxt/icon",
    "@nuxtjs/tailwindcss",
    "@vueuse/nuxt",
  ],
  vue: {
    compilerOptions: {
      isCustomElement: (tag) => tag === "search",
    },
  },
  tailwindcss: {
    viewer: false,
  },
});
