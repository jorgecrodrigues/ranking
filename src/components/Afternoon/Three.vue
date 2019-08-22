<template>
  <div class="three">
    <h1>CDF Transportes</h1>
  </div>
</template>

<script>
  export default {
    name: 'Three'
  };
</script>

<style scoped>
  .three {
    padding: .4rem 2rem;
    width: 100%;
    background: #55efc4;
    background-image: url("../../assets/svgs/bg.svg");
    background-size: cover;
    border: 10px solid white;
    border-radius: 5px;
    text-transform: uppercase;
    cursor: pointer;
    transition: letter-spacing, background-position 200ms ease-in-out;
  }

  .three:hover {
    background-position: center right;
    letter-spacing: 15px;
    font-weight: 900;
  }

  .three:active {
    transform: scale(0.98);
  }
</style>
