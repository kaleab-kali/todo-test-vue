<!-- eslint-disable vue/no-mutating-props -->
<!-- eslint-disable vue/no-mutating-props -->
<template>
  <div :class="$style.add">
    <input
      type="text"
      placeholder="Add new task"
      @keyup.enter="clearInput"
      v-model="newTask"
      :disabled="isDisabled"
      :required="isRequired"
      @focus="isFocused = true"
      @blur="isFocused = false"
    />
    <div v-if="isError" class="error-message">{{ errorMessage }}</div>
    <div v-if="isSuccess" class="success-message">{{ successMessage }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newTask: "",
      maxCharacters: 50,
      isDisabled: false,
      isRequired: true,
      isFocused: false,
      isError: false,
      isSuccess: false,
      errorMessage: "",
      successMessage: "",
    };
  },
  name: "AddTask",
  // props: {
  //   // eslint-disable-next-line vue/require-prop-type-constructor
  //   value: "",
  // },
  methods: {
    clearInput() {
      const profanityRegex = /damn|shit|idiot|asshole/i;
      if (this.newTask.trim() === "") {
        this.isError = true;
        this.errorMessage = "Task is empty";
        this.isSuccess = false;
      } else if (this.newTask.length > this.maxCharacters) {
        this.isError = true;
        this.errorMessage = `Task cannot exceed ${this.maxCharacters} characters`;
        this.isSuccess = false;
      } else if (profanityRegex.test(this.newTask)) {
        this.isError = true;
        this.errorMessage = "Todo cannot contain profanity";
        this.isSuccess = false;
      } else {
        this.isError = false;
        this.errorMessage = "";
        this.isSuccess = true;
        this.successMessage = "Task added successfully";
        this.$emit("keyup", this.newTask);
        // eslint-disable-next-line vue/no-mutating-props
        this.newTask = "";
      }
      // this.$emit("keyup", this.value);
      // // eslint-disable-next-line vue/no-mutating-props
      // this.value = "";
    },
  },
};
</script>

<style lang="scss" module>
.add {
  font-family: "Times New Roman", Times, serif;
  padding: 0.688rem 0;
  border-radius: 0.625rem;
  display: flex;
  color: $lightOrange;
  background-color: $peach;
  border: 2px dashed $lightOrange;
  max-width: 30rem;
  margin-top: 1rem;
  @media (max-width: 980px) {
    max-width: 30rem;
    margin: 1rem;
  }
  @media (max-width: 450px) {
    margin-bottom: 0;
  }
  input {
    font-weight: 400;
    font-size: 1.25rem;
    color: $lightOrange;
    background-color: $peach;
    border: none;
    outline: none;
    display: flex;
    text-align: center;
    @media (max-width: 450px) {
      max-width: 10rem;
      font-size: 1rem;
    }
  }
}
.add:hover {
  border: 2px dashed $orange;
}
.add:active {
  border: 2px solid $orange;
}
</style>
