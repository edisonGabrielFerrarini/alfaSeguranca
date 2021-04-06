<template>
  <v-content
  class="teste" 
  >   
    <v-content
      class="titulo-mobile d-xl-none d-md-none d-lg-none"
    >
      <p
        class="titulo-mobile text-body-1 text-center "
      >
        PRIORIZAMOS PELA SUA TRANQUILIDADE.
      </p>
        
    </v-content>
    <v-img
      cover
      alt="Vuetify Logo"
      :src="require(`../../../assets/img/familia.jpg`)"
      aspect-ratio="2.3"
      class="img-principal grey lighten-2"
      width="100%"
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

  .titulo-mobile {
    color: white;
    position: absolute;
    width: 50%;
    height: 60%;
    left: 5%;
    z-index: 1;
  }

  .teste {
    background: red;
  }


</style>