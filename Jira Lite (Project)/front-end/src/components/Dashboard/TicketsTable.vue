<template>
  <v-container>
    <v-data-table
      :headers="headers"
      :items="tickets"
      :items-per-page="5"
      class="elevation-1"
      dark
    ></v-data-table>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      headers: [
        {
          text: 'S. no',
          align: 'center',
          sortable: true,
          value: 'ticket_id',
        },
        {
          text: 'Status',
          align: 'center',
          sortable: true,
          value: 'ticket_status',
        },
        {
          text: 'Priority',
          align: 'center',
          sortable: true,
          value: 'ticket_priority',
        },
        {
          text: 'Subject',
          align: 'center',
          sortable: false,
          value: 'ticket_subject',
        },
        {
          text: 'Last Update',
          align: 'center',
          sortable: true,
          value: 'ticket_last_updated',
        },
        {
          text: 'Edit',
          align: 'center',
          sortable: false,
          value: 'ticket_id',
        },
        {
          text: 'Delete',
          align: 'center',
          sortable: false,
          value: 'ticket_id',
        },
      ],
      tickets: [
        {
          ticket_id: 101,
          ticket_status: 'Open',
          ticket_priority: 'P1',
          ticket_subject: '',
          ticket_last_updated: '05-May-2021 by Aditya Jain',
        },
        {
          ticket_id: 102,
          ticket_status: 'Open',
          ticket_priority: 'P2',
          ticket_subject: '',
          ticket_last_updated: '05-May-2021 by Aditya Jain',
        },
        {
          ticket_id: 103,
          ticket_status: 'Open',
          ticket_priority: 'P3',
          ticket_subject: '',
          ticket_last_updated: '05-May-2021 by Aditya Jain',
        },
        {
          ticket_id: 104,
          ticket_status: 'Closed',
          ticket_priority: 'S',
          ticket_subject: '',
          ticket_last_updated: '05-May-2021 by Aditya Jain',
        },
        {
          ticket_id: 105,
          ticket_status: 'Closed',
          ticket_priority: 'S',
          ticket_subject: '',
          ticket_last_updated: '05-May-2021 by Aditya Jain',
        },
        {
          ticket_id: 106,
          ticket_status: 'Open',
          ticket_priority: 'P1',
          ticket_subject: '',
          ticket_last_updated: '05-May-2021 by Aditya Jain',
        },
        {
          ticket_id: 107,
          ticket_status: 'Closed',
          ticket_priority: 'S',
          ticket_subject: '',
          ticket_last_updated: '05-May-2021 by Aditya Jain',
        },
        {
          ticket_id: 108,
          ticket_status: 'Open',
          ticket_priority: 'P2',
          ticket_subject: '',
          ticket_last_updated: '05-May-2021 by Aditya Jain',
        },
        {
          ticket_id: 109,
          ticket_status: 'Open',
          ticket_priority: 'P3',
          ticket_subject: '',
          ticket_last_updated: '05-May-2021 by Aditya Jain',
        },
        {
          ticket_id: 110,
          ticket_status: 'Closed',
          ticket_priority: 'S',
          ticket_subject: '',
          ticket_last_updated: '05-May-2021 by Aditya Jain',
        },
      ],
    };
  },
};
</script>

<style>
</style>
