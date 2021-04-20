<template>
  <v-container 
    class="limpeza"
    mt-5
    mb-5
  >
    <Limpeza class="d-none d-sm-none d-md-block d-lg-block d-xl-block"/>
    <LimpezaMobile class="d-xs-block d-sm-block d-md-none d-lg-none d-xl-none" />
  </v-container>
</template>

<script>
import Limpeza from '../components/body/limpeza/Limpeza'
import LimpezaMobile from '../components/body/limpeza/LimpezaMobile'
export default {
  components: {
    Limpeza,
    LimpezaMobile
  },
  methods: {
    isMobile(){
      if(screen.width > 700){
        return true
      } else {
        return false
      }
    }
  }
}
</script>

<style>

    @media screen and (min-width: 10px) and (max-width: 900px) {
      .limpeza {
        height: 100vh;
      }  
    }

    @media screen and (min-width: 900px) {
      .limpeza {
        height: 85vh;
      }  
    }
    
</style>