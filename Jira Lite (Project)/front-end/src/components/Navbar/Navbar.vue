<template>
  <div>
    <v-app-bar color="" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title class="body-1 pl-1">Support Portal</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-title class="body-1">Welcome User!</v-toolbar-title>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" absolute temporary dark>
      <v-list>
        <v-list-item-group v-model="model">
          <v-list-item
            v-for="(item, i) in this.$store.state.navItems"
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
    model: 1,
  }),
};
</script>
