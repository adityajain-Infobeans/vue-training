<template>
  <div class="white--text">
    <v-container>
      <TicketsTable />
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src

import TicketsTable from '@/components/Dashboard/TicketsTable.vue';

export default {
  name: 'View Ticket',
  components: {
    TicketsTable,
  },

  mounted() {
    document.getElementById('app').style.backgroundColor = '#AA00FF';
    document.title = 'View Ticket';
  },
};
</script>
