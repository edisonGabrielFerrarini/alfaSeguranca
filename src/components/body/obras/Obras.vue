<template>
  <v-component class="obras-full">
    <v-row class="mt-6" no-gutters justify="center">
      <v-col cols="10" sm="8" md="10">
        <v-card class="mt-6" flat>
          <v-card-title class="headline">
            <v-component class="palavra">
              <p class="display-1 ">
                OBRAS
                <v-divider></v-divider>
              </p>
            </v-component>
          </v-card-title>
          <v-row>
            <v-col>
              <CardProduct
                :path="construcao.img"
                :texto="construcao.texto"
                :titulo="construcao.titulo"
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
      construcao: {
        img: require("@/assets/img/obras.jpg"),
        texto:
          "A empresa Mega Alfa, possui um grupo especializado para atender todo tipo de construção civil, além de oferecermos os melhores preços.",
        titulo: "CONSTRUÇÃO CIVIL",
      }
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
