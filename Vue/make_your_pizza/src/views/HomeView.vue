<template>
  <Banner />
  <div class="main-container">
    <h1>Monte sua Pizza:</h1>
    <Pizzaform />
  </div>
</template>

<script>
import Banner from "../components/banner.vue";
import Pizzaform from "../components/pizzaform.vue";

export default {
  name: "Home",
  components: {
    Banner,
    Pizzaform,
  },
};
</script>

<style scoped></style>
