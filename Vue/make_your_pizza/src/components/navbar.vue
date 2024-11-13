<template>
  <div id="nav">
    <router-link to="/" id="logo-url">
      <img :src="logo" :alt="alt" id="logo" />
    </router-link>
    <router-link to="/">Home</router-link>
    <router-link to="/pedidos">Pedidos</router-link>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  props: ["logo", "alt"],
};
</script>

<style scoped>
#nav {
  display: flex;
  background-color: #8fac55;
  border-bottom: 5px solid #131;
  padding: 15px 50px;
  font-size: 20px;
  align-items: center;
  justify-content: flex-end;
}

#nav #logo-url {
  margin: auto;
  margin-left: 0;
}

#logo {
  height: 70px;
  width: 70px;
}

#nav a {
  color: #ffe39f;
  text-decoration: none;
  margin: 12px;
  transition: 0.5s;
  font-weight: bold;
}
#nav a:hover {
  color: #fff;
}
</style>
