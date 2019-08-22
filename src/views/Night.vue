<template>

</template>

<script>
import firebase from "firebase";
import One from "@/components/Afternoon/One.vue";
import Two from "@/components/Afternoon/Two.vue";
import Three from "@/components/Afternoon/Three.vue";
import Four from "@/components/Afternoon/Four.vue";

export default {
  name: "Night",
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
          nome: "Alimenta-Fácil",
          pontos: 0
        },
        two: {
          nome: "Bizzarro",
          pontos: 0
        },
        three: {
          nome: "Drink-Maker",
          pontos: 0
        },
        four: {
          nome: "JEF",
          pontos: 0
        },
        five: {
          nome: "Leva-pra-mim",
          pontos: 0
        },
        six: {
          nome: "MedBot",
          pontos: 0
        },
        seven: {
          nome: "QR-Solutions",
          pontos: 0
        },
        eight: {
          nome: "Softlab",
          pontos: 0
        }
      }
    };
  },
  methods: {
    async enviarVoto(opcao) {
      if (this.jaVotou) {
        // Corno já votou
        return;
      }

      this.jaVotou = true;
      let valorAntigo = (await firebase
        .database()
        .ref(opcao)
        .once("value")).val();

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
        .once("value")
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

</style>
