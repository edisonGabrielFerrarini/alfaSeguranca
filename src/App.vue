<template>
  <v-app>
    <Header />
    <Body />
  </v-app>
</template>

<script>
import Header from './pages/home/Header';
import Body from './pages/home/Body';

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
