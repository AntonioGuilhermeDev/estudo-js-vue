<template>
  <b-card class="book-card" :title="book.title">
    <b-card-img></b-card-img>
  </b-card>
</template>

<script>
  export default {
    name: 'BookCard',
    props: {
      book: {
        book: Object,
      }
    }
  }
</script>

<style scoped>

</style>