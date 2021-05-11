<template>
  <div class="white--text">
    <v-container>
      <div v-if="this.$route.params.id">
        <v-row>
          <v-col cols="7" class="mx-auto">
            <TicketFom />
          </v-col>
        </v-row>
        <AddTicketComments />
        <TicketComments />
      </div>
      <div v-else>
        <TicketsTable />
      </div>
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src
// params me ticket id h toh uski details dika do varna pura table

import TicketsTable from '@/components/Dashboard/TicketsTable.vue';
import TicketFom from '@/components/Forms/Ticketform.vue';
import AddTicketComments from '@/components/Forms/AddTicketComments.vue';
import TicketComments from '@/components/Forms/TicketComments.vue';

export default {
  name: 'ViewTickets',
  components: {
    TicketsTable,
    TicketFom,
    AddTicketComments,
    TicketComments,
  },

  mounted() {
    document.getElementById('app').style.backgroundColor = '#cc7351';
    document.title = 'View Ticket';
  },
};
</script>
