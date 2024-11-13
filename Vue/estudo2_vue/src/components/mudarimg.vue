<template>
  <div>
    <button @click="$emit('mudarImagem')">Mudar Imagem</button>
  </div>
</template>

<script>
export default {
  name: "MudarImagem",
  emits: ["mudarImagem"],
};
</script>
