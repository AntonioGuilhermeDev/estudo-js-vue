<template>
  <Navbar></Navbar>
  <component1></component1>
  <Lifecycle></Lifecycle>
  <Person></Person>
  <formulario></formulario>
</template>

<script>
import Component1 from "./components/component1";
import Lifecycle from "./components/LifeCycle.vue";
import Person from "./components/person.vue";
import Navbar from "./components/navbar.vue";
import Formulario from "./components/form.vue";

export default {
  name: "App",
  components: {
    Component1,
    Lifecycle,
    Person,
    Navbar,
    Formulario,
  },
};
</script>

<style>
* {
  padding: 0;
  box-sizing: border-box;
}
</style>
