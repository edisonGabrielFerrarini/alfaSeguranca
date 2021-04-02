<template>
  <content>
      <v-app-bar
        color="#0A2F44"
        app
        dark
        elevate-on-scroll
        class="d-none d-sm-block"
      >
        <div class="d-flex align-center">
          <v-img
              alt="Vuetify Logo"
              class="shrink mr-2 ma-10"
              contain
              elevate-on-scroll
              src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
              transition="scale-transition"
              width="40"
            />
        </div>
        <v-spacer></v-spacer>
        <ButtonHeader parametro="Sobre"/>
        <ButtonHeader parametro="Construção civil"/>
        <ButtonHeader parametro="Portaria"/>
        <ButtonHeader parametro="Segurança"/>
        <ButtonHeader parametro="Fale Conosco"/>
      </v-app-bar>
      
      <v-card
        class="d-xl-none d-md-none d-lg-none "
      >
        <v-app-bar
          color="#0A2F44"
          dark
          app
        >
        <div class="d-flex align-center">
            <v-img
                alt="Vuetify Logo"
                class="shrink mr-2 ma-10"
                contain
                elevate-on-scroll
                src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
                transition="scale-transition"
                width="40"
              />
          </div>
          <v-spacer></v-spacer>
          <v-app-bar-nav-icon 
            @click.stop="drawer = !drawer"
            class="mx-auto"
          >
          </v-app-bar-nav-icon>
        </v-app-bar>
        <v-navigation-drawer
            v-model="drawer"
            app
            bottom
            temporary
            dark
            color="#0A2F44"
          > 
            <v-list
              nav
              dense
            >
              <v-list-item-group
                v-model="group"
                active-class="deep-purple--text text--accent-4"
              >
                <v-list-item>
                  <v-list-item-title>
                    <ButtonHeader parametro="Sobre"/>
                  </v-list-item-title>
                </v-list-item>

                <v-list-item>
                  <v-list-item-title>
                    <ButtonHeader parametro="Construção civil"/>
                  </v-list-item-title>
                </v-list-item>

                <v-list-item>  
                  <v-list-item-title>
                    <ButtonHeader parametro="Portaria"/>
                  </v-list-item-title>
                </v-list-item>

                <v-list-item>
                  <v-list-item-title>
                    <ButtonHeader parametro="Segurança"/>
                  </v-list-item-title>
                </v-list-item>

                <v-list-item>
                  <v-list-item-title>
                    <ButtonHeader parametro="Fale Conosco"/>
                  </v-list-item-title>
                </v-list-item>

              </v-list-item-group>
            </v-list>
          </v-navigation-drawer>
        </v-card>
  </content>
</template>

<script>
import ButtonHeader from '../../components/header/ButtonHeader'

export default {
  components: {
    ButtonHeader,
  },
  data: () => ({
      drawer: false,
      group: null,
    }),
  watch: {
      group () {
        this.drawer = false
      },
    },
  }

</script>

<style>

</style>