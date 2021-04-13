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
                  SEGURANÇA
                  <v-divider></v-divider>
                </p>
              </v-component>
            </v-card-title>
            <v-row>
              <v-col>
                <CardProduct :path="condominio.img" :texto="condominio.texto" :isBloco="true" :titulo="condominio.titulo"/>    
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <CardProduct :path="ronda.img" :texto="ronda.texto" :isBloco="true" :titulo="ronda.titulo"/>    
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <CardProduct :path="monitoramento.img" :texto="monitoramento.texto" :isBloco="true" :titulo="monitoramento.titulo"/>    
              </v-col>
            </v-row>
          </v-card>
          <v-row
            justify="center"
          >
            <v-col
              cols="6"
            >
              <router-link to="/seguranca">
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
      condominio: {
          img: require('@/assets/img/condominio.jpg'),
          texto: 'Nossa equipe recebe os melhores treinamentos e capacitações em segurança de condomínio, contamos também com os melhores recursos tecnológicos.',
          titulo: 'CONDOMINÍOS'   

      },
      ronda: {
          img: require('@/assets/img/ronda.jpg'),
          texto: 'Nossas rondas são extremamente táticas, nossa equipe é altamente treinada e pronta  para resolver qualquer ação de maneira rápida e lógica.',
          titulo: 'RONDAS INTENSIVAS'  
      },
      monitoramento: {
          img: require('@/assets/img/CAMERA3.jpg'),
          texto: 'A equipe Mega Alfa investe muito em tecnologia, atualmente possuímos câmeras altamente modernas e com excelente qualidade de imagem.',
          titulo: 'MONITORAMENTO COM CAMERAS'
      },
      instalacao: {
          img: require('@/assets/img/cameras 2.jpg'),
          texto: 'Além de possuirmos as câmeras mais modernas, nossas câmeras são instaladas de maneira estratégica, sempre tirando 100% da capacidade e da eficiência das câmeras.',
          titulo: 'INSTALAÇÃO DE CAMERAS'
      },
    }
  }
}
</script>

<style>

</style>