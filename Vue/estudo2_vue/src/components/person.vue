<template>
  <div>
    <h2>Essa e a descricao da pessoa: {{ name }}</h2>
    <info :email="email"></info>
  </div>
</template>

<script>
import Info from "./info.vue";

export default {
  name: "Person",
  components: {
    Info,
  },
  data() {
    return {
      name: "Guilherme",
      email: "guilherme@gmail.com",
    };
  },
};
</script>
