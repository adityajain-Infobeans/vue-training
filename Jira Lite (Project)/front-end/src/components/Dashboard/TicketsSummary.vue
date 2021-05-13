<template>
  <div>
    <v-container class="">
      <v-row class="mt-6 pl-4">
        <h2 class="headline black--text">Ticket Summary:</h2>
      </v-row>
      <v-row class="mt-6 text-center">
        <v-col
          cols="12"
          sm="3"
          class="yellow darken-3 white--text rounded mb-3"
          elevation="4"
        >
          <p class="headline mb-2">Total Tickets</p>
          <p class="display-3 font-weight-bold">26</p>
        </v-col>
        <v-spacer></v-spacer>
        <v-col
          cols="12"
          sm="3"
          class="red darken-1 white--text rounded mb-3"
          elevation="4"
        >
          <p class="headline mb-2">Open Tickets</p>
          <p class="display-3 font-weight-bold">06</p>
        </v-col>
        <v-spacer></v-spacer>
        <v-col
          cols="12"
          sm="3"
          class="green darken-1 white--text rounded mb-3"
          elevation="4"
        >
          <p class="headline mb-2">Resolved Tickets</p>
          <p class="display-3 font-weight-bold">20</p>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  methods: {},
};
</script>

<style>
</style>
