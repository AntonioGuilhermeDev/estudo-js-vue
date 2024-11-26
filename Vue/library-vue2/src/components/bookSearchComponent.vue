
<template>
  <div class="search-bar">
    <b-container class="m-5 d-flex justify-content-center">
      <b-form @submit.prevent="searchBooks" class="d-flex w-75 align-items-center">
        <b-form-group label="Buscar Livros" class="flex-grow-1 h2 mb-0">
          <b-form-input
              v-model="query"
              placeholder="Digite o título do livro"
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
            <b-col
              v-for="(book, index) in paginatedBooks"
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
    <div class="overflow-auto mt-4">
      <b-pagination
          v-model="currentPage"
          :total-rows="books.length"
          :per-page="perPage"
          aria-controls="book-results"
          class="justify-content-center"
      ></b-pagination>
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
      books: [],
      currentPage: 1,
      perPage: 12,
    }
  },
  components: {
    BookCard,
  },
  computed: {
    paginatedBooks() {
      const start = (this.currentPage - 1) * this.perPage
      const end = start + this.perPage
      return this.books.slice(start, end)
    }
  },
  methods: {
    searchBooks() {
      if (!this.query.trim()) {
        this.books = [];
        return;
      }

      const formattedQuery = this.query.trim().replace(/\s+/g, '+');
      const url = `https://www.googleapis.com/books/v1/volumes?q=search+${formattedQuery}&maxResults=40`;

      axios.get(url)
          .then(response => {
            this.books = response.data.items || [];
            console.log(response.data.items);
          })
          .catch(error => {
            console.error("Erro ao buscar livros:", error);
            this.books = [];
          })
    }
  }
}

</script>


<style scoped>

button {
  height: calc(1.5em + 0.75rem + 2px);
  margin-top: 50px;
}
</style>