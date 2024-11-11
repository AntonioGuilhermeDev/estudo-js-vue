<!--SCRIPT-->
<script setup>

const msg = () => {alert("Hello World!")};

</script>

<!--HTML-->
<template>
  <input type="text" @keyup.enter="msg">
</template>

