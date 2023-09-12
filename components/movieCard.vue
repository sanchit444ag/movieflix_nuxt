<template>
    <div class="q">
        <div class="background">
            <div class="bg1">
                <h3 class="head3">
                    {{ title }}
                </h3>
                <div class="bg2">
                    <img class="img1" :src="`https://image.tmdb.org/t/p/w500/${poster}`" alt="Placeholder Imagge" />
                </div>
                <p class="pp">Release date:{{ date }}</p>
                <div class="tex">
                    <button>
                        <NuxtLink :to="`movies/${movieid}`" class="link"> Get Details</NuxtLink>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>


defineProps(["movieid", "title", "date", "poster"]);
</script>

<style scoped>
.link{
    color:black;
    text-decoration: double;
    font-size:large;
}
button {
 
 border-radius: 10px;
 border: 0;
 background-color: rgb(255, 69, 97);
 letter-spacing: 1.5px;
 font-size: 15px;
 transition: all .3s ease;
 box-shadow: rgb(201, 46, 70) 0px 10px 0px 0px;
 color: hsl(0, 0%, 100%);
 height:40px;
 position:relative;
 left:32%;
}

button:hover {
 box-shadow: rgb(201, 46, 70) 0px 7px 0px 0px;
}

button:active {
 background-color: rgb(255, 56, 86);
 /*50, 168, 80*/
 box-shadow: rgb(201, 46, 70) 0px 0px 0px 0px;
 transform: translateY(5px);
 transition: 200ms;
}

.q {
    /* background:linear-gradient(180deg,rgb(26, 0, 0),rgb(138, 2, 2),rgb(31, 0, 0)); */
    background-color: whitesmoke;
    padding: 60px;
    width:100%;
}

.background {
    background:linear-gradient(180deg,rgb(192, 2, 2),rgb(49, 0, 0),rgb(250, 249, 249));
    border-radius: 10px;
    box-shadow:14px 14px 14px rgba(0.6, 0.6, 0.6, 0.6);
    overflow: hidden;
    margin: 4px;
    height: 580px;
    width: 322px;

}

.bg1 {
    padding: 1rem;
    padding-top: 12px;
    padding-bottom: 4px;
}

.head3 {
    font-weight: bold;
    font-size: 1.125rem;
    /* 18px */
    line-height: 1.75rem;
    /* 28px */
    text-align: center;
    margin-bottom: 4px;
    
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    /* text-overflow: clip; */
    
}

.bg2 {
    overflow: hidden;
    margin-bottom: 4px;
}

.img1 {
    height: 400px;
    width: 290px;
    object-fit: cover;
}
.pp{
    padding-left: 45px;
    margin-top: 10px;
    font-style: italic;
    
}
</style>