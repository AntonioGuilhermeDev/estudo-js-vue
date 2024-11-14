<template>
  <div id="pizza-table">
    <Message :msg="msg" v-show="msg" />
    <div>
      <div id="pizza-table-heading">
        <div class="order-id"></div>
        <div>Cliente</div>
        <div>Massa</div>
        <div>Sabor</div>
        <div>Opcionais</div>
        <div>Ações</div>
      </div>
    </div>
    <div id="pizza-table-rows">
      <div id="pizza-table-row" v-for="pizza in pizzas" :key="pizza.id">
        <div class="order-number">{{ pizza.id }}</div>
        <div>{{ pizza.name }}</div>
        <div>{{ pizza.massa }}</div>
        <div>{{ pizza.sabor }}</div>
        <div>
          <ul>
            <li v-for="(opcional, index) in pizza.opcionais" :key="index">
              {{ opcional }}
            </li>
          </ul>
        </div>
        <div>
          <select
            name="status"
            class="status"
            @change="updatedPizza($event, pizza.id)"
          >
            <option value="">Selecione</option>
            <option
              v-for="s in status"
              :key="s.id"
              :value="s.tipo"
              :selected="pizza.status === s.tipo"
            >
              {{ s.tipo }}
            </option>
          </select>
          <button class="delete-btn" @click="deletePizza(pizza.id)">
            Cancelar
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Message from "./message.vue";

export default {
  name: "Dashboard",
  data() {
    return {
      pizzas: null,
      pizza_id: null,
      status: [],
      msg: null,
    };
  },
  components: {
    Message,
  },
  methods: {
    async getPedidos() {
      const req = await fetch("http://localhost:3000/pizzas");

      const data = await req.json();

      this.pizzas = data;

      console.log(this.pizzas);

      //Resgatar os status
      this.getStatus();
    },
    async getStatus() {
      const req = await fetch("http://localhost:3000/status");

      const data = await req.json();

      this.status = data;

      console.log(data);
    },
    async deletePizza(id) {
      const req = await fetch(`http://localhost:3000/pizzas/${id}`, {
        method: "DELETE",
      });
      const res = await req.json();

      this.msg = `Pedido cancelado com sucesso!`;

      setTimeout(() => (this.msg = ""), 4000);

      this.getPedidos();
    },
    async updatedPizza(event, id) {
      const option = event.target.value;

      const dataJson = JSON.stringify({ status: option });

      const req = await fetch(`http://localhost:3000/pizzas/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: dataJson,
      });

      const res = await req.json();

      this.msg = `Pedido foi atualizado para ${res.status}!`;

      setTimeout(() => (this.msg = ""), 4000);
    },
  },
  mounted() {
    this.getPedidos();
  },
};
</script>

<style scoped>
#pizza-table {
  max-width: 1200px;
  margin: 0 auto;
}

#pizza-table-heading,
#pizza-table-rows,
#pizza-table-row {
  display: flex;
  flex-wrap: wrap;
}

#pizza-table-heading {
  font-weight: bold;
  padding: 12px;
  border-bottom: 3px solid #131;
}

#pizza-table-heading div,
#pizza-table-row div {
  width: 19%;
}

#pizza-table-row {
  width: 100%;
  padding: 12px;
  border-bottom: 1px solid #131;
}

#pizza-table-heading .order-id,
#pizza-table-row .order-number {
  width: 5%;
}

select {
  padding: 12px 6px;
  margin-right: 12px;
}

.delete-btn {
  background-color: #222;
  color: #fcab03;
  font-weight: bold;
  border: 2px solid #222;
  padding: 8px;
  margin: 0 auto;
  cursor: pointer;
  transition: 0.3s;
}

.delete-btn:hover {
  background-color: transparent;
  color: #333;
}
</style>
