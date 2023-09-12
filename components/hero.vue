<template>
    <section class="hero-section">
        <div class="container">
        <h1 class="text1">Popcorn Times</h1>
        <h4 class="text2">Unlimited movies, TV shows and more.</h4>
      <div class="mt6">
        <button class="btn1">
        <NuxtLink class="nl" href="/Registration" >𝑮𝒆𝒕 𝒔𝒕𝒂𝒓𝒕𝒆𝒅</NuxtLink>
    </button> 
      </div>
    </div>
    </section>   
</template>
<style setup>
.nl{
    color:black;
    text-decoration: double;
    font-size:large;
}
.hero-section{
    background-image: url("/images/banner6.jpg");
    background-position: center;
    background-size:cover;
    height:60vh; 
}
.text1{
    font-size: 60px;
    font-family:Verdana, Geneva, Tahoma, sans-serif;
    color: rgb(219, 2, 2);
    position: relative;
    left:-10%;
    padding-top: 70px;
    
}
.text2{
    color:rgb(255, 254, 252);
    position: relative;
    left:-10%;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    font-style: italic;
    font-weight: lighter;
}
.mt6{
    position: relative;
    padding-top:40px;
    left:-10%
}
.btn1 {
 width: 130px;
 height: 60px;
 font-size: 1.1em;
 cursor: pointer;
 background-color: #e20505;
 color: #fff;
 border: none;
 border-radius: 5px;
 transition: all .4s;
 position:relative;
 top:10%;
 left:1%;
}

.btn1:hover {
 border-radius: 5px;
 transform: translateY(-10px);
 box-shadow: 0 7px 0 -2px #f85959,
  0 15px 0 -4px #39a2db,
  0 16px 10px -3px #39a2db;
}

.btn1:active {
 transition: all 0.2s;
 transform: translateY(-5px);
 box-shadow: 0 2px 0 -2px #f85959,
  0 8px 0 -4px #39a2db,
  0 12px 10px -3px #39a2db;
}
</style> 
    