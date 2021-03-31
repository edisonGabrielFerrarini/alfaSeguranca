<template>
<v-flex>
  <v-card-text
    class="d-none d-sm-flex"
  >
    <v-row 
      justify="center"
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
  </v-card-text>
  <v-card-text
    class="d-xl-none d-md-none d-lg-none"
  >
    <v-row 
      justify="center"
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
    </v-row>
    <v-row 
      justify="center"
    >
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
  </v-card-text>
  </v-flex>
</template>

<script>
export default {
  props: {
    path: Object,
    texto: String,
    isBloco: Boolean,
    titulo: String
  }

}
</script>

<style>
  .tamanho {
    font-size: .8em;
    text-align: center;
  }
</style>