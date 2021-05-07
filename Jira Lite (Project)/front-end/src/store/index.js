import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    navItems: [
      {
        icon: 'mdi-home',
        text: 'Home',
        route: '/',
      },
      {
        icon: 'mdi-ticket',
        text: 'Add Ticket',
        route: '/addTicket',
      },
      {
        icon: 'mdi-view-list',
        text: 'View Ticket',
        route: '/ViewTicket',
      },
      {
        icon: 'mdi-logout',
        text: 'Logout',
        route: '/Logout',
      },
    ],
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
  },
  mutations: {},
  actions: {},
  modules: {},
});
