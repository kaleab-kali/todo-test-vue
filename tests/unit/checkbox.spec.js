import Checkbox from "@/components/atoms/CheckBox.vue";
import { mount } from "@vue/test-utils";

describe("Atom Checkbox Component", () => {
  it("Correct layout", () => {
    const wrapper = mount(Checkbox);
    expect(wrapper.html()).toMatchSnapshot();
  });
  it("is clicked", async () => {
    const wrapper = mount(Checkbox);
    await wrapper.find("input").trigger("click");
    expect(wrapper.emitted().click).toBeTruthy();
  });
});
