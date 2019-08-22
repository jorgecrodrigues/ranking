<template>
  <div class="afternoon bg-pan-left">
    <div class="box">
      <One/>
      <Two/>
      <three/>
      <Four/>
    </div>
  </div>
</template>

<script>
  import One from '@/components/Afternoon/One.vue';
  import Two from '@/components/Afternoon/Two.vue';
  import Three from '@/components/Afternoon/Three.vue';
  import Four from '@/components/Afternoon/Four.vue';

  export default {
    name: 'Afternoon',
    components: {
      One,
      Two,
      Three,
      Four
    },
  };
</script>

<style scoped>
  .afternoon {
    height: 100%;
    background-image: url("../assets/svgs/one.svg");
    background-size: cover;
    background-position: center right;
  }

  .box {
    margin-left: 50%;
    width: 50%;
    min-height: 100%;
    display: flex;
    flex-direction: column;
    justify-items: flex-end;
  }
</style>
