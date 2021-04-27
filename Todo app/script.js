let app = new Vue({
  el: '#root',
  data: {
    state: 'taskList',
    todos: [
      { title: 'Wake up', completed: true },
      { title: 'Exercise', completed: false },
      { title: 'Shower', completed: false },
      { title: 'Have Breakfast', completed: false },
      { title: 'Start Office', completed: false },
      { title: 'Lunch', completed: false },
      { title: 'EOD', completed: false },
      { title: 'Entertainment', completed: false },
      { title: 'Go to bed', completed: false },
    ],
    task: '',
    errors: null,
  },

  methods: {
    changeState: function (state) {
      if (this.state !== state) {
        this.state = state;
      }
    },
    isNew: function () {
      for (let todo of this.todos) {
        if (todo.title == this.task) {
          return false;
        }
      }
      return true;
    },
    addTask: function () {
      this.errors = null;
      if (this.task.length > 2) {
        if (this.isNew()) {
          this.todos.push({ title: this.task, completed: false });
          this.task = null;
        } else {
          this.errors = 'Already in list.';
        }
      } else {
        this.errors = 'Task length should at least be on 3 character';
      }
    },
    removeTask: function (todoIndex) {
      let newtodos = this.todos.slice(0);
      newtodos.splice(todoIndex, 1);
      this.todos = newtodos;
    },
    markTask: function (todo) {
      todo.completed = !todo.completed;
    },
  },

  computed: {
    reversedList() {
      return this.todos.slice(0).reverse();
    },
  },
});
