<template>
  <v-component>
    <Sobre />
    <Seguranca />
    <Portaria />
    <Obras />
  </v-component>
</template>

<script>
import Sobre from '../components/body/sobre/Sobre'
import Seguranca from '../components/body/seguranca/Seguranca'
import Portaria from '../components/body/portaria/Portaria'
import Obras from '../components/body/obras/Obras'
export default {
  components: {
    Sobre,
    Seguranca,
    Portaria,
    Obras
  }
}
</script>

<style>

</style>