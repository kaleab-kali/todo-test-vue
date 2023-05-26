import DeleteButton from "@/components/atoms/DeleteButton.vue";
import { mount } from "@vue/test-utils";

describe("Atom DeleteButton Component", () => {
  it("Correct layout", async () => {
    const wrapper = mount(DeleteButton);
    expect(wrapper.html()).toMatchSnapshot();
  });
  it("is clicked", async () => {
    const wrapper = mount(DeleteButton);
    await wrapper.find("button").trigger("click");
    expect(wrapper.emitted().click).toBeTruthy();
  });
});
