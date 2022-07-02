<template>
  <!-- same way CardViewSlot -->
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
  <hr />
  <!-- set default value call in component -->
  <card-view></card-view>
  <CardView>
    <ul>
      <li>List Item 1</li>
      <li>List Item 2</li>
      <li>List Item 3</li>
    </ul>
  </CardView>
  <CardView>
    <img src="https://placeimg.com/300/200/any" alt="" />
  </CardView>
  <CardView>Slot Text</CardView>
</template>

<script>
import CardView from "../components/slots/CardView.vue";
import CardViewSlot from "../components/slots/CardViewSlot.vue";
export default {
  name: "App",
  components: {
    CardView,
    CardViewSlot,
  },
};
</script>

<style></style>
