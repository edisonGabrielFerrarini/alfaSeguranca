<template>
  <v-component>
    <Sobre />
    <Seguranca />
    <Portaria />
    <Obras />
    <Contato />
  </v-component>
</template>

<script>
import Sobre from '../components/body/sobre/Sobre'
import Seguranca from '../components/body/seguranca/Seguranca'
import Portaria from '../components/body/portaria/Portaria'
import Obras from '../components/body/obras/Obras'
import Contato from '../components/body/contato/Contato'
export default {
  components: {
    Sobre,
    Seguranca,
    Portaria,
    Obras,
    Contato
  }
}
</script>

<style>

</style>