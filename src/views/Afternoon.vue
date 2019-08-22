<template>
  <div class="afternoon">
    <div class="ranking" v-if="jaVotou || ranking">
      <div>
        <h3>{{this.equipes.one.nome}}</h3>
        <h2>{{this.equipes.one.pontos}}</h2>
      </div>
      <div>
        <h3>{{this.equipes.two.nome}}</h3>
        <h2>{{this.equipes.two.pontos}}</h2>
      </div>
      <div>
        <h3>{{this.equipes.three.nome}}</h3>
        <h2>{{this.equipes.three.pontos}}</h2>
      </div>
      <div>
        <h3>{{this.equipes.four.nome}}</h3>
        <h2>{{this.equipes.four.pontos}}</h2>
      </div>
    </div>
    <div class="box">
      <div class="box-left">
        <h1 class="question">
          Qual destes negócios você acredita que tem mais potencial para ser lançado no mercado? <br/>
          <small class="result" v-on:click="toogleRanking">Ver Ranking</small>
        </h1>
      </div>
      <div class="box-right" v-if="!jaVotou">
        <One v-on:click.native="enviarVoto('Sir-Barman')"/>
        <Two v-on:click.native="enviarVoto('TecSoc')"/>
        <three v-on:click.native="enviarVoto('CDF-Transportes')"/>
        <Four v-on:click.native="enviarVoto('NewFast')"/>
      </div>
      <div class="box-right" v-if="jaVotou">
        <h1>Obrigado!!!</h1>
        <span class="back" v-on:click="backToVote">Votar</span>
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
        ranking: false,
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
    },
    methods: {
      backToVote() {
        this.jaVotou = false;
        this.ranking = false;
      },
      toogleRanking() {
        this.ranking = !this.ranking;
      },
      async enviarVoto(opcao) {
        if (this.jaVotou) {
          // Corno já votou
          return;
        }

        this.jaVotou = true;
        let valorAntigo = (await firebase
          .database()
          .ref(opcao)
          .once('value')).val();

        try {
          await firebase
            .database()
            .ref(opcao)
            .set(++valorAntigo);

          await this.pesquisarDados();
        } catch (e) {
          // Fudeo de vez
        }
      },
      async pesquisarDados() {
        for (var prop in this.equipes) {
          let equipe = this.equipes[prop];
          firebase
            .database()
            .ref(equipe.nome)
            .once('value')
            .then(e => {
              e = e.val();
              equipe.pontos = e ? e : 0;
            });
        }
      }
    },
    mounted() {
      this.pesquisarDados();
    }
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

  .result {
    margin-top: 15px;
    display: inline-block;
    font-size: 18px;
    cursor: pointer;
  }

  .back {
    padding: .2rem 1rem .3rem 1rem;
    border: 1px solid;
    border-radius: 3px;
    font-size: 25px;
    font-weight: 900;
    display: inline-block;
    cursor: pointer;
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

  .ranking {
    bottom: 0;
    left: 0;
    padding: .5rem;
    background: white;
    text-transform: uppercase;
    position: fixed;
    display: flex;
  }

  .ranking div h2,
  .ranking div h3 {
    margin: 0 .5rem;
    font-size: 15px;
  }

  .ranking div h2 {
    font-size: 20px;
  }
</style>
