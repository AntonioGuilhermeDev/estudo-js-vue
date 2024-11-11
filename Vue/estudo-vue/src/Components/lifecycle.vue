<!----
  Lifecycle: Sao acoes que podem acontecer em tres etapas de um componente:

   -- antes da criacao
   -- Durante a criacao
   -- Apos a criacao
-->




<script setup>

  //Importacoes
  import {onMounted, ref} from "vue";


  let texto = ref('Hello World!');

  //Lifecyvle onMounted
  onMounted(() => {
    setTimeout(() => {
        texto.value = 'Alterando texto!';
    }, 3000);
  });
</script>

<template>
  <h1>{{ texto }}</h1>
</template>

<style scoped>

</style>