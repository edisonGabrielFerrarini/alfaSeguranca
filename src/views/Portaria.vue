<template>
  <v-container 
    class="portaria"
    mt-5
    mb-5
  >
    <Portaria class="d-none d-sm-none d-md-block d-lg-block d-xl-block"/>
    <PortariaMobile class="d-xs-block d-sm-block d-md-none d-lg-none d-xl-none" />
  </v-container>
</template>

<script>
import Portaria from '../components/body/portaria/Portaria'
import PortariaMobile from '../components/mobile/body/PortariaMobile'
export default {
  components: {
    Portaria,
    PortariaMobile
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
      .portaria {
        height: 100vh;
      }  
    }

    @media screen and (min-width: 900px) {
      .portaria {
        height: 85vh;
      }  
    }
    
</style>