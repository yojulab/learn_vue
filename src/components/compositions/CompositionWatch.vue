<template>
  <h3>amount : {{ amount }}</h3>
  <h3>{{ name }}, {{ price }}</h3>
  <input type="text" name="" id="" v-model="name" />
  <input type="text" name="" id="" v-model="price" />
</template>

<script>
import { reactive, watch, toRefs, computed } from "vue";
export default {
  // name: 'CompositionMethods',
  setup() {
    const state = reactive({
      name: "Tablet",
      price: 100,
      amount: 1,
    });
    // watch(
    //   () => state.name,
    //   () => console.log("name changed")
    // );
    watch(
      () => {
        return { ...state };
      },
      (newValue, oldValue) => {
        console.log("new : ", newValue, "old : ", oldValue);
        if (newValue.price !== oldValue.price) {
          //   newValue.amount += newValue.price;     // not working
          state.amount = computed(() => {
            return parseInt(oldValue.price) + parseInt(oldValue.amount);
          });
        }
      },
      { deep: true }
    );

    return {
      ...toRefs(state),
    };
  },
};
</script>

<style></style>
