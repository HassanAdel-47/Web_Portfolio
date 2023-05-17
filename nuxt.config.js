export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: "server",
  mode: "static",
  ssr: false,
  build: {
    ssr: false,
  },
  loadingIndicator: {
    name: "circle",
    color: "transparent",
    background: "white",
  },
  // loading: "./components/Global/Preloader.vue",
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Hassan Adel",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    script: [
      {
        src: "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js",
      },
    ],
    link: [
      {
        rel: "stylesheet",
        href: "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css",
      },
      { rel: "icon", type: "image/x-icon", href: "/15.png" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Roboto&display=swap",
      },
      {
        rel: "stylesheet",
        href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css",
      },
      {
        rel: "stylesheet",
        href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css",
      },
      {
        href: "https://fonts.googleapis.com/css2?family=Almarai:wght@300;400;700;800&family=Cairo:wght@200;300;400;500;600;700;800;900;1000&family=Exo+2:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,100;1,200;1,300;1,400;1,500;1,600;1,700&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap",
        rel: "stylesheet",
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["./public/assets/scss/main.scss"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{ src: "~/plugins/aos.client.js", mode: "client" }],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ["@nuxtjs/fontawesome"],

  fontawesome: {
    icons: {
      solid: true,
    },
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["nuxt-i18n"],

  // Set Languages Settings
  i18n: {
    locales: [
      {
        code: "ar",
        iso: "ar-AR",
        file: "ar.json",
        dir: "rtl",
      },
      {
        code: "en",
        iso: "en-EN",
        file: "en.json",
        dir: "ltr",
      },
    ],
    defaultLocale: "en",
    langDir: "locales/",
    vueI18n: {
      fallbackLocale: "ar",
    },
    strategy: "no_prefix",
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    // build: {
    //   builder: "vite", // Use Vite as the build system
    //   rollupOptions: {
    //     // Customize Rollup options if needed
    //   },
    // },
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  },

  router: {
    base: "/Web_Portfolio/",
  },
};
