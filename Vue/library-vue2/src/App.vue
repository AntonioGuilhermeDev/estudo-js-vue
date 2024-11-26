<template>
  <div id="app">
    <Navbar></Navbar>
    <BookSearch></BookSearch>
  </div>
</template>

<script>

import Navbar from "./components/navbarComponent.vue";
import BookSearch from "./components/bookSearchComponent.vue";

export default {
  name: 'App',
  components: {
    Navbar,
    BookSearch,
  }
}
</script>

<style>

</style>


AIzaSyDBMbJvaBHZn_AVXwSUE5HZnuDFKfaY_Ek