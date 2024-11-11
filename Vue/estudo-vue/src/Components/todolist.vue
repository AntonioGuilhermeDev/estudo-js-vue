<!--SCRIPT-->
<script setup>
import {ref} from "vue";

//Lista das Tarefas
const tasks = ref([]);

const newTask = ref("");

const addTask = () =>{
  if (newTask.value){
    tasks.value.push({ name: newTask.value, completed: false });
    newTask.value = "";
  }
}

const removeTask = (index) => {
  tasks.value.splice(index, 1);
};

</script>

<!--HTML-->
<template>
  <div>
    <h1>Lista de Tarefas</h1>

    <form @submit.prevent="addTask">
      <input v-model="newTask" @keydown.enter="addTask" placeholder="Adicionar uma tarefa"></input>
      <button type="submit">Adicionar</button>
    </form>
    <ul>
      <li v-for="(task, index) in tasks" :key="index" >
        <input type="checkbox" v-model="task.completed"/> <span>{{ task.name }}</span>
        <button @click="removeTask(index)">Remover</button>
      </li>
    </ul>

  </div>

</template>

<style scoped>

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Roboto, sans-serif;
}

div{
  text-align: center;
  background-color: lightgray;
  min-height: 400px;
  width: 500px;
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin: 0 auto;
  padding: 20px;
}

h1{
  margin-top: 20px;
  font-weight: bolder;
  font-size: 50px;
}

form{
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 20px;
}

input{
  height: 40px;
  border: 2px solid #000;
  border-radius: 15px;
  width: 70%;
  padding: 5px;
  font-size: 20px;
  font-weight: bold;
}

form > button{
  background-color: #8fac55;
  font-size: 18px;
  width: 20%;
  cursor: pointer;
}

ul{
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 80%;
  align-self: center;
  align-items: center;
  list-style: none;
}

ul > li{
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

li > span{
  font-size: 25px;
  font-weight: bold;
  margin: 0 15px;
}

li > button{
  background-color: red;
  font-size: 18px;
  width: auto;
  padding: 5px 10px;
  cursor: pointer;
  border-radius: 5px;
}

</style>

