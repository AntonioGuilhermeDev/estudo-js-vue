
<template>
  <div class="search-bar">
    <b-container class="m-5 d-flex justify-content-center">
      <b-form @submit.prevent="searchBooks" class="d-flex w-75 align-items-center">
        <b-form-group label="Buscar Livros" class="flex-grow-1 h2 mb-0">
          <b-form-input
              v-model="query"
              placeholder="Digite o título ou autor do livro"
              size="sm"
              class="mr-2"
          ></b-form-input>
        </b-form-group>
        <button type="submit" class="btn btn-primary ml-2 align-self-center rounded-4">
          Buscar
        </button>
      </b-form>
    </b-container>
    <div class="results mt-5">
      <b-container>
        <div v-if="books.length === 0" class="text-center">
          <p>Nenhum resultado encontrado :(</p>
        </div>
        <div v-else>
          <b-row>
            <b-col>
              v-for="(book, index) in books"
              :key="index"
              cols="12"
              md="6"
              lg="4"
              class="mb-4"
            >
              <book-card :book="book" />
            </b-col>
          </b-row>
        </div>
      </b-container>
    </div>
  </div>

</template>

<script>

import axios from 'axios'
import BookCard from './bookCard.vue'

export default {

  name: 'BookSearch',
  data() {
    return {
      query: '',
    }
  },
  components: {
    BookCard,
  },
  methods: {
  }
}

</script>


<style scoped>

button {
  height: calc(1.5em + 0.75rem + 2px);
  margin-top: 50px;
}
</style>