<template>
  <v-component>
    <BannerHeader v-if="isMobile()" />
    <BannerMobile v-else />
    <Body />
  </v-component>
</template>

<script>
import Body from '../pages/Body'
import BannerMobile from '../components/mobile/header/BannerMobile'
import BannerHeader from '../components/header/BannerHeader'


export default {
  components: {
    Body,
    BannerMobile,
    BannerHeader
  },
  methods: {
    isMobile(){
      if(screen.width > 700) {
        return true
      }else {
        return false
      }
    }
  }
}
</script>

<style>

</style>