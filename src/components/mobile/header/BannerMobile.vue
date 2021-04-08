<template>
  <v-content
  >   
    <v-content
      class="titulo-bannermobile"
    >
      <p
        class="titulo-banner  "
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
}
</script>

<style>

  
  .titulo-bannermobile {
    color: white;
    position: absolute;
    width: 50%;
    height: 60%;
    left: 5%;
    z-index: 1;
  }

  @media screen and (max-width: 490px) and (min-width: 280px){
    
    .titulo-bannermobile {
      color: white;
      display: flex;
      align-items: center;
      width: 30%;
      height: 80%;
      left: 5%;
      z-index: 1;
    }
    
    .titulo-banner {
      font-size: 1em;
      text-align: center;
    }

  }


  @media screen and (max-width: 570px) and (min-width: 490px){
    
    .titulo-bannermobile {
      color: white;
      display: flex;
      align-items: center;
      width: 30%;
      height: 80%;
      left: 5%;
      z-index: 1;
    }
    
    .titulo-banner {
      font-size: 1.6em;
      text-align: center;
    }

  }


  @media screen and (max-width: 960px) and (min-width: 570px) {
    
    .titulo-bannermobile {
      color: white;
      display: flex;
      align-items: center;
      width: 30%;
      height: 80%;
      left: 5%;
      z-index: 1;
    }
    
    .titulo-banner {
      font-size: 1.8em;
      text-align: center;
    }

  }
  

</style>