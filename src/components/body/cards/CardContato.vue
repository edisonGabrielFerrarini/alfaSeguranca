<template>
  <v-flex>
    <v-card-text>
      <v-row>
        <v-col
          class="mx-1"
        >
          <v-img  
            alt="Vuetify Logo"
            contain
            elevate-on-scroll
            :src="require(`../../../assets/img/mega-alfa.png`)"
            width="300"
            height="300"
          />
        </v-col>
        <v-col>
          <v-list three-line>
            <v-list-item>
              <v-list-item-icon>
                <v-icon 
                  color="blue"
                  large
                >
                  mdi-phone
                </v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>(41) 3667-0553</v-list-item-title>
                <v-list-item-subtitle>Residencial</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          
            <v-list-item>
              <v-list-item-icon>
                <v-icon 
                  color="green"
                  large
                >
                  mdi-whatsapp
                </v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>(41) 99705-9390</v-list-item-title>
                <v-list-item-subtitle>WhatsApp</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>

            <v-list-item>
              <v-list-item-icon>
                <v-icon 
                  large
                >
                  mdi-email
                </v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>megaalfaportaria12@gmail.com</v-list-item-title>
                <v-list-item-subtitle>Email</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-col>
      </v-row>
    </v-card-text>
  </v-flex>
</template>

<script>
export default {

}
</script>

<style>

</style>