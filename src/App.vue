<template>
  <v-app>
    <Header />
    
  </v-app>
</template>

<script>
import Header from './pages/Home/Header.vue';

export default {
  name: 'App',

  components: {
    Header,
  },

  data: () => ({
    //
  }),
};
</script>
