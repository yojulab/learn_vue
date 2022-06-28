<template>
  <h2>Main App Vue</h2>
  <button @click="currentMenu = 'MenuFirst'">Menu First</button>
  <button @click="currentMenu = 'MenuSecond'">Menu Second</button>
  <button @click="currentMenu = 'MenuThird'">Menu Third</button>
  <div>
    currentMenu :
    <keep-alive>
      <component :is="currentMenu"></component>
    </keep-alive>
  </div>
</template>

<script>
import MenuFirst from "../components/dynamic/MenuFirst.vue";
import MenuSecond from "../components/dynamic/MenuSecond.vue";
import MenuThird from "../components/dynamic/MenuThird.vue";
export default {
  name: "App",
  components: {
    MenuFirst,
    MenuSecond,
    MenuThird,
  },
  data() {
    return {
      message: "Hello Vue!",
      currentMenu: "",
    };
  },
};
</script>

<style></style>
