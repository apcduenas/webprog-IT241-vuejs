<template>
  <div class="Buko">>

    <h2>{{ name }}</h2>
    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: 'GreenMango',
      message: 'I like GreenMango'
    }
  }
};
</script>

<style>
  .mango {
    border: dashed black 1px;
    display: inline-block;
    margin: 10px;
    padding: 10px;
    background-color: orange;
  }
</style>