<template>
  <v-container
    mt-5
    mb-5
    class="seguranca"
  >
    <Seguranca class="d-none d-sm-none d-md-block d-lg-block d-xl-block"/>
    <SegurancaMobile class="d-xs-block d-sm-block d-md-none d-lg-none d-xl-none" />
  </v-container>
</template>

<script>
import Seguranca from '../components/body/seguranca/Seguranca.vue'
import SegurancaMobile from  '../components/mobile/body/SegurancaMobile'

export default {
  components: {
    Seguranca,
    SegurancaMobile
  }
}
</script>

<style>

</style>