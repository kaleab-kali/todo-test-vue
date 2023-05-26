import { mount } from "@vue/test-utils";
import Task from "@/components/molecules/Task.vue";
import Checkbox from "@/components/atoms/Checkbox";
import DeleteButton from "@/components/atoms/DeleteButton";

describe("Molecule Task Component", () => {
  it("Correct unchecked layout", () => {
    const wrapper = mount(Task, {
      propsData: {
        title: "Test Title",
        isChecked: false,
      },
    });
    expect(wrapper.element).toMatchSnapshot();
  });
  it("Correct checked layout", () => {
    const wrapper = mount(Task, {
      propsData: {
        title: "Test Title",
        isChecked: true,
      },
    });
    expect(wrapper.element).toMatchSnapshot();
  });
  it("Title renders correctly", () => {
    const title = "Test Title";
    const wrapper = mount(Task, {
      propsData: {
        title,
        isChecked: true,
      },
    });
    expect(wrapper.find("span.task").text()).toBe(title);
  });
  it("Checkbox is checked", () => {
    const wrapper = mount(Task, {
      propsData: {
        isChecked: true,
      },
    });
    expect(wrapper.findComponent(Checkbox).props().isChecked).toBe(true);
  });
  it("All Checkbox is checked", async () => {
    const wrapper = mount(Task, {
      propsData: {
        isChecked: true,
      },
    });
    await wrapper.findComponent(Checkbox).trigger("click");
    await wrapper.findComponent(DeleteButton).trigger("click");
    expect(wrapper.emitted().delete).toBeTruthy();
    expect(wrapper.emitted().changes).toBeTruthy();
  });
});
