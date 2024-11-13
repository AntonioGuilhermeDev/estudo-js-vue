<template>
  <div>
    <Message :msg="msg" v-show="msg" />
    <div>
      <form id="pizza-form" @submit="createPizza">
        <div class="input-container">
          <label for="name">Nome do Cliente:</label>
          <input
            type="text"
            id="name"
            name="name"
            v-model="name"
            placeholder="Digite seu nome"
            required
          />
        </div>
        <div class="input-container">
          <label for="massa">Escolha a massa:</label>
          <select name="massa" id="massa" v-model="massa" required>
            <option value="">Selecione a sua massa</option>
            <option v-for="massa in massas" :key="massa.id" :value="massa.tipo">
              {{ massa.tipo }}
            </option>
          </select>
        </div>
        <div class="input-container">
          <label for="sabor">Escolha o sabor da pizza:</label>
          <select name="sabor" id="sabor" v-model="sabor" required>
            <option value="">Selecione o sabor da pizza</option>
            <option
              v-for="sabor in sabores"
              :key="sabor.id"
              :value="sabor.tipo"
            >
              {{ sabor.tipo }}
            </option>
          </select>
        </div>
        <div id="opcionais-container" class="input-container">
          <label id="opcionais-title" for="opcionais"
            >Selecione os opcionais:</label
          >
          <div
            class="checkbox-container"
            v-for="opcional in opcionaisdata"
            :key="opcional.id"
          >
            <input
              type="checkbox"
              name="opcionais"
              v-model="opcionais"
              :value="opcional.tipo"
            />
            <span>{{ opcional.tipo }}</span>
          </div>
        </div>
        <div class="input-container">
          <input type="submit" class="submit-btn" value="Pedir Pizza" />
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import Message from "./message.vue";

export default {
  name: "PizzaForm",
  components: {
    Message,
  },
  data() {
    return {
      massas: null,
      sabores: null,
      opcionaisdata: null,
      name: null,
      massa: null,
      sabor: null,
      opcionais: [],
      status: "Solicitado",
      msg: null,
    };
  },
  methods: {
    async getIngredients() {
      const req = await fetch("http://localhost:3000/ingredientes");
      const data = await req.json();

      this.massas = data.massas;
      this.sabores = data.sabores;
      this.opcionaisdata = data.opcionais;
    },
    async createPizza(e) {
      e.preventDefault();

      const data = {
        name: this.name,
        sabor: this.sabor,
        massa: this.massa,
        opcionais: Array.from(this.opcionais),
        status: "Solicitado",
      };

      const dataJson = JSON.stringify(data);

      const req = await fetch("http://localhost:3000/pizzas", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: dataJson,
      });
      const res = await req.json();

      this.msg = `Pedido realizado com sucesso!`;

      setTimeout(() => (this.msg = ""), 4000);

      console.log(res);
      this.name = "";
      this.massa = "";
      this.sabor = "";
      this.opcionais = "";
    },
  },
  mounted() {
    this.getIngredients();
  },
};
</script>

<style scoped>
#pizza-form {
  max-width: 400px;
  margin: 0 auto;
}

.input-container {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
}

label {
  font-weight: bold;
  margin-bottom: 15px;
  color: #222;
  padding: 5px 10px;
  border-left: 4px solid #fcab03;
}

input,
select {
  padding: 5px 10px;
  width: 100%;
}

#opcionais-container {
  flex-direction: row;
  flex-wrap: wrap;
}

#opcionais-title {
  width: 100%;
}

.checkbox-container {
  display: flex;
  align-items: flex-start;
  width: 50%;
  margin-bottom: 20px;
}

.checkbox-container span,
.checkbox-container input {
  width: auto;
  align-self: center;
}

.checkbox-container span {
  margin-left: 6px;
  font-weight: bold;
}

.submit-btn {
  background-color: #ff6347;
  color: #fff;
  font-weight: bold;
  border: 1px solid #222;
  font-size: 16px;
  margin: 0 auto;
  cursor: pointer;
  transition: 0.5s;
}

.submit-btn:hover {
  background-color: transparent;
  color: #333;
}
</style>
