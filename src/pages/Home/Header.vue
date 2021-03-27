<template>
  <v-component> 
    <MenusHeader />   
    <v-divider></v-divider> 
    <BannerHeader />
  </v-component>
</template>

<script>
import BannerHeader from '../../components/header/BannerHeader'
import MenusHeader from '../../components/header/MenusHeader'

export default {
  components: {
    BannerHeader,
    MenusHeader,
  }
}
</script>

<style>

</style>