<!--Script-->
<script setup>
  let validation = true;
</script>

<!--Css-->
<style scoped>
  .ok{color: #8fac55}

  .error{color: firebrick}
</style>


<!--HTML-->
<template>
  <p :class="validation ? 'ok' : 'error'">Validado</p>
</template>

