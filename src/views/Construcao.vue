<template>
  <v-container
    class="obras"
    mt-5
  > 
    <Obras />
  </v-container>
</template>

<script>
import Obras from '../components/body/obras/Obras'
export default {
  components: {
    Obras
  }
}
</script>

<style>
  .obras {
    height: 90vh;
    display: flex;
    align-content: center;
  }
</style>