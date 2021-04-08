<template>
  <v-content 
    justify="space-evenly"
  >
    <v-content
      class="titulo-inicial"
    >
      <p
        class="titulo-banner text-center"
      >
        PRIORIZAMOS PELA SUA TRANQUILIDADE.
      </p>
      <v-img
          class="ma-auto"
          alt="Vuetify Logo"
          elevate-on-scroll
          :src="require(`../../assets/img/mega-alfa.png`)"
          width="125"
          height="150"
        />
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
    font-size: 2em;
  }

  .titulo-mobile {
    color: white;
    position: absolute;
    width: 50%;
    height: 60%;
    left: 5%;
    z-index: 1;
  }

  @media screen and (max-width: 2560px) and (min-width: 1200px) {
  
    .titulo-inicial {
      color: white;
      position: absolute;
      width: 30%;
      height: 60%;
      top: 15%;
      left: 5%;
      z-index: 1;
    }

    .titulo-banner {
      font-size: 3em;
    }

    .titulo-mobile {
      color: white;
      position: absolute;
      width: 50%;
      height: 60%;
      left: 5%;
      z-index: 1;
    }
  }


  @media screen and (max-width: 1200px) and (min-width: 900px) {
    .titulo-banner {
      font-size: 1.8em;
    }

    .titulo-inicial {
      color: white;
      position: absolute;
      width: 30%;
      height: 60%;
      top: 10%;
      left: 5%;
      z-index: 1;
    }
  }

  

</style>