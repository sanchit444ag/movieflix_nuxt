<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark">
      <div class="navbar-nav">
        <NuxtLink to="/" class="nav-link" aria-current="page">Home</NuxtLink>
        <NuxtLink to="/Login" class="nav-link">Login</NuxtLink>
        <NuxtLink to="/Registration" class="nav-link">Registration</NuxtLink>
        <NuxtLink to="/Contact" class="nav-link">Contact</NuxtLink>
       
      </div>
    </nav>
  </div>
</template>

<script setup>
</script>
<style>
.navbar {
  background:linear-gradient(180deg,rgb(49, 0, 0),rgb(136, 1, 1),rgb(192, 2, 2));
  height:60px;
}
.nav-link{
  color:white;
  margin:50px;
}
.nav-link:hover{
background-color: rgb(0, 0, 0);
}
</style>