<template>
  <v-component>
    <v-component
      class="d-none d-sm-none d-md-block d-lg-block d-xl-block"
    >
      <Sobre />
      <SegurancaHome />
      <PortariaHome />
      <ObrasHome />
      <Limpeza/>
      <Contato /> 
    </v-component>
    <v-component 
      class="home d-xs-block d-sm-block d-md-none d-lg-none d-xl-none"
    >
      <Sobre />
      <SegurancaMobile />
      <PortariaMobile />
      <ObrasMobile />
      <LimpezaMobile />
      <Contato /> 
    </v-component>
  </v-component>
</template>

<script>
import Sobre from '../components/body/sobre/Sobre'
import SegurancaMobile from '../components/body/seguranca/SegurancaMobile'
import SegurancaHome from '../components/body/seguranca/SegurancaHome'
import LimpezaMobile from '../components/body/limpeza/LimpezaHomeMobile'
import Limpeza from '../components/body/limpeza/LimpezaHome'
import PortariaHome from '../components/body/portaria/PortariaHome'
import PortariaMobile from '../components/body/portaria/PortariaMobile'
import ObrasHome from '../components/body/obras/ObrasHome'
import ObrasMobile from '../components/body/obras/ObrasHomeMobile'
import Contato from '../components/body/contato/Contato'
export default {
  components: {
    Sobre,
    SegurancaMobile,
    SegurancaHome,
    PortariaHome,
    PortariaMobile,
    ObrasHome,
    ObrasMobile,
    Contato,
    Limpeza,
    LimpezaMobile
  },
}
</script>

<style>
  @media screen and (max-width: 960px) {
    .home {
      display: flex;
      flex-direction: column;
    }
  }
</style>