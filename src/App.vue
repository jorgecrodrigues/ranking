<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
  html,
  body {
    height: 100%;
  }

  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    background-image: url("assets/svgs/one.svg");
    background-size: cover;
    background-position: center right;
    font-family: 'Lato', sans-serif;
  }

  #app {
    height: 100%;
  }
</style>
