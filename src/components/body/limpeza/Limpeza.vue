<template>
  <v-component class="obras-full">
    <v-row class="mt-6" no-gutters justify="center">
      <v-col cols="10" sm="8" md="10">
        <v-card class="mt-6" flat>
          <v-card-title class="headline">
            <v-component class="palavra">
              <p class="display-1 ">
                LIMPEZA
                <v-divider></v-divider>
              </p>
            </v-component>
          </v-card-title>
          <v-row>
            <v-col>
              <CardProduct
                :path="servicosGerais.img"
                :texto="servicosGerais.texto"
                :titulo="servicosGerais.titulo"
              />
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-component>
</template>

<script>
import CardProduct from "../cards/CardProduct";
export default {
  components: {
    CardProduct,
  },
  data() {
    return {
      servicosGerais: {
        img: require("@/assets/img/limpeza.jpg"),
        texto:
          "A empresa Mega Alfa é capacitada para realizar limpezas em Condomínios, Hospitais e Empresas.",
        titulo: "AUXILIAR DE LIMPEZA",
      },
    };
  },
};
</script>
<style>
.palavra {
  text-align: center;
}
.palavra p {
  word-break: keep-all;
}
.obras-full {
  height: 80vh;
}
</style>
