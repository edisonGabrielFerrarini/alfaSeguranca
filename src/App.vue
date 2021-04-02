<template>
  <v-app>
    <Header />
    <Body />
    <Footer />
  </v-app>
</template>

<script>
import Header from './pages/Header.vue';
import Body from './pages/Body.vue';
import Footer from './pages/Footer.vue';

export default {
  name: 'App',

  components: {
    Header,
    Body,
    Footer
  },

  data: () => ({
    //
  }),
};
</script>
