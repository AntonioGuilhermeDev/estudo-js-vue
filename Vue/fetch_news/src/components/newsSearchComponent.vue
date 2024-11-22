<template>
  <div>
    <b-container class="m-5 d-flex justify-content-center">
      <b-form @submit.prevent="onSubmit" class="d-flex w-75">
        <b-form-group label="Buscar Noticias" class="flex-grow-1 h2">
          <b-form-input
            v-model="query"
            placeholder="Digite uma palavra-chave"
            size="sm"
            class="mr-2"
          ></b-form-input>
        </b-form-group>
        <b-button type="submit" variant="primary" size="sm" class="ml-2"
          >Buscar</b-button
        >
        <b-button
          @click="onRefreshClick"
          variant="success"
          size="sm"
          class="ml-2"
          >Atualizar</b-button
        >
      </b-form>
    </b-container>

    <b-container class="mt-4">
      <div v-if="errorMessage">
        <b-alert variant="danger" show> {{ errorMessage }} </b-alert>
      </div>
    </b-container>

    <b-container style="margin: 40px 180px">
      <div v-if="articles.length">
        <h3>Resultados da busca:</h3>
        <ul class="list-group">
          <li
            v-for="(article, index) in articles"
            :key="index"
            class="list-group-item"
          >
            <h5>{{ article.title }}</h5>
            <p>{{ article.description }}</p>
            <a :href="article.link" target="_blank">Leia Mais</a>
          </li>
        </ul>
      </div>
      <div v-else>
        <p>
          Nenhum resultado encontrado. Digite uma palavra-chave e clique em
          "Buscar" para começar.
        </p>
      </div>
    </b-container>
  </div>
</template>

<script>
import { api_Key } from "@/config";
import axios from "axios";

export default {
  name: "newsSearchBarComponent",
  data() {
    return {
      query: "",
      articles: [],
      lastQuery: "",
      errorMessage: "",
    };
  },
  methods: {
    onSubmit() {
      if (this.query.trim() === "") {
        this.errorMessage = "Por favor, insira uma palavra-chave para buscar.";
        return this.errorMessage;
      }
      this.fetchNews(this.query);
    },
    onRefreshClick() {
      this.refreshNews();
    },
    fetchNews(query) {
      const url = `https://newsdata.io/api/1/news?apikey=${api_Key}&q=${query}&country=br&language=pt`;
      try {
        axios.get(url).then((response) => {
          console.log(response.data);
          this.articles = response.data.results.map((article) => {
            if (article.description && article.description.length > 300) {
              article.description =
                article.description.substring(0, 300) + "...";
            }
            return article;
          });
          this.lastQuery = query;
          this.errorMessage = "";
          console.log("Notícias encontradas:", this.articles);
        });
      } catch (error) {
        if (error.response && error.response.status === 429) {
          this.errorMessage =
            "Muitas requisições. Por favor, tente novamente mais tarde.";
        } else {
          this.errorMessage = "Erro ao buscar notícias. Tente novamente.";
        }
        console.error("Erro ao buscar notícias:", error);
      }
    },
    async refreshNews() {
      if (this.lastQuery) {
        await this.fetchNews(this.lastQuery);
      } else {
        console.log("Nenhuma busca realizada para atualizar");
      }
    },
  },
};
</script>

<style scoped>
p {
  font-size: 20px;
}

.h2 {
  font-size: 30px;
}
.mt-4 {
  margin-top: 1.5rem;
}
.ml-2 {
  margin-right: 0.5rem;
  font-size: 10px;
  padding: 0;
}

.mr-2 {
  margin-right: 0.5rem;
}
.d-flex {
  display: flex;
}
.justify-content-center {
  justify-content: center;
}
.w-75 {
  width: 75%;
}
.flex-grow-1 {
  flex-grow: 1;
}
.mb-0 {
  margin-bottom: 0;
}
.btn-sm {
  padding: 1rem 0.5rem;
  font-size: 0.875rem;
}
</style>
