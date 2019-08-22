<template>
  <div class="night">
    <div class="box">
      <div class="box-left">
        <h1 class="question">
          Qual destes negócios você acredita que tem mais potencial para ser lançado no mercado?
        </h1>
      </div>
      <div class="box-right">
        <One/>
        <Two/>
        <Three/>
        <Four/>
        <Five/>
        <Six/>
        <Seven/>
        <Eight/>
        <Nine/>
      </div>
    </div>
  </div>
</template>

<script>
  import One from '@/components/Night/One.vue';
  import Two from '@/components/Night/Two.vue';
  import Three from '@/components/Night/Three.vue';
  import Four from '@/components/Night/Four.vue';
  import Five from '@/components/Night/Five.vue';
  import Six from '@/components/Night/Six.vue';
  import Seven from '@/components/Night/Seven.vue';
  import Eight from '@/components/Night/Eight.vue';
  import Nine from '@/components/Night/Nine.vue';

  export default {
    name: 'Night',
    components: {
      One,
      Two,
      Three,
      Four,
      Five,
      Six,
      Seven,
      Eight,
      Nine
    }
  };
</script>

<style scoped>
  .night {
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

  .box-right {
    width: 45%;
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
