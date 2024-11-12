<template>
  <img :src="avatar" :alt="descricao" />
</template>

<script>
export default {
  name: "Picture",
  data() {
    return {
      avatar: "/img/usuario.png",
      descricao: "Imagem de perfil",
    };
  },
};
</script>
