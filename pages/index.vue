<template>
    <div class="main">
        <searchBar @search-movie="searchMovie" :searchError="searchError" />
        <div class="grid">
            <div v-for="movie in movies.results" :key="movie.id">
                <MovieCard :movieid="movie.id" :title="movie.title" :date="movie.release_date"
                    :poster="movie.poster_path" />
            </div>
        </div>
    </div>
</template>
<script setup>
useHead({
    title: "Popcorn-times",
})
const movies = ref([]);
const searchError = ref(false);
const searchMovie = async (searchInput) => {
    //  console.log("search text :", searchInput);


    if (searchInput === "") {
        searchError.value = true;
    }
    if (searchInput !== "") {
        //search code
        searchError.value = false;
        const { data, error } = await useFetch(`/api/movie/search?searchInput=${searchInput}`);
        movies.value = data.value;
    }
};
// fetch all movie details from api 
const { data, error } = await useFetch("/api/movie");
// console.log(movies);
movies.value = data.value;

</script>
<style scoped>
@media (min-width: 48em) {
    .grid {
    display: flex;
    flex-direction: row;
    flex-wrap:wrap;
    width: 100%;
    width:100%;
  justify-content: center;
} 
}

.main {
position: relative;
width:100%;
color: whitesmoke;
}
</style>