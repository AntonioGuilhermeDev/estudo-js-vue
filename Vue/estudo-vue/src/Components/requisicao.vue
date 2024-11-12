<script setup>
  import {onMounted, ref} from "vue";

  let vetor = ref([]);

  onMounted(() => {
    fetch('https://jsonplaceholder.typicode.com/posts/')
        .then(res => res.json())
        .then(res => vetor.value = res)
  });

</script>

<template>
  <h1>Requisição</h1>

  <table>
    <tr v-for="v in vetor">
      <td> {{ v.userId}}</td>
      <td><{{ v.id }}</td>
      <td>{{ v.title }}</td>
      <td>{{v.body}}</td>
    </tr>
  </table>
</template>
