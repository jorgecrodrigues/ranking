<template>
  <div class="night">
    <div class="ranking" v-if="jaVotou">
      <div>
        <h2>{{this.equipes.one.nome}}</h2>
        <h3>{{this.equipes.one.pontos}}</h3>
      </div>
      <div>
        <h2>{{this.equipes.two.nome}}</h2>
        <h3>{{this.equipes.two.pontos}}</h3>
      </div>
      <div>
        <h2>{{this.equipes.three.nome}}</h2>
        <h3>{{this.equipes.three.pontos}}</h3>
      </div>
      <div>
        <h2>{{this.equipes.four.nome}}</h2>
        <h3>{{this.equipes.four.pontos}}</h3>
      </div>
      <div>
        <h2>{{this.equipes.five.nome}}</h2>
        <h3>{{this.equipes.five.pontos}}</h3>
      </div>
      <div>
        <h2>{{this.equipes.six.nome}}</h2>
        <h3>{{this.equipes.six.pontos}}</h3>
      </div>
      <div>
        <h2>{{this.equipes.seven.nome}}</h2>
        <h3>{{this.equipes.seven.pontos}}</h3>
      </div>
      <div>
        <h2>{{this.equipes.eight.nome}}</h2>
        <h3>{{this.equipes.eight.pontos}}</h3>
      </div>
      <div>
        <h2>{{this.equipes.nine.nome}}</h2>
        <h3>{{this.equipes.nine.pontos}}</h3>
      </div>
    </div>
    <div class="box">
      <div class="box-left">
        <h1 class="question">
          Qual destes negócios você acredita que tem mais potencial para ser lançado no mercado?
        </h1>
      </div>
      <div class="box-right" v-if="!jaVotou">
        <One v-on:click.native="enviarVoto('Acesso')"/>
        <Two v-on:click.native="enviarVoto('Alimenta-Fácil')"/>
        <Three v-on:click.native="enviarVoto('Bizzarro')"/>
        <Four v-on:click.native="enviarVoto('Drink-Maker')"/>
        <Five v-on:click.native="enviarVoto('JEF')"/>
        <Six v-on:click.native="enviarVoto('Leva-pra-mim')"/>
        <Seven v-on:click.native="enviarVoto('MedBot')"/>
        <Eight v-on:click.native="enviarVoto('QR-Solutions')"/>
        <Nine v-on:click.native="enviarVoto('Softlab')"/>
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
    },
    data() {
      return {
        jaVotou: false,
        equipes: {
          one: {
            nome: 'Acesso',
            pontos: 0
          },
          two: {
            nome: 'Alimenta-Fácil',
            pontos: 0
          },
          three: {
            nome: 'Bizzarro',
            pontos: 0
          },
          four: {
            nome: 'Drink-Maker',
            pontos: 0
          },
          five: {
            nome: 'JEF',
            pontos: 0
          },
          six: {
            nome: 'Leva-pra-mim',
            pontos: 0
          },
          seven: {
            nome: 'MedBot',
            pontos: 0
          },
          eight: {
            nome: 'QR-Solutions',
            pontos: 0
          },
          nine: {
            nome: 'Softlab',
            pontos: 0
          }
        }
      };
    },
    methods: {
      backToVote() {
        this.jaVotou = false;
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
        console.log(this.equipes);
      }
    },
    mounted() {
      this.pesquisarDados();
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

  .back {
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

  .ranking {
    bottom: 0%;
    left: 0%;
    width: 100%;
    text-transform: uppercase;
    position: fixed;
    display: flex;
  }

  .ranking div h2,
  .ranking div h3 {
    margin: 0 .5rem;
    font-size: 15px;
  }
</style>
