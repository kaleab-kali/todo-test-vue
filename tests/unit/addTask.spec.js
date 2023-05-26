import { mount } from "@vue/test-utils";
import AddTask from "@/components/atoms/AddTask.vue";

describe("Atom AddTask Component", () => {
  it("correct layout", () => {
    const wrapper = mount(AddTask);
    expect(wrapper.html()).toMatchSnapshot();
  });
  it("Task is entered", async () => {
    const wrapper = mount(AddTask);
    await wrapper.find("input").trigger("keyup.enter");
    await wrapper.find("input").trigger("change");
    expect(wrapper.emitted().keyup).toBeTruthy();
    expect(wrapper.emitted().change).toBeTruthy();
  });
});
