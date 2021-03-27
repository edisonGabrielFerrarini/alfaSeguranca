<template>
    <v-component>
      <v-row 
          class="mt-6"
          no-gutters
          justify="center"
        >
        <v-col
          cols="12"
          sm="10"
          md="10"
        > 
          <v-card
            class="mt-6"
            flat
          >
            <v-card-title
              class="headline"
            >
              <v-component class="d-none d-lg-block">
                <p
                  class="display-1"
                >
                  SOBRE
                  <v-divider></v-divider>
                </p>
              </v-component>
            </v-card-title>
            <v-card-text>
              <v-row 
                justify="center"
              >
                <v-col>
                    <v-img
                      cover
                      alt="Vuetify Logo"
                      :src="require(`../../../assets/img/aperto de mao.jpg`)"
                      aspect-ratio="2.3"
                      class="grey lighten-2"
                      max-width="100%"
                      max-height="100%"
                    />
                </v-col>
                <v-col
                  align-self="center"
                >
                  <p class="text-center">
                    A EMPRESA MEGA ALFA TEM UM ALTO COMPROMETIMENTO E EFICIÊNCIA. NOSSA MAIOR MISSÃO É PROTEGER E ASSEGURAR QUE NOSSO CLIENTE RECEBA O MELHOR SERVIÇO.  
                  </p>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-component>
</template>

<script>
export default {

}
</script>

<style>

</style>