<template>
  <div class="card">
    <h1>Alimenta Fácil</h1>
  </div>
</template>

<script>
  export default {
    name: 'Two'
  };
</script>

<style scoped>
  h1 {
    margin: .5rem;
  }

  .card {
    padding: .4rem 2rem;
    width: 100%;
    background: #fdcb6e;
    background-image: url("../../assets/svgs/bg.svg");
    background-size: cover;
    border: 10px solid white;
    border-radius: 5px;
    text-transform: uppercase;
    cursor: pointer;
    transition: letter-spacing, background-position 200ms ease-in-out;
  }

  .card:hover {
    background-position: center right;
    letter-spacing: 5px;
    font-weight: 900;
  }

  .card:active {
    transform: scale(0.98);
  }
</style>
