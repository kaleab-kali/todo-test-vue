<template>
  <header>
    <h1 :class="$style.title">To do list</h1>
  </header>
</template>

<script>
export default {};
</script>

<style lang="scss" module>
.title {
  font-family: "Open Sans";
  background-color: $lightOrange;
  color: $brown;
  padding: 0.688rem 14.1rem;
  font-weight: 600;
  font-size: 1.25rem;
  text-align: center;
  @media (max-width: 980px) {
    padding: 0.688rem 10rem;
    font-size: 1.2rem;
  }
  @media (max-width: 850px) {
    padding: 0.688rem 5rem;
  }
  @media (max-width: 600px) {
    padding: 0.688rem 4rem;
  }
  @media (max-width: 450px) {
    padding: 0.688rem 2rem;
  }
}
</style>
