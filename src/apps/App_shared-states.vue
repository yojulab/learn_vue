<template>
  <h3>Main SharedState</h3>
  <div>
    <label for="isloading">Check:</label>
    <input v-model="stores.states.isLoading" type="checkbox" id="isloading" />
    {{ stores.states.isLoading }}
  </div>
  <div>
    <label for="name">name:</label>
    <input v-model="stores.states.people.name" type="text" id="name" />
    {{ stores.states.people.name }}
  </div>
  <div>
    <label for="description">description:</label>
    <input
      v-model="stores.states.people.description"
      type="text"
      id="description"
    />
    {{ stores.states.people.description }}
  </div>
  <SharedStates> </SharedStates>
</template>

<script setup>
import { inject } from "vue";
import SharedStates from "./components/compositions/SharedStates.vue";

const stores = inject("stores");
</script>

<style></style>
