<!--SCRIPT-->
<script setup>
  const submitValidate = (event) => {
    alert("Formulario enviado")
    event.preventDefault()
  };
</script>

<!--HTML-->
<template>
  <form action="https://www.google.com" @submit="submitValidate">
    <input type="submit" value="Enviar"/>
  </form>
</template>
