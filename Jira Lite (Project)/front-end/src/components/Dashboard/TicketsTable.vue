<template>
  <v-container>
    <h2 class="display-2 mb-6">Tickets:</h2>

    <!-- refer this  https://stackoverflow.com/questions/59081299/vuetify-insert-action-button-in-data-table-and-get-row-data -->
    <v-data-table
      :headers="headers"
      :items="tickets"
      :items-per-page="10"
      class="elevation-1"
      dark
    >
      <template v-slot:item="row">
        <tr class="text-center">
          <td>{{ row.item.ticket_id }}</td>
          <td>{{ row.item.ticket_status }}</td>
          <td>{{ row.item.ticket_priority }}</td>
          <td class="text-left font-weight-bold">
            {{
              row.item.ticket_subject.length > 140
                ? row.item.ticket_subject.substring(0, 140) + '...'
                : row.item.ticket_subject
            }}
          </td>
          <td>{{ row.item.ticket_last_updated }}</td>
          <td>
            <v-btn
              class="blue white--text"
              @click="editTicker(row.item.ticket_id)"
              small
            >
              <v-icon>mdi-pencil</v-icon> Edit</v-btn
            >
          </td>
          <td>
            <v-btn
              class="red white--text"
              @click="deleteTicker(row.item.ticket_id)"
              small
            >
              <v-icon>mdi-delete</v-icon> Delete</v-btn
            >
          </td>
        </tr>
      </template>
    </v-data-table>
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
          ticket_subject:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
          ticket_last_updated: '05-May-2021 by Aditya Jain',
        },
        {
          ticket_id: 102,
          ticket_status: 'Open',
          ticket_priority: 'P2',
          ticket_subject:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
          ticket_last_updated: '05-May-2021 by Aditya Jain',
        },
        {
          ticket_id: 103,
          ticket_status: 'Open',
          ticket_priority: 'P3',
          ticket_subject:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
          ticket_last_updated: '05-May-2021 by Aditya Jain',
        },
        {
          ticket_id: 104,
          ticket_status: 'Closed',
          ticket_priority: 'S',
          ticket_subject:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
          ticket_last_updated: '05-May-2021 by Aditya Jain',
        },
        {
          ticket_id: 105,
          ticket_status: 'Closed',
          ticket_priority: 'S',
          ticket_subject:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
          ticket_last_updated: '05-May-2021 by Aditya Jain',
        },
        {
          ticket_id: 106,
          ticket_status: 'Open',
          ticket_priority: 'P1',
          ticket_subject:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
          ticket_last_updated: '05-May-2021 by Aditya Jain',
        },
        {
          ticket_id: 107,
          ticket_status: 'Closed',
          ticket_priority: 'S',
          ticket_subject:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
          ticket_last_updated: '05-May-2021 by Aditya Jain',
        },
        {
          ticket_id: 108,
          ticket_status: 'Open',
          ticket_priority: 'P2',
          ticket_subject:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
          ticket_last_updated: '05-May-2021 by Aditya Jain',
        },
        {
          ticket_id: 109,
          ticket_status: 'Open',
          ticket_priority: 'P3',
          ticket_subject:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
          ticket_last_updated: '05-May-2021 by Aditya Jain',
        },
        {
          ticket_id: 110,
          ticket_status: 'Closed',
          ticket_priority: 'S',
          ticket_subject:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
          ticket_last_updated: '05-May-2021 by Aditya Jain',
        },
      ],
    };
  },
  methods: {
    editTicker(id) {
      console.log(id);
    },
    deleteTicker(id) {
      console.log(id);
    },
  },
};
</script>

<style>
</style>
