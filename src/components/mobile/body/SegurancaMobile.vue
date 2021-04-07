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
            <v-row>
              <v-col>
                <CardProduct :path="instalacao.img" :texto="instalacao.texto" :isBloco="true" :titulo="instalacao.titulo"/>    
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
    </v-component>
</template>

<script>
import CardProduct from '../../body/cards/CardProduct'
export default {
  components: {
    CardProduct
  },
  data(){
    return {
      condominio: {
          img: require('@/assets/img/condominio.jpg'),
          texto: 'NOSSA EQUIPE RECEBE OS MELHORES TREINAMENTOS E CAPACITAÇÕES EM SEGURANÇA DE CONDOMINÍO, ALÉM DE SERMOS REFERÊNCIA EM TECNOLOGIA.',
          titulo: 'CONDOMINÍOS'   

      },
      ronda: {
          img: require('@/assets/img/ronda.jpg'),
          texto: 'NOSSAS RONDAS SÃO ESTREMAMENTE TATICAS, NOSSA EQUIPE É ALTAMENTE TREINADA E PRONTA  PARA RESOLVER QUALQUER AÇÃO DE MANEIRA RAPIDA E LÓGICA.',
          titulo: 'RONDAS INTENSIVAS'  
      },
      monitoramento: {
          img: require('@/assets/img/CAMERA3.jpg'),
          texto: 'O EQUIPE ALFA INVESTE MUITO EM TECNOLOGIA, ATUALMENTE POSSUIMOS CAMERAS ALTAMENTE MODERNAS E COM UMA ALTA QUALIDADE DE IMAGEM. ',
          titulo: 'MONITORAMENTO COM CAMERAS'
      },
      instalacao: {
          img: require('@/assets/img/cameras 2.jpg'),
          texto: 'ALÉM DE POSSUIRMOS AS CAMERAS MAIS MODERNAS, NOSSAS CAMERAS SÃO INSTALADAS DE MANEIRA ESTRATÉGICA, SEMPRE TIRANDO 100% DA CAPACIDADE E DA EFICIÊNCIA DAS CAMERAS.',
          titulo: 'INSTALAÇÃO DE CAMERAS'
      },
    }
  }
}
</script>

<style>

</style>