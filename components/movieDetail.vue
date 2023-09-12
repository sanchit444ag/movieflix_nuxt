<template>
    <div class="bg6">
    <div class="grid1">
        <div class="bg5">
            <img class="img2" :src="`https://image.tmdb.org/t/p/w500/${poster}`" alt="placeholder image"/>
        </div>
        <div class="sm">
            <h1 class="head11">{{ title }}</h1>
            <h3 class="head33">Release Date:{{ date }}</h3>
            <p class="text11">
            {{ overview }}
            </p>
            <p class="text11">
             Revenue: $ {{ revenue }}
            </p>
            <div class="mt">
                <button class="button">
                    <NuxtLink class="link" :to="`https://www.youtube.com/watch?v=${trailer}`" target="_blank">𝐖𝐚𝐭𝐜𝐡-𝐓𝐫𝐚𝐢𝐥𝐞𝐫</NuxtLink>
                </button>
                <button class-="button">
                    𝐁𝐮𝐲-𝐍𝐨𝐰
                </button>
            </div>
        </div>
    </div>
</div>
</template>
<script setup>
defineProps(["title","date","poster","revenue","overview","trailer"]);
</script>
<style scoped>
button {
 border-radius: 10px;
 border: 0;
 background-color: rgb(235, 26, 58);
 letter-spacing: 1.5px;
 font-size: 15px;
 transition: all .3s ease;
 box-shadow: rgb(201, 46, 70) 0px 10px 0px 0px;
 color: hsl(0, 0%, 1%);
 height:50px;
 margin:20px;
 font-size: 20px;
 margin-left:60px;
}

button:hover {
 box-shadow: rgb(121, 21, 36) 0px 7px 0px 0px;
}

button:active {
 background-color: rgb(255, 56, 86);
 /*50, 168, 80*/
 box-shadow: rgb(201, 46, 70) 0px 0px 0px 0px;
 transform: translateY(10px);
 transition: 200ms;
}
.grid1{
    display:flex;
    flex-direction: row;

}
.img2{
    background:cover;
    height:800px;
    width:600px;
    padding: 40px;
    margin:20px;
    box-shadow: 0 15px 20px rgba(0.8, 0.8, 0.8, 0.8); /* Add a shadow */
    border-radius: 60px; 
}
.head11{
    color:rgb(255, 255, 255);
    margin:40px;
    text-decoration:solid;
}
.head33{
    margin:30px;
    color:white;
    margin:40px;
    font-style: italic;
    font-size:large;
}
.mt{
    display:flex;
    justify-items:center;
}
.link{
    color:black;
    text-decoration: none;
    font-size:20px;
}
.text11{
    text-align:left;
    margin: 40px;
    color:rgb(248, 243, 219);
    font-style: italic;
    color:rgba(255, 255, 255, 0.63);
}
.bg6{
background-image: url("/images/banner1.jpg");
/* background-position: center; */
background-size: cover; 
height:100vh;
}

  
  
</style>