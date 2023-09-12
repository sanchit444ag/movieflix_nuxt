<template>
    <section class="search-section">
        <div class="container">
            <div class="flex">

                <input class="input" type="text" placeholder=" Search movie.. " v-model="searchInput"
                    @keydown.enter="$emit('searchMovie', searchInput)" />
                <button class="btnbtnbtn" @click="$emit('searchMovie', searchInput)">Search</button>

            </div>
            <span v-if="searchError" class="error" role="aleart">
            
                Error!!....this field is required
            </span>
        </div>
    </section>
</template>
<script setup>
const searchInput = ref("");
defineProps(["searchError"])
// const search = () => {
//   if (searchInput.value.trim() !== "") {
//     $emit('searchMovie', searchInput.value.trim());
//   } else {
//     searchError.value = true;
//   }
// };
</script>
<style scoped>
.error {
color: black;
font-size: larger;
background-color: red;
}

.search-section {
    padding-top: 19px;
    padding-bottom: 5px;
    background: linear-gradient(180deg, rgb(49, 0, 0), rgb(136, 1, 1), rgb(192, 2, 2));
    height:110px;
}
.input {
  border-radius: 10px;
  margin-top:10px;
  outline: 2px solid white;
  border: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  background-color: #e2e2e2;
  outline-offset: 3px;
  padding: 10px 1rem;
  transition: 0.25s;
  border-radius: 20px;
  width: 80%;
  height: 50px;
  padding: 20px;
  font-size: larger;
  color: rgb(136, 1, 1);
}

.input:focus {
  outline-offset: 8px;
  background-color: #fff
}

.btnbtnbtn {
  position: relative;
  left:4%;
  width: 130px;
  height: 45px;
  border-radius: 45px;
  border: none;
  background-color: rgba(8, 8, 8, 0.199);
  color: white;
  box-shadow: 0px 10px 10px rgb(235, 7, 7) inset,
  0px 5px 10px rgba(7, 0, 0, 0.671),
  0px -10px 10px rgb(0, 0, 3) inset;
  font-family: 'Times New Roman', Times, serif;
  font-weight: 600;
  font-size: 20px;
}
.btnbtnbtn:hover {
  animation: jello-horizontal 0.9s both;
}

@keyframes jello-horizontal {
  0% {
    transform: scale3d(1, 1, 1);
  }

  30% {
    transform: scale3d(1.25, 0.75, 1);
  }

  40% {
    transform: scale3d(0.75, 1.25, 1);
  }

  50% {
    transform: scale3d(1.15, 0.85, 1);
  }

  65% {
    transform: scale3d(0.95, 1.05, 1);
  }

  75% {
    transform: scale3d(1.05, 0.95, 1);
  }

  100% {
    transform: scale3d(1, 1, 1);
  }
}
</style>