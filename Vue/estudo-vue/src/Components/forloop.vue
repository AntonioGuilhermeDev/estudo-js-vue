<!--Script-->
<script setup>
  // Array
  const langs = ['Javascript', 'TypeScript', 'Go', 'Ruby', 'Dart'];
</script>

<!--HTML-->
<template>
  <ul>
    <li v-for="lang in langs">{{lang}}</li>
  </ul>
</template>