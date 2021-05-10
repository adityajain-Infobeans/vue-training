<template>
  <v-container>
    <v-row>
      <v-col cols="7" class="mx-auto">
        <TicketTable type="update"> </TicketTable>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// @ is an alias to /src
import TicketTable from '@/components/Forms/Ticketform.vue';

export default {
  name: 'AddTicket',
  components: {
    TicketTable,
  },
};
</script>
