import { v4 } from "uuid";
export default {
  state: {
    todos: [],
    filter: "All",
  },
  getters: {
    allTodos: (state) => state.todos,

    getActiveTasks(state) {
      return state.todos.filter((todo) => todo.isChecked === false);
    },

    filterTasks(state) {
      if (state.filter == "All") {
        return state.todos;
      } else if (state.filter == "Active") {
        return state.todos.filter((todo) => todo.isChecked === false);
      } else if (state.filter == "Completed") {
        return state.todos.filter((todo) => todo.isChecked === true);
      }
      return state.todos;
    },
  },
  mutations: {
    addTodo(state, value) {
      state.todos.push({
        id: v4(),
        title: value,
        isChecked: false,
      });
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
    deleteTask(state, id) {
      state.todos = state.todos.filter((todo) => todo.id != id);
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },

    changeTaskStatus(state, id) {
      state.todos.map((todo) => {
        if (todo.id == id) {
          todo.isChecked = !todo.isChecked;
        }
      });
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
    changeTabStatus(state, title) {
      state.filter = title;
    },
    getStorage(state) {
      state.todos = JSON.parse(localStorage.getItem("todos")) || [];
    },
  },
  actions: {},
};
