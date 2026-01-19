<template>
  <div class="mangoes">
    <h2>{{ name }}</h2>
    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: 'Fruits',
      message: 'I love mangoes'
    }
  }
};
</script>

<style>
  .mangoes {
    border: dashed black 1px;
    display: inline-block;
    margin: 10px;
    padding: 10px;
    background: linear-gradient(to right, yellow, lightgreen);
  }
</style>