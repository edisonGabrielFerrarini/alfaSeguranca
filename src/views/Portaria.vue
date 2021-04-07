<template>
  <v-container 
    :class="isMobile() ? 'portaria' : ''"
    mt-5
    mb-5
  >
    <Portaria v-if="isMobile()"/>
    <PortariaMobile v-else />
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
    .portaria {
      height: 100vh;
    
    }
</style>