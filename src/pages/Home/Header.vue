<template>
  <v-component> 
      <v-card
        flat
        tile
      >
          <MenusHeader />   
          <v-divider></v-divider> 
          <BannerHeader />
      </v-card>
     
  </v-component>
</template>

<script>
import BannerHeader from '../../components/HeaderComponents/BannerHeader.vue'
import MenusHeader from '../../components/HeaderComponents/MenusHeader.vue'

export default {
  components: {
    BannerHeader,
    MenusHeader,
  }
}
</script>

<style>

</style>