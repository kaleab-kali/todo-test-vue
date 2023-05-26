import { mount } from "@vue/test-utils";
import Title from "@/components/organisms/Title.vue";

describe("Atom Title Component", () => {
  it("Correct layout", () => {
    const wrapper = mount(Title);
    expect(wrapper.html()).toMatchSnapshot();
  });
});
