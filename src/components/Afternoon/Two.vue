<template>
  <div class="two">
    <h1>TecSoc</h1>
  </div>
</template>

<script>
  export default {
    name: 'Two'
  };
</script>

<style scoped>
  .two {
    padding: .4rem 2rem;
    width: 100%;
    background: #ff7675;
    background-image: url("../../assets/svgs/bg.svg");
    background-size: cover;
    border: 10px solid white;
    border-radius: 5px;
    text-transform: uppercase;
    cursor: pointer;
    transition: letter-spacing, background-position 200ms ease-in-out;
  }

  .two:hover {
    background-position: center right;
    letter-spacing: 15px;
    font-weight: 900;
  }

  .two:active {
    transform: scale(0.98);
  }
</style>
