<template>
    <div class="responsive">
      <navBar />
      <hero />

       <slot></slot> 
       <FooterHello />
    </div>
</template>
<script setup>
</script>
<style scoped>
@media (max-width: 600px) {
  .responsive {
    width: 100%;
  }
}
</style>
