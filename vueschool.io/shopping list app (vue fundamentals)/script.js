let shoppingList = new Vue({
  el: '#shopping-list',

  data: {
    state: 'default',

    header: 'shopping list app',

    newItem: '',

    items: [
      {
        label: '1 Pasta Packet',
        purchased: false,
        highPriority: false,
      },
      {
        label: 'Dettol Soap',
        purchased: true,
        highPriority: false,
      },
      {
        label: 'Perfume',
        purchased: false,
        highPriority: false,
      },
    ],
  },

  computed: {
    reversedItems() {
      return this.items.slice(0).reverse();
    },
  },

  methods: {
    saveItem: function () {
      this.items.push({
        label: this.newItem,
        purchased: false,
      });
      this.newItem = '';
    },

    changeState: function (newState) {
      this.state = newState;
      this.newItem = '';
    },

    togglePurchased: function (item) {
      item.purchased = !item.purchased;
    },
  },
});
