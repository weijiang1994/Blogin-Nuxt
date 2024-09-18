import Aura from "@primevue/themes/aura";
import Lara from "@primevue/themes/lara";
import Nora from "@primevue/themes/nora";

export default defineNuxtConfig({
  css: [
    "~/assets/css/base.scss",
    "~/assets/css/bootstrap4.css",
    "primeicons/primeicons.css",
    "primeflex/primeflex.css",
  ],
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: ["@primevue/nuxt-module"],
  primevue: {
    components: ["Button", "MenuBar", "InputText", "Column"],
    options: {
      autoImport: true,
      theme: {
        preset: Nora,
      },
    },
  },
});
