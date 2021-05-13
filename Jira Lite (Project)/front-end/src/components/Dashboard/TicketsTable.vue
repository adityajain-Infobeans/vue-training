<template>
  <v-container>
    <h2 class="display-2 mb-6 black--text">Tickets:</h2>

    <!-- refer this  https://stackoverflow.com/questions/59081299/vuetify-insert-action-button-in-data-table-and-get-row-data -->
    <v-data-table
      :headers="this.$store.state.headers"
      :items="this.$store.state.tickets"
      :items-per-page="10"
      class="elevation-1"
      dark
    >
      <template v-slot:item="row">
        <tr class="text-center">
          <td>{{ row.item.ticket_id }}</td>
          <td>{{ row.item.ticket_status }}</td>
          <td class="font-weight-bold">
            <v-chip :color="bgColor(row.item.ticket_priority)" light>
              {{ row.item.ticket_priority }}
            </v-chip>
          </td>
          <td
            class="text-left font-weight-bold"
            @click="detailTicket(row.item.ticket_id)"
          >
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
              @click="editTicket(row.item.ticket_id)"
              small
            >
              <v-icon>mdi-pencil</v-icon> Edit</v-btn
            >
          </td>
          <td>
            <v-btn
              class="red white--text"
              @click="deleteTicket(row.item.ticket_id)"
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
  methods: {
    editTicket(id) {
      this.$router.push({ path: `/updateticket/${id}` });
    },
    deleteTicket(id) {
      console.log(id);
    },
    detailTicket(id) {
      this.$router.push({ path: `/viewticket/${id}` });
    },

    bgColor(priority) {
      if (priority === 'P1') {
        return 'red';
      }
      if (priority === 'P2') {
        return 'orange';
      }
      if (priority === 'P3') {
        return 'yellow';
      }
      return 'green';
    },
  },
};
</script>

<style>
</style>
