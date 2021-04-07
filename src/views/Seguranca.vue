<template>
  <v-container
    mt-5
    mb-5
    class="seguranca"
  >
    <Seguranca v-if="isMobile()"/>
    <SegurancaMobile v-else />
  </v-container>
</template>

<script>
import Seguranca from '../components/body/seguranca/Seguranca.vue'
import SegurancaMobile from  '../components/mobile/body/SegurancaMobile'

export default {
  components: {
    Seguranca,
    SegurancaMobile
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

</style>