<template>
  <h3>Hello World</h3>
  <FirstComposition />
  <SecondComposition />
</template>

<script>
import FirstComposition from "../components/compositions/FirstComposition.vue";
import SecondComposition from "../components/compositions/SecondComposition.vue";

export default {
  name: "App",
  components: {
    FirstComposition,
    SecondComposition,
  },
};
</script>

<style>
.app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
