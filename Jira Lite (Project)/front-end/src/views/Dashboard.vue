<template>
  <div class="white--text">
    <v-container>
      <TicketsSummary />

      <v-divider class="mt-12 mb-5"></v-divider>

      <TicketsTable />
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src

import TicketsSummary from '@/components/Dashboard/TicketsSummary.vue';
import TicketsTable from '@/components/Dashboard/TicketsTable.vue';

export default {
  name: 'Dashboard',
  components: {
    TicketsSummary,
    TicketsTable,
  },

  mounted() {
    document.getElementById('app').style.backgroundColor = '#AA00FF';
    document.title = 'Dashboard';
  },
};
</script>
