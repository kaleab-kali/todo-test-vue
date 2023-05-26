import { mount, createLocalVue } from "@vue/test-utils";
import Footer from "@/components/organisms/Footer.vue";
import Vuex from "vuex";
import TabButton from "@/components/atoms/TabButton.vue";

const localVue = createLocalVue();
localVue.use(Vuex);

describe("Footer.vue", () => {
  let getters;
  let store;
  let state;
  let mutations;

  beforeEach(() => {
    getters = {
      allTodos: () => jest.fn(),
      getActiveTasks: () => jest.fn(),
    };
    state = {
      filter: "All",
    };
    mutations = {
      changeTabStatus: jest.fn(),
    };

    store = new Vuex.Store({
      modules: {
        todo: {
          getters,
          state,
          mutations,
        },
      },
    });
  });

  it("Tabs map from data", () => {
    const tabs = [
      { title: "All", isActive: true },
      { title: "Active", isActive: false },
      { title: "Completed", isActive: false },
    ];
    const wrapper = mount(Footer, {
      store,
      localVue,
      data() {
        return {
          tabs,
        };
      },
    });
    expect(wrapper.findAllComponents(TabButton).length).toBe(tabs.length);
  });
  it("Component has one active filter", () => {
    const tabs = [
      { title: "All", isActive: true },
      { title: "Active", isActive: false },
      { title: "Completed", isActive: false },
    ];
    const wrapper = mount(Footer, {
      store,
      localVue,
      data() {
        return {
          tabs,
        };
      },
    });
    const activeTabButton = wrapper
      .findAllComponents(TabButton)
      .wrappers.find((el) => el.props().title === "All");
    expect(activeTabButton.props().isActive).toBeTruthy();
  });
  it("Component calls mutation changeTabStatus", () => {
    const wrapper = mount(Footer, {
      store,
      localVue,
    });
    wrapper
      .findAllComponents(TabButton)
      .wrappers.find((el) => el.props().title === "Completed")
      .trigger("click");
    expect(mutations.changeTabStatus).toBeCalledWith(state, "Completed");
  });
});
