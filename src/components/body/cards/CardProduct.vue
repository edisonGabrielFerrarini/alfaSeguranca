<template>
<v-flex>
  <v-card
    flat
  >
    <v-row 
      justify="center"
      class="card-product"
    >
      <v-col>
          <v-img
            cover
            alt="Vuetify Logo"
            :src=path
            aspect-ratio="2.3"
            class="grey lighten-2"
            height="200"
            max-width="100%"
            max-height="100%"
          />
      </v-col>
      <v-col
        align-self="center"
      >
        <p class="text-center font-weight-black">
          {{titulo}}
        </p>
        <p v-if="isBloco" class="tamanho">
          {{texto}}
        </p>
        <p v-else class="text-center body-2">
          {{texto}}
        </p>
      </v-col>
    </v-row>
  </v-card>
  </v-flex>
</template>

<script>
export default {
  props: {
    path: Object,
    texto: String,
    isBloco: Boolean,
    titulo: String
  },
}
</script>

<style>

  @media screen and (max-width: 950px) {
    
    .card-product {
      display: flex;
      flex-direction: column;
      width: 100%;
      justify-content: center;
    }
    
  }


  .tamanho {
    font-size: .8em;
    text-align: center;
  }
</style>