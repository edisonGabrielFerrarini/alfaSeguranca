<template>
  <v-component>
      <v-row 
          class="mt-6"
          no-gutters
          justify="center"
        >
        <v-col
          cols="10"
          sm="6"
          md="10"
        > 
          <v-card
            class="mt-6"
            flat
          >
            <v-card-title
              class="headline"
            >
              <v-component>
                <p
                  class="display-1"
                >
                  SOBRE
                  <v-divider></v-divider>
                </p>
              </v-component>
            </v-card-title>
            <CardProduct :path="img" :texto="texto"/>
          </v-card>
        </v-col>
      </v-row>
    </v-component>
</template>

<script>
import CardProduct from '../cards/CardProduct'
export default {
  components: {
    CardProduct
  },
  data(){
    return {
      img: require('@/assets/img/aperto de mao.jpg'),
      texto: 'A EMPRESA MEGA ALFA TEM UM ALTO COMPROMETIMENTO E EFICIÊNCIA. NOSSA MAIOR MISSÃO É PROTEGER E ASSEGURAR QUE NOSSO CLIENTE RECEBA O MELHOR SERVIÇO.'  
    }
  }
}
</script>

<style>

</style>