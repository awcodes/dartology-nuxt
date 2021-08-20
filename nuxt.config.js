export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: "static",

  env: {
    supabaseUrl: "https://cwxiucidplycvswaslxu.supabase.co",
    supabaseAnonKey:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYyOTQ4NzY3MiwiZXhwIjoxOTQ1MDYzNjcyfQ.-LDmhlyoGkWGCG5w1OduAiWh5daH4KYfj62pNK1_gmA"
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Dartology",
    titleTemplate: "%s | Dartology",
    htmlAttrs: {
      lang: "en"
    },
    bodyAttrs: {
      class: "font-sans antialiased leading-7 text-gray-300 bg-gray-900"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:
          "Dartology is a collection of tools to improve your dart game and to learn more about darts in general."
      },
      { name: "format-detection", content: "telephone=no" }
    ],
    link: [{ rel: "icon", type: "image/svg+xml", href: "/favicon.svg" }]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {
      src: "~/plugins/supabase.js"
    }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    "@nuxtjs/tailwindcss",
    [
      "@nuxtjs/google-fonts",
      {
        families: { Ubuntu: [300, 400, 500, 700] },
        display: "swap"
      }
    ]
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios"
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: {
        "postcss-nested": {}
      }
    }
  }
};
