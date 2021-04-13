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
  }
}
</script>

<style>
  
</style>