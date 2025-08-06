export default defineNuxtConfig({
  target: 'static',
  ssr: true, // Server-side rendering (for static export)
  app: {
    head: {
      title: 'My Static Site',
      meta: [{ name: 'description', content: 'This is my Nuxt static site.' }],
    },
  },
});
