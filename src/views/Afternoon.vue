<template>
  <div class="afternoon bg-pan-left">
    <div class="box">
      <div class="box-left">
        <h1
          class="question"
        >Qual destes negócios você acredita que tem mais potencial para ser lançado no mercado?</h1>
      </div>
      <div class="box-right">
        <One v-on:click.native="enviarVoto('Sir-Barman')"/>
        <Two v-on:click.native="enviarVoto('TecSoc')"/>
        <three v-on:click.native="enviarVoto('CDF-Transportes')"/>
        <Four v-on:click.native="enviarVoto('NewFast')"/>
      </div>
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
    data() {
      return {
        jaVotou: false,
        equipes: {
          one: {
            nome: 'Sir-Barman',
            pontos: 0
          },
          two: {
            nome: 'TecSoc',
            pontos: 0
          },
          three: {
            nome: 'CDF-Transportes',
            pontos: 0
          },
          four: {
            nome: 'NewFast',
            pontos: 0
          }
        }
      };
    };
  },
  methods: {
    async;
    enviarVoto(opcao);
    {
      if (this.jaVotou) {
        // Corno já votou
        return;
      }

      let valorAntigo = (await firebase
        .database()
        .ref(opcao)
        .once('value')).val();

      try {
        this.jaVotou = true;
        await firebase
          .database()
          .ref(opcao)
          .once('value');
      )
  .val();


  this.pesquisarDados();
  } catch
  (e);
  {
    // Fudeo de vez
  }
  },
  async;
  pesquisarDados();
  {
    let one = this.equipes.one;

    firebase
      .database()
      .ref(one.nome)
      .once('value')
      .then(e => {
        e = e.val();
        one.pontos = e ? e : 0;
      });

    let two = this.equipes.two;

    firebase
      .database()
      .ref(two.nome)
      .once('value')
      .then(e => {
        e = e.val();
        two.pontos = e ? e : 0;
      });

    let three = this.equipes.three;

    firebase
      .database()
      .ref(three.nome)
      .once('value')
      .then(e => {
        e = e.val();
        three.pontos = e ? e : 0;
      });

    let four = this.equipes.four;

    firebase
      .database()
      .ref(four.nome)
      .once('value')
      .then(e => {
        e = e.val();
        four.pontos = e ? e : 0;
      });
  }
  },
  mounted();
  {
    this.pesquisarDados();
  }
  }
  ;
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
