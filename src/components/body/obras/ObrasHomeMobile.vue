<template>
  <v-component>
    <v-row class="mt-6" no-gutters justify="center">
      <v-col cols="10" sm="8" md="10">
        <v-card class="mt-6" flat>
          <v-card-title class="headline">
            <v-component
              class="d-none d-sm-none d-md-block d-lg-block d-xl-block"
            >
              <p class="display-1">
                OBRAS
                <v-divider></v-divider>
              </p>
            </v-component>
            <v-component
              class="palavra d-xs-block d-sm-block d-md-none d-lg-none d-xl-none"
            >
              <p class="display-1 ">
                OBRAS
                <v-divider></v-divider>
              </p>
            </v-component>
          </v-card-title>
          <v-row>
            <v-col>
              <CardProduct
                :path="img"
                :texto="texto"
                titulo="CONSTRUÇÃO CIVIL"
              />
            </v-col>
          </v-row>
        </v-card>
        <v-row justify="center">
          <v-col cols="6">
            <router-link to="/obras">
              <v-btn class="ma-3" color="#0A2F44" dark>
                Mais Serviços
              </v-btn>
            </router-link>
          </v-col>
        </v-row>
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
      img: require("@/assets/img/obras.jpg"),
      texto:
        "A empresa Mega Alfa, possui um grupo especializado para atender todo tipo de construção civil, além de oferecermos os melhores preços.",
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
</style>
