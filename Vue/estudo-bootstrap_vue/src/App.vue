<template>
  <div id="app">
    <b-button v-b-modal.meu-modal>Abrir Modal</b-button>
    <b-modal id="meu-modal" title="BootStrapVue">Eu sou um modal</b-modal>
  </div>
</template>

<script>
import navbarComponent from "./components/navbarComponent.vue";
import sidebarComponent from "./components/sidebarComponent.vue";

export default {
  name: "App",
  components: {
    navbarComponent,
    sidebarComponent,
  },
};
</script>

<style></style>
