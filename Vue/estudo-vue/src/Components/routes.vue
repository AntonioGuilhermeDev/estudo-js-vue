<script setup>
import {ref, computed} from "vue";
import Page1 from './page1.vue'
import Page2 from './page2.vue'
import PageError from './page3.vue'
import Todolist from "./todolist.vue";

const routes = {
  '/': Page1,
  '/page2': Page2,
  '/404': PageError,
  '/todo': Todolist
}

const referenceRoute = ref(window.location.hash)

window.addEventListener('hashchange', () => {
  referenceRoute.value = window.location.hash
});

const currentView = computed(() => {
  return routes[referenceRoute.value.slice(1) || '/'] || PageError
})

</script>

<template>
  <a href="#/">Pagina1</a>
  |
  <a href="#/page2">Pagina2</a>
  |
  <a href="#/todo">TodoList</a>

  <component :is="currentView" />
</template>

<style scoped>

</style>