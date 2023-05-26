<template>
  <div :class="$style.add">
    <input
      type="text"
      placeholder="Add new task"
      @keyup.enter="clearInput"
      v-model="value"
    />
  </div>
</template>

<script>
export default {
  name: "AddTask",
  props: {
    value: "",
  },
  methods: {
    clearInput() {
      this.$emit("keyup", this.value);
      this.value = "";
    },
  },
};
</script>

<style lang="scss" module>
.add {
  font-family: "Inter";
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
