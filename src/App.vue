<template>
  <v-app>
    <Header />
    <Body />
  </v-app>
</template>

<script>
import Header from './pages/Header.vue';
import Body from './pages/Body.vue';

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
