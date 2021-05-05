<template>
  <v-app class="grey">
    <Navbar />
    <Login />
    <Table />
    <Shop />

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import Login from '@/components/Login.vue';
import Table from '@/components/Table.vue';
import Shop from '@/views/Shop.vue';

export default {
  name: 'App',
  components: {
    Navbar, Login, Table, Shop,
  },
  data: () => ({
    //
  }),
};
</script>
