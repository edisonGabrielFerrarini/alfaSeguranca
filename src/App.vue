<template>
  <v-app>
    <Header />
    <Body />
  </v-app>
</template>

<script>
import Header from './pages/home/Header.vue';
import Body from './pages/home/Body.vue';

export default {
  name: 'App',

  components: {
    Header,
    Body,
  },

  data: () => ({
    //
  }),
};
</script>
