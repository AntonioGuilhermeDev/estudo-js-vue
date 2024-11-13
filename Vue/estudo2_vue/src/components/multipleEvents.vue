<template>
  <div>
    <button
      @click="
        first();
        second();
      "
    >
      Ativar Multiplos Eventos
    </button>
    <p>{{ multiple_events }}</p>
  </div>
</template>

<script>
export default {
  name: "MultipleEvents",
  data() {
    return {
      multiple_events: "",
    };
  },
  methods: {
    first() {
      this.multiple_events = "Primeiro Evento Atiivado";
    },
    second() {
      setTimeout(() => (this.multiple_events = "Segundo Evento Ativado"), 2000);
    },
  },
};
</script>

<style scoped>
div {
  margin: 100px;
}
</style>
