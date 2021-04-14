<template>
  <v-component 
  >
      <v-row 
          class="mt-6"
          no-gutters
          justify="center"
        >
        <v-col
          cols="10"
          sm="8"
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
                  PORTARIA
                  <v-divider></v-divider>
                </p>
              </v-component>
            </v-card-title>
            <v-row>
              <v-col>
                <CardProduct :path="porteiro.img" :texto="porteiro.texto" :isBloco="true" :titulo="porteiro.titulo"/>    
              </v-col>
            </v-row>
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
      porteiro: {
          img: require('@/assets/img/porteiro-e-vigia.jpg'),
          texto: 'Nossa equipe de portaria é extremamente qualificada, pois recebem os melhores treinamentos e capacitações, sendo referência em sua arêa de atuação.',
          titulo: 'PORTEIROS'   
      }
    }
  }
}
</script>

<style>
  
</style>