<template>
  <v-container>
    <h2 class="display-2 mb-6 black--text">Tickets:</h2>

    <v-layout v-resize="onResize">
      <!-- refer this  https://stackoverflow.com/questions/59081299/vuetify-insert-action-button-in-data-table-and-get-row-data -->
      <v-data-table
        :headers="this.$store.state.headers"
        :items="this.$store.state.tickets"
        :items-per-page="10"
        class="elevation-1"
        dark
        :hide-headers="isMobile"
        :class="{ mobile: isMobile }"
      >
        <template v-slot:item="row">
          <tr class="text-center" v-if="!isMobile">
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
          <tr class="text-center" v-else>
            <td>
              <ul class="flex-content">
                <li class="flex-item" data-label="Ticket Id">
                  {{ row.item.ticket_id }}
                </li>
                <li class="flex-item" data-label="Ticket Status">
                  {{ row.item.ticket_status }}
                </li>
                <li
                  class="font-weight-bold flex-item"
                  data-label="Ticket Priority"
                >
                  <v-chip :color="bgColor(row.item.ticket_priority)" light>
                    {{ row.item.ticket_priority }}
                  </v-chip>
                </li>
                <li
                  class="text-left font-weight-bold flex-item"
                  data-label="Ticket Subject"
                  @click="detailTicket(row.item.ticket_id)"
                >
                  {{
                    row.item.ticket_subject.length > 140
                      ? row.item.ticket_subject.substring(0, 140) + '...'
                      : row.item.ticket_subject
                  }}
                </li>
                <li class="flex-item" data-label="Ticket Last Updated">
                  {{ row.item.ticket_last_updated }}
                </li>
                <li class="flex-item" data-label="Edit Ticket">
                  <v-btn
                    class="blue white--text"
                    @click="editTicket(row.item.ticket_id)"
                    small
                  >
                    <v-icon>mdi-pencil</v-icon> Edit</v-btn
                  >
                </li>
                <li class="flex-item" data-label="Delete Ticket">
                  <v-btn
                    class="red white--text"
                    @click="deleteTicket(row.item.ticket_id)"
                    small
                  >
                    <v-icon>mdi-delete</v-icon> Delete</v-btn
                  >
                </li>
              </ul>
            </td>
          </tr>
        </template>
      </v-data-table>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    isMobile: false,
  }),

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

    onResize() {
      if (window.innerWidth < 650) this.isMobile = true;
      else this.isMobile = false;
    },
  },
};
</script>

<style scoped>
.flex-content {
  padding: 1.5rem 0;
  margin: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
}

.flex-item {
  padding: 0.5rem;
}
</style>
