<template>
  <v-container 
    class="obras"
    mt-5
    mb-5
  >
    <Obras class="d-none d-sm-none d-md-block d-lg-block d-xl-block"/>
    <ObrasMobile class="d-xs-block d-sm-block d-md-none d-lg-none d-xl-none" />
  </v-container>
</template>

<script>
import Obras from '../components/body/obras/Obras'
import ObrasMobile from '../components/body/obras/ObrasMobile'
export default {
  components: {
    Obras,
    ObrasMobile
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
      .obras {
        height: 100vh;
      }  
    }

    @media screen and (min-width: 900px) {
      .obras {
        height: 85vh;
      }  
    }
    
</style>