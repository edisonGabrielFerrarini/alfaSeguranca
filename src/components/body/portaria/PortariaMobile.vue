<template>
  <v-component >
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
            <v-row>
              <v-col>
                <CardProduct :path="treinamento.img" :texto="treinamento.texto" :isBloco="true" :titulo="treinamento.titulo"/>    
              </v-col>
            </v-row>
          </v-card>
          <v-row
            justify="center"
          >
            <v-col
              cols="6"
            >
              <router-link to="/portaria">
                <v-btn
                  class="ma-3"
                  color="#0A2F44"
                  dark
                >
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
import CardProduct from '../cards/CardProduct'
export default {
  components: {
    CardProduct
  },
  data(){
    return {
      porteiro: {
          img: require('@/assets/img/porteiro-e-vigia.jpg'),
          texto: 'NOSSA EQUIPE DE PORTARIA, É EXTREMAMENTE QUALIFICADA POIS RECEBEM OS MELHORES TREINAMENTOS E CAPACITAÇÕES, ALÉM DE SEREM REFERÊNCIA EM SUA ARÊA DE ATUAÇÃO.',
          titulo: 'PORTEIROS'   

      },
      treinamento: {
          img: require('@/assets/img/seguranca.jpg'),
          texto: 'A EQUIPE ALFA É UMA EMPRESA PREOCUPADA EM UTILIZAR SEMPRE OS MELHORES RECURSOS TECNOLOGICOS EM NOSSA ARÊA, OS EQUIPAMENTOS UTILIZADOS PELOS NOSSOS PORTE',
          titulo: 'TREINAMENTOS'  
      },
    }
  }
}
</script>

<style>

</style>