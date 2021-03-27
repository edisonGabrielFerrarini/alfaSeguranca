<template>
  <v-content justify="space-around">
    <v-img
      cover
      alt="Vuetify Logo"
      :src="require(`../../assets/img/familia.jpg`)"
      aspect-ratio="2.3"
      class="grey lighten-2"
      max-width="100%"
      max-height="100%"
    />
  </v-content>
</template>

<script>
export default {
  data(){
    return {
      items: [
        {
          id: 1,
        }
      ]
    }
  }
}
</script>

<style>

</style>