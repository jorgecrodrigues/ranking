<template>
  <div class="four">
    <h1>NewFast</h1>
  </div>
</template>

<script>
  export default {
    name: 'Four'
  };
</script>

<style scoped>
  .four {
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

  .four:hover {
    background-position: center right;
    letter-spacing: 15px;
  }

  .four:active {
    transform: scale(0.98);
  }
</style>
