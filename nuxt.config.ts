// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({

    ssr: true,
    target: 'static',

    nitro: {
        prerender: {
            crawlLinks: true,
        }
    }
})
