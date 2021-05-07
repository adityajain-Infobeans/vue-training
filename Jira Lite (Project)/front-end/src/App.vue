<template>
  <v-app>
    <!-- navbar -->
    <Navbar />
    <v-content>
      <router-view />
    </v-content>
    <!-- footer -->
  </v-app>
</template>

<script>
// @ is an alias to /src

import Navbar from '@/components/Navbar/Navbar.vue';

export default {
  name: 'App',
  components: { Navbar },
};
</script>
