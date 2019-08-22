<template>
  <div class="card">
    <h1>Softlab</h1>
  </div>
</template>

<script>
  export default {
    name: 'Nine'
  };
</script>

<style scoped>
  h1 {
    margin: .5rem;
  }

  .card {
    padding: .1rem 2rem;
    width: 100%;
    background: #d63031;
    background-image: url("../../assets/svgs/bg.svg");
    background-size: cover;
    border: 2px solid white;
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
