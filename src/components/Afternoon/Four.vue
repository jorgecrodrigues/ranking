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
    margin: 15px;
    padding: .4rem 2rem;
    background: #fdcb6e;
    background-image: url("../../assets/svgs/bg.svg");
    background-size: cover;
    border: 10px solid white;
    border-radius: 5px;
    letter-spacing: 10px;
    cursor: pointer;
    transition: letter-spacing 200ms ease-in-out;
  }

  .four:hover {
    letter-spacing: 15px;
  }

  .four:active {
    transform: scale(0.98);
  }
</style>
