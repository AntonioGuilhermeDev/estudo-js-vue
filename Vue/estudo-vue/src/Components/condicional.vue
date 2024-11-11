<!--Script-->
<script setup>

  // Variaveis
  let display = true;
  let average = 8;

</script>

<!--HTML-->

<template>
  <h1 v-if="display">Hello World!</h1>

  <p v-if="average >=7">Aprovado(a)</p>
  <p v-else-if="average >=5">Em Recuperação.</p>
  <p v-else>Reprovado(a)</p>
</template>
