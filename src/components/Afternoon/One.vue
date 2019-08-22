<template>
  <div class="one">
    <h1>Sir, Barman</h1>
  </div>
</template>

<script>
  export default {
    name: 'One'
  };
</script>

<style scoped>
  .one {
    padding: .4rem 2rem;
    width: 100%;
    background: #74b9ff;
    background-image: url("../../assets/svgs/bg.svg");
    background-size: cover;
    border: 10px solid white;
    border-radius: 5px;
    text-transform: uppercase;
    cursor: pointer;
    transition: letter-spacing, background-position 200ms ease-in-out;
  }

  .one:hover {
    background-position: center right;
    letter-spacing: 15px;
    font-weight: 900;
  }

  .one:active {
    transform: scale(0.98);
  }
</style>
