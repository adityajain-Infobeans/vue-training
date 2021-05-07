<template>
  <TicketTable type="update"> </TicketTable>
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
