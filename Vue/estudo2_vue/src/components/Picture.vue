<template>
  <div>
    <img :src="avatar" :alt="descricao" />
  </div>
  <MudarImagem @mudar-imagem="trocarImagem"></MudarImagem>
</template>

<script>
import MudarImagem from "./mudarimg.vue";

export default {
  name: "Picture",
  components: {
    MudarImagem,
  },
  data() {
    return {
      avatar: "/public/img/avatar.png",
      descricao: "Imagem de perfil",
    };
  },
  methods: {
    trocarImagem() {
      console.log("opa");
    },
  },
};
</script>
