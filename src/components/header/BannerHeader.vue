<template>
  <v-content 
    justify="space-evenly"
  >
    <v-content
      class="titulo-inicial d-none d-sm-block"
    >
      <p
        class="titulo text-h2 text-center "
      >
        PRIORIZAMOS PELA SUA TRANQUILIDADE.
      </p>
      <v-img
          class="ma-auto"
          alt="Vuetify Logo"
          elevate-on-scroll
          :src="require(`../../assets/img/mega-alfa.png`)"
          transition="scale-transition"
          width="125"
          height="150"
        />
    </v-content>
    <v-content
      class="titulo-mobile d-xl-none d-md-none d-lg-none"
    >
      <p
        class="titulo titulo-mobile text-body-1 text-center "
      >
        PRIORIZAMOS PELA SUA TRANQUILIDADE.
      </p>
        
    </v-content>
    <v-img
      cover
      alt="Vuetify Logo"
      :src="require(`../../assets/img/familia.jpg`)"
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
  .titulo-inicial {
    color: white;
    position: absolute;
    width: 30%;
    height: 60%;
    top: 15%;
    left: 5%;
    z-index: 1;
  }

  .titulo {
    font-family: 'Raleway', 'Roboto';
    display: flex;
    align-content: center;
    justify-content: center;
  }

  .titulo-mobile {
    color: white;
    position: absolute;
    width: 50%;
    height: 60%;
    left: 5%;
    z-index: 1;
  }

</style>