import { mount } from "@vue/test-utils";
import TitleName from "@/components/atoms/TitleName.vue";

describe("Atom TitleName Component", () => {
  it("Correct layout", () => {
    const wrapper = mount(TitleName);
    expect(wrapper.html()).toMatchSnapshot();
  });
});
