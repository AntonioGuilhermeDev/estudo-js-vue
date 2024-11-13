<template>
  <div>
    <p>{{ email }}</p>
    <p v-if="esta_trabalhando">Estou trabalhando no momento.</p>
    <p v-else>Estou em busca de novas oportunidades.</p>
    <p>Utilizo as seguintes tecnologias backend:</p>
    <ul>
      <li v-for="(lang, index) in backend_technologies" v-bind:key="index">
        {{ lang }}
      </li>
    </ul>

    <p>Utilizo as seguintes tecnologias para Frontend</p>
    <ul>
      <li v-for="lang in frontend_technologies" :key="lang.id">
        {{ lang.language }}
      </li>
    </ul>

    <p>
      Para acessar meu portfolio
      <a target="_blank" v-bind:href="link">Clique Aqui!</a>
    </p>
    <div>
      <button @click="showEmail">{{ textoBotao }}</button>
    </div>
    <p v-show="mostra_email">Email para contato: {{ email }}</p>
    <Picture></Picture>
  </div>
</template>

<script>
import Picture from "./Picture.vue";

export default {
  name: "info",
  components: {
    Picture,
  },
  props: {
    email: String,
  },
  data() {
    return {
      esta_trabalhando: false,
      mostra_email: true,
      link: "https://github.com/AntonioGuilhermeDev?tab=repositories",
      textoBotao: "Mostrar email",
      backend_technologies: ["Java", "C#", "Ruby"],
      frontend_technologies: [
        { id: 1, language: "HTML5" },
        { id: 2, language: "Css" },
        { id: 3, language: "Javascript" },
      ],
    };
  },
  methods: {
    showEmail() {
      this.mostra_email = !this.mostra_email;
      if (!this.mostra_email) {
        this.textoBotao = "Mostrar email";
      } else {
        this.textoBotao = "Esconder email";
      }
    },
  },
};
</script>
