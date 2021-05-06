<template>
  <v-container>
    <TicketsSummary />
    <TicketsTable />
  </v-container>
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
};
</script>
