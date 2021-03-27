<template>
  <v-container> 
      <v-app-bar
        absolute
        color="#0A2F44"
        dark
      >
        <div class="d-flex align-center">
          <v-img
              alt="Vuetify Logo"
              class="shrink mr-2 ma-10"
              contain
              elevate-on-scroll
              src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
              transition="scale-transition"
              width="40"
            />
        </div>
        <v-spacer></v-spacer>
        <ButtonHeader parametro="Sobre"/>
        <ButtonHeader parametro="Obras"/>
        <ButtonHeader parametro="Portaria"/>
        <ButtonHeader parametro="Segurança"/>
        <ButtonHeader parametro="Fale Conosco"/>
      </v-app-bar>
      <v-container>
        <BannerHeader />
      </v-container>
  </v-container>
</template>

<script>
import ButtonHeader from '../../components/HeaderComponents/ButtonHeader'
import BannerHeader from '../../components/HeaderComponents/BannerHeader'

export default {
components: {
  ButtonHeader,
  BannerHeader
}
}
</script>

<style>

</style>