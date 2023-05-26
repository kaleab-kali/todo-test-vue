import { mount, createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";
import TaskArea from "@/components/organisms/TaskArea.vue";
import Task from "@/components/molecules/Task.vue";

const localVue = createLocalVue();
localVue.use(Vuex);

describe("Organism TaskArea Component", () => {
  let store;
  let mutations;
  let getters;

  beforeEach(() => {
    mutations = {
      addTodo: jest.fn(),
      deleteTask: jest.fn(),
    };
    getters = {
      filterTasks: () => jest.fn(),
    };
    store = new Vuex.Store({
      mutations,
      getters,
    });
  });
  it("Correct layout", () => {
    const wrapper = mount(TaskArea, {
      store,
      localVue,
    });
    expect(wrapper.html()).toMatchSnapshot();
  });

  it("calls mutation addTodo", async () => {
    const wrapper = mount(TaskArea, {
      store,
      localVue,
    });
    await wrapper.find("input").trigger("keyup.enter");
    expect(mutations.addTodo).toHaveBeenCalled();
  });
  it("calls getter filterTasks", () => {
    const wrapper = mount(TaskArea, { store, localVue });
    expect(wrapper.findComponent(Task)).toBeTruthy();
  });
});
