<script setup>
 //Obter props

const props = defineProps(['name', 'age', 'city', 'cities', 'message'])
</script>

<template>
  <h1>Nome: {{ name }}</h1>
  <h2>Idade: {{ age }}</h2>
  <h2>Cidade: {{ city }}</h2>

  <ul>
    <li v-for="city of cities">{{ city }}</li>
  </ul>

  <button @click="message">Clique Aqui!</button>
</template>
