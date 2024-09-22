<template>
  <div>
    <h3>for props</h3>
    <ul>
      
    </ul>
    <hr>
    <h3>Main SharedState</h3>
    <div>
      <label for="isloading-main">Check:</label>
      <input v-model="stores.states.isLoading" type="checkbox" id="isloading-main" />
      {{ stores.states.isLoading }}
    </div>
    <div>
      <label for="name-main">name:</label>
      <input v-model="stores.states.people.name" type="text" id="name-main" />
      {{ stores.states.people.name }}
    </div>
    <div>
      <label for="description-main">description:</label>
      <input v-model="stores.states.people.description" type="text" id="description-main" />
      {{ stores.states.people.description }}
    </div>
    <SharedStates> </SharedStates>
  </div>
</template>

<script setup>
import { inject } from "vue";
import SharedStates from "./components/compositions/SharedStates.vue";

const stores = inject("stores");
</script>

<style></style>
