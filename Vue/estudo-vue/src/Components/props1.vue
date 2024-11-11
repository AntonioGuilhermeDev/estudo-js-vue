<!--
  PROPS -> Propriedades.

  A utilizacao de Props permite a comunicacao entre componentes, podendo enviar informações estaticas, variáveis e funções
  -->

<script setup>
// Importar componente

import Prop2 from './props2.vue'

// Variaveis -- Props Dinamicos
let city = 'Fortaleza';
let cities = ['Sao Paulo', 'Curitiba', 'Brasilia', 'Florianopolis']

//Funcao
  const msg = () =>{
    alert('Funcao criada no componente: Props1')
  }

</script>

<template>
  <prop2 name="Guilherme" age="18" :city="city" :cities="cities" :message="msg"></prop2>
</template>