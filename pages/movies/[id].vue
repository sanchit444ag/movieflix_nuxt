<template>
    <div>
        <movieDetail 
        :title="movie.title" 
        :date="movie.release_date" 
        :poster="movie.poster_path" 
        :revenue="movie.revenue" 
        :overview="movie.overview"
        :trailer="trailer"
        />
    </div>
</template>
<script setup>
definePageMeta({
    layout: "custom"
});
const route =useRoute();
 // fetch single movie details from api 
const { data: movie, error, pending } = await useFetch(`/api/movie/${route.params.id}`);
// console.log(movies);



// fetch movie trailer
const { data: video  } = await useFetch(`/api/movie/trailer/${route.params.id}`);

// console.log("allvideo: ",allvideo);
const allvideo = toRaw(video.value.results)
const trailer= computed(()=>{
    let trailer = [];
    for (let i = 0; i < allvideo.length; i++) {
     if(allvideo[i].type === "Trailer"){
       trailer.push(allvideo[i]); 
     }   
    }
    return trailer[0].key;
});
</script>
<style scoped>
</style>