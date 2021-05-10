<template>
  <v-container>
    <v-row>
      <v-col cols="7" class="mx-auto">
        <TicketForm type="add"> </TicketForm>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// @ is an alias to /src
import TicketForm from '@/components/Forms/Ticketform.vue';

export default {
  name: 'AddTicket',
  components: {
    TicketForm,
  },
  mounted() {
    document.getElementById('app').style.backgroundColor = '#90CAF9';
    document.title = 'Add Ticket';
  },
};
</script>
