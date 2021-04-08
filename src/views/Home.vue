<template>
  <v-component>
    <BannerHeader class="d-none d-sm-none d-md-block d-lg-block d-xl-block" />
    <BannerMobile class="d-xs-block d-sm-block d-md-none d-lg-none d-xl-none" />
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
}
</script>

<style>

</style>