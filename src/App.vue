<template>
  <card-view-slot>
    <template v-slot:header>
      <h3>Card Template</h3>
    </template>
    <template v-slot:body>
      <p>This is a card Body.</p>
    </template>
    <template v-slot:footer>
      <small>This is a card footer</small>
    </template>
  </card-view-slot>
  <CardView>Slot Text</CardView>
  <CardView>
    <img
      src="https:://placeimg.com/100/50/any"
      width="100"
      height="50"
      alt=""
    />
  </CardView>
  <CardView>
    <ul>
      <li>List Item 1</li>
      <li>List Item 2</li>
      <li>List Item 3</li>
    </ul>
  </CardView>
  <card-view></card-view>
  <h3>Hello World</h3>
</template>

<script>
import CardView from "./components/slots/CardView.vue";
import CardViewSlot from "./components/slots/CardViewSlot.vue";
export default {
  name: "App",
  components: {
    CardView,
    CardViewSlot,
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
