<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
      </NuxtLayout>
  </div>
</template>
<style>
.page-enter-active,
.page-Leave-active {
  transition: all 0.4s;
}
.page-Leave-to {
  filter: grayscale(3);
}

</style>
