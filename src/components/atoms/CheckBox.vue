<template>
  <label>
    <input
      type="checkbox"
      :class="$style.checkbox"
      :checked="isChecked"
      @click="$emit('click')"
    />
    <span :class="$style.fake" data-cy="fake__checkbox" />
  </label>
</template>

<script>
export default {
  props: {
    isChecked: Boolean,
    default: false,
  },
};
</script>

<style lang="scss" module>
label {
  margin-left: 1.25rem;
  text-align: center;
  input {
    position: absolute;
    z-index: -1;
    opacity: 0;
    color: $lightOrange;
    background-color: $darkPeach;
  }
  .fake {
    display: inline-flex;
    width: 1.5rem;
    height: 1.5rem;
    border: 1.5px solid $backgroundGradient;
    border-radius: 5px;
    margin-right: 1.4rem;
  }
  .fake:hover {
    background: $peach;
  }
}
.fake::before {
  content: "";
  width: 24px;
  height: 24px;
  background-image: url("@/assets/checked.png");
  margin-top: -1.5px;
  border-radius: 0.31rem;
  margin-right: -1px;
  margin-left: -1px;
  opacity: 0;
  cursor: pointer;
}
.checkbox:checked + .fake::before {
  opacity: 1;
}
</style>
