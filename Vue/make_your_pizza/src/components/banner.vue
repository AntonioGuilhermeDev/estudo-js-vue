<template>
  <div class="main-banner">
    <h1>Make Your Pizza</h1>
  </div>
</template>

<script>
export default {
  name: "Banner",
};
</script>

<style scoped>
.main-banner {
  background-image: url("../assets/background.jpg");
  background-position: left;
  background-size: cover;
  height: 600px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
}

.main-banner h1 {
  text-align: center;
  color: #333;
  font-size: 80px;
  font-weight: bold;
  padding: 20px 40px;
}
</style>
