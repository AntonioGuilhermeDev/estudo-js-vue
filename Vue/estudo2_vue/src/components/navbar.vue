<template>
  <div class="nav-container">
    <ul class="nav">
      <li class="nav-item">Home</li>
      <li class="nav-item">Sobre nos</li>
      <li class="nav-item">FAQ</li>
      <li class="nav-item">Contatos</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style scoped>
.nav {
  background: #8fac55;
  height: 50px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  list-style: none;
  align-items: center;
}

.nav-item {
  cursor: pointer;
}
</style>
