<template>
  <v-footer
    dark
    padless
    class="footer"
  >
  <v-card
      flat
      tile
      color="#0A2F44"
      class="lighten-1 white--text text-center"
      width="100%"
    >
      <v-card-text>
        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-4 white--text"
          icon
        >
          <v-icon size="24px">
            {{ icon }}
          </v-icon>
        </v-btn>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} — <strong>DevTec</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
      icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',
      ],
    }),
}
</script>

<style>
    
</style>