<template>
  <div>
    <h2>Login</h2>
    <form action="" @submit="enviarFormulario($event)">
      <div>
        <input type="text" v-model="name" placeholder="Name" required />
      </div>
      <div>
        <input
          type="password"
          v-model="password"
          placeholder="Password"
          required
        />
      </div>
      <div>
        <input type="submit" />
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "Formulario",
  data() {
    return {
      name: "",
      password: "",
    };
  },
  methods: {
    enviarFormulario(e) {
      e.preventDefault();
      console.log("Enviado");

      const name = this.name;
      const password = this.password;

      console.log("O nome e: " + name);
      console.log("A senha e: " + password);
    },
  },
};
</script>
