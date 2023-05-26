<template>
  <button
    :class="[$style.tab, { [$style.active]: isActive }]"
    @click="$emit('click')"
    data-cy="tab__title"
  >
    {{ title }}
  </button>
</template>

<script>
export default {
  props: {
    title: String,
    isActive: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" module>
.tab {
  font-family: "Open Sans";
  background: #ffca93;
  font-weight: 600;
  font-size: 20px;
  color: $lightBrown;
  border: none;
  cursor: pointer;
  margin-right: 0;
  @media (max-width: 450px) {
    font-size: 0.8rem;
  }
}
.tab:hover {
  color: $brownHover;
}
.tab:active {
  color: $orange;
}
.active {
  border: 2.3px solid $brownBorder;
  border-radius: 10px;
}
@media (max-width: 980px) {
  p {
    margin-right: 0.5rem;
  }
}
</style>
