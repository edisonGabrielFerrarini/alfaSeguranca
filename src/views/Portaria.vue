<template>
  <v-container 
    class="portaria"
    mt-5
  >
    <Portaria />
  </v-container>
</template>

<script>
import Portaria from '../components/body/portaria/Portaria'
export default {
  components: {
    Portaria
  }
}
</script>

<style>
  .portaria {
    height: 90vh;
    display: flex;
    align-content: center;
  }
</style>