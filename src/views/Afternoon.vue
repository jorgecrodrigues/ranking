<template>
  <div class="afternoon bg-pan-left">
    <div class="box">
      <div class="box-left">
        <h1 class="question">
          Qual destes negócios você acredita que tem mais potencial para ser lançado no mercado?
        </h1>
      </div>
      <div class="box-right">
        <One/>
        <Two/>
        <three/>
        <Four/>
      </div>
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
  }

  .question {
    width: 60%;
    padding: 5rem;
    background: rgba(255, 255, 255, 0.95);
    border-radius: 10px;
    font-size: 3rem;
    color: black;
  }

  .box {
    min-height: 100%;
    display: flex;
  }

  .box-left,
  .box-right {
    width: 50%;
  }

  .box-left {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .box-right {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    flex-direction: column;
  }
</style>
