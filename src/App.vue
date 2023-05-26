<template>
  <div id="app" :class="$style.list">
    <div :class="$style.app">
      <Title />
      <TaskArea :todos="todos" />
      <Footer />
    </div>
    <!-- <div :class="$style.todoImage">
      <img src="@/assets/note.png" />
    </div> -->
  </div>
</template>

<script>
import Title from "@/components/organisms/Title";
import TaskArea from "@/components/organisms/TaskArea";
import Footer from "@/components/organisms/Footer";

export default {
  name: "App",
  props: {
    todos: [],
  },
  components: {
    Title,
    TaskArea,
    Footer,
  },
  mounted() {
    this.$store.commit("getStorage");
  },
};
</script>

<style lang="scss" module>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.list {
  background: linear-gradient(
    104.11deg,
    $backgroundOrange 14.52%,
    $backgroundGradient 87.26%
  );
  height: 100vh;
  margin-top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  .app {
    flex-direction: column;
    margin-top: 0;
    max-width: 33.75rem;
    border: 2px solid $lightOrange;
    z-index: 1;
    @media (max-width: 980px) {
      width: 33rem;
    }
    @media (max-width: 850px) {
      max-width: 28rem;
    }
    @media (max-width: 600px) {
      max-width: 24rem;
    }
    @media (max-width: 450px) {
      max-width: 17rem;
    }
  }
}
.todoImage {
  display: flex;
  flex-direction: row;
  position: absolute;
  margin-left: 33.5rem;
  margin-top: -2.5rem;
  img {
    @media (max-width: 980px) {
      margin-left: -6.5rem;
      margin-top: -6rem;
      max-width: 22rem;
    }
    @media (max-width: 850px) {
      margin-left: -13rem;
      margin-top: -10rem;
      max-width: 25rem;
    }
    @media (max-width: 710px) {
      margin-left: -15rem;
      margin-top: -13rem;
      max-width: 19rem;
    }
    @media (max-width: 650px) {
      margin-left: -18rem;
      margin-top: -15rem;
      max-width: 19rem;
    }
    @media (max-width: 600px) {
      display: none;
    }
  }
}
</style>
