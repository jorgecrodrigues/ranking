<template>
  <div class="afternoon bg-pan-left">
    <div class="box">
      <One v-on:click.native="enviarVoto('Sir-Barman')"/>
      <Two v-on:click.native="enviarVoto('TecSoc')"/>
      <three v-on:click.native="enviarVoto('CDF-Transportes')"/>
      <Four v-on:click.native="enviarVoto('NewFast')"/>
    </div>
  </div>
</template>

<script>
  import firebase from 'firebase';
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
    data(){
      return{
        jaVotou: false
      }
    },
    methods:{
      async enviarVoto(opcao){

        if(jaVotou){
          // Corno já votou
          return;
        }
        
        let valorAntigo = await firebase.database()
          .ref(opcao)
          .once('value');
        
        valorAntigo = valorAntigo ? valorAntigo : 0;

        try{
          await firebase.database()
            .ref(opcao)
            .set(++valorAntigo);
          // Sucesso

          jaVotou = true;
        }catch(e){
          // Fudeo de vez 

        }
      }
    }
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
