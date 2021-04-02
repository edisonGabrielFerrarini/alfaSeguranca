<template>
    <v-component>
      <v-row 
          class="mt-6"
          no-gutters
          justify="center"
        >
        <v-col
          cols="12"
          sm="10"
          md="10"
        > 
          <v-card
            class="mt-6"
            flat
          >
            <v-card-title
              class="headline"
            >
              <v-component>
                <p
                  class="display-1"
                >
                  FALE CONOSCO
                  <v-divider></v-divider>
                </p>
              </v-component>
            </v-card-title>
            <CardContato />
          </v-card>
        </v-col>
      </v-row>
    </v-component>
</template>

<script>
import CardContato from '../cards/CardContato'
export default {
  components: {
    CardContato
  }
}
</script>

<style>

</style>