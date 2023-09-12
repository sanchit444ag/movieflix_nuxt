// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig:{
    movieKey:process.env.MOVIE_API_KEY,
  },
  app:{
  pageTransition: {name:"page" , mode:"out-in" },
  },
  devtools: { enabled: true },
  css: ["bootstrap/dist/css/bootstrap.min.css"],
 
});
