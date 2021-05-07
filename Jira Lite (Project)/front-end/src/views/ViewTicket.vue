<template>
  <div class="white--text">
    <v-container>
      <TicketsTable />
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src
// params me ticket id h toh uski details dika do varna pura table

import TicketsTable from '@/components/Dashboard/TicketsTable.vue';

export default {
  name: 'ViewTickets',
  components: {
    TicketsTable,
  },

  mounted() {
    document.getElementById('app').style.backgroundColor = '#AA00FF';
    document.title = 'View Ticket';
  },
};
</script>
