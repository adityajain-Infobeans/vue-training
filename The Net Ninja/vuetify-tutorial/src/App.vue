<template>
  <v-app class="grey">
    <Navbar />
    <Login />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import Login from '@/components/Login.vue';

export default {
  name: 'App',
  components: { Navbar, Login },
  data: () => ({

    //
  }),
};
</script>
