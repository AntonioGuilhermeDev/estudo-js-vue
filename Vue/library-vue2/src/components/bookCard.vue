<template>
  <b-card class="book-card" :title="book.volumeInfo.title">
    <b-card-img
      :src="book.volumeInfo.imageLinks.thumbnail || placeholderImage"
      alt="capa do livro"
      class="mb-3"
    >
    </b-card-img>
    <b-card-text>
      <p><strong>Autores:</strong> {{ authors }}</p>
      <p><strong>Descrição</strong> {{ shortDescription }}</p>
    </b-card-text>
    <b-button
        v-if="book.saleInfo.buyLink"
        :href="book.saleInfo.buyLink"
        target="_blank"
        variant="success"
        class="mt-2"
    >
      Comprar
    </b-button>
  </b-card>
</template>

<script>
  export default {
    name: 'BookCard',
    props: {
      book: {
        book: Object,
        required: true,
      },
    },
    computed: {
      authors () {
        return this.book.volumeInfo.authors?.join(', ') || 'Autor Desconhecido';
      },
      shortDescription () {
        const desc = this.book.volumeInfo.description || 'Sem descrição disponivel'
        return desc.length > 100 ? desc.slice(0, 100) + "...": desc;
      },
      placeholderImage () {
        return 'https://via.placeholder.com/128x192?text=Sem+Imagem';
      }
    }
  }
</script>

<style scoped>
.book-card {
  width: 100%;
  height: 100%;
  text-align: center;
}
b-card-img {
  max-height: 100px;
  object-fit: contain;
}
</style>