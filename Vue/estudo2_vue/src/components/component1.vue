<template>
  <div>
    <h1>Hello World!</h1>
    <p>Olá, me chamo {{ name }} e tenho {{ age }} anos</p>
  </div>
</template>

<script>
export default {
  name: "Component1",
  data() {
    return {
      name: "Guilherme",
      age: 18,
    };
  },
};
</script>
