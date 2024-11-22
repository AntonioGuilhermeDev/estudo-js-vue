<template>
  <div id="app">
    <navbar-component></navbar-component>
    <newsSearchComponent :articles="articles"></newsSearchComponent>
  </div>
</template>

<script>
import navbarComponent from "./components/navbarComponent.vue";
import newsSearchComponent from "./components/newsSearchComponent.vue";

export default {
  name: "App",
  components: {
    navbarComponent,
    newsSearchComponent,
  },
  data() {
    return {
      articles: [],
      lastQuery: "",
    };
  },
  methods: {},
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
