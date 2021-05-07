<template>
  <div>
    <v-app-bar color="" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>My files</v-toolbar-title>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" absolute bottom temporary dark>
      <v-list>
        <v-list-item-group v-model="model">
          <v-list-item
            v-for="(item, i) in items"
            :key="i"
            router
            :to="item.route"
          >
            <v-list-item-icon>
              <v-icon v-text="item.icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title v-text="item.text"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data: () => ({
    drawer: false,
    items: [
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
    model: 1,
  }),
};
</script>
