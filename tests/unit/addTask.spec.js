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
    // expect(wrapper.emitted().keyup).toBeTruthy();
    expect(wrapper.emitted().change).toBeTruthy();
  });
  it("displays an error message when the input field is empty", async () => {
    const wrapper = mount(AddTask);
    await wrapper.find("input").setValue("");
    await wrapper.find("input").trigger("keyup.enter");
    expect(wrapper.find(".error-message").text()).toBe("Task is empty");
  });
  it("displays an error message when the input field exceeds the maxCharacters limit", async () => {
    const wrapper = mount(AddTask);
    await wrapper.find("input").setValue("a".repeat(51));
    await wrapper.find("input").trigger("keyup.enter");
    expect(wrapper.find(".error-message").text()).toBe(
      "Task cannot exceed 50 characters"
    );
  });
  it("displays a success message when a task is added successfully", async () => {
    const wrapper = mount(AddTask);
    await wrapper.find("input").setValue("New Task");
    await wrapper.find("input").trigger("keyup.enter");
    expect(wrapper.find(".success-message").text()).toBe(
      "Task added successfully"
    );
  });
  it("displays an error message when the input field contains a profanity word", async () => {
    const wrapper = mount(AddTask);
    await wrapper
      .find("input")
      .setValue("This task contains a profanity word: shit");
    await wrapper.find("input").trigger("keydown.enter");
    expect(wrapper.find(".error-message").text()).toBe(
      "Todo cannot contain profanity"
    );
  });

  // it("emits a task-added event when a task is added successfully", async () => {
  //   const wrapper = mount(AddTask);
  //   await wrapper.find("input").setValue("New Task");
  //   await wrapper.find("input").trigger("keyup.enter");
  //   expect(wrapper.emitted("task-added")).toBeTruthy();
  //   expect(wrapper.emitted("task-added")[0]).toEqual(["New Task"]);
  // });
});
