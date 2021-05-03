<template>
  <v-app class="grey">
    <Navbar />
    <Login />
    <Table />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import Login from '@/components/Login.vue';
import Table from '@/components/Table.vue';

export default {
  name: 'App',
  components: { Navbar, Login, Table },
  data: () => ({
    //
  }),
};
</script>
