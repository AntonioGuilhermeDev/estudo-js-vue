<!--Script-->
<script setup>
  import {ref} from "vue";

  let text = ref('');
</script>

<!--HTML-->
<template>
  <input type="text" v-model="text" placeholder="Insira um texto"/>
  <p>{{text}}</p>
</template>