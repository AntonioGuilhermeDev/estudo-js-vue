<template>
  <div>
    <h1>Hello World!</h1>
    <p>Ola, me chamo {{ name }} e tenho {{ age }} anos</p>
    <MultipleEvents></MultipleEvents>
    <Reutilizacao></Reutilizacao>
    <Reutilizacao></Reutilizacao>
    <Reutilizacao></Reutilizacao>
    <Reutilizacao></Reutilizacao>
    <Reutilizacao></Reutilizacao>
    <Reutilizacao></Reutilizacao>
    <Reutilizacao></Reutilizacao>
  </div>
</template>

<script>
import MultipleEvents from "./multipleEvents.vue";
import Reutilizacao from "./reutilizacao.vue";

export default {
  name: "Component1",
  components: {
    MultipleEvents,
    Reutilizacao,
  },
  data() {
    return {
      name: "Guilherme",
      age: 18,
    };
  },
  methods: {},
};
</script>
