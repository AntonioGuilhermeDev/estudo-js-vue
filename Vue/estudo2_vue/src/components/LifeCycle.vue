<template>
  <h1>Olá meu nome e {{ name }}</h1>
</template>

<script>
export default {
  name: "LifeCycle",
  data() {
    return {
      name: "sei la",
    };
  },
  created() {
    setTimeout(() => {
      this.name = "Guilherme";
    }, 2000);
  },
  mounted() {
    setTimeout(() => {
      this.name = "Antonio";
    }, 1000);
  },
};
</script>
