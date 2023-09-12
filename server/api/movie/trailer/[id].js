export default defineEventHandler(async (event) => {
    const { movieKey } = useRuntimeConfig()
    const movieid = event.context.params.id
    try {
        const data = await $fetch(`https://api.themoviedb.org/3/movie/${movieid}/videos?api_key=${movieKey}`)
        // console.log(data);
        return data
    }
    catch (error) {
        return null;
    }
})