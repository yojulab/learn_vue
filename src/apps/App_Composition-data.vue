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

<style></style>
