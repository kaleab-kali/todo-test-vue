import Vuex from "vuex";
import { createLocalVue } from "@vue/test-utils";
import todo from "@/store/modules/todo";
import { v4 } from "uuid";

const localVue = createLocalVue();
localVue.use(Vuex);
const store = new Vuex.Store(todo);

store.state.todos = [
  { id: v4(), title: "Task 1", isChecked: true },
  { id: v4(), title: "Task 2", isChecked: false },
  { id: v4(), title: "Task 3", isChecked: false },
];
store.state.tabs = [
  { title: "All", isActive: true },
  { title: "Active", isActive: false },
  { title: "Completed", isActive: false },
];

describe("store testing", () => {
  it("all todos", () => {
    expect(store.getters.allTodos.length).toBe(store.state.todos.length);
  });
  it("active todos", () => {
    expect(store.getters.getActiveTasks.length).toBe(2);
  });
  it("todos are filtred", () => {
    store.state.filter = "All";
    expect(store.getters.filterTasks.length).toBe(3);
    store.state.filter = "Active";
    expect(store.getters.filterTasks.length).toBe(2);
    store.state.filter = "Completed";
    expect(store.getters.filterTasks.length).toBe(1);
  });
  it("adds todo", () => {
    let todoText;
    store.commit("addTodo", todoText);
    expect(store.state.todos[3].title).toBe(todoText);
  });
  it("delets todo", () => {
    let todosLength = store.state.todos.length;
    store.commit("deleteTask", store.state.todos[0].id);
    expect(store.state.todos.length).toBe(todosLength - 1);
  });

  it("changes todo status", () => {
    store.commit("changeTaskStatus", store.state.todos[1].id);
    expect(store.state.todos[1].isChecked).toBe(true);
  });
  it("changes tab status", () => {
    store.commit("changeTabStatus", "All");
    expect(store.state.filter).toBe("All");
  });
});
