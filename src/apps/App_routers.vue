<template>
  <h3>Router Menu</h3>
  <button @click="$router.push({ path: '/components-props' })">
    ComponentsProps
  </button>
  <button @click="$router.push({ path: '/components-emit' })">
    ComponentsEmit
  </button>
  <button @click="$router.push({ name: 'ComponentsProvideInject' })">
    ComponentsProvideInject
  </button>
  <button @click="$router.push({ name: 'ComponentsDynamic' })">
    ComponentsDynamic
  </button>
  <button @click="$router.push({ name: 'ComponentsSlot' })">
    ComponentsSlot
  </button>
  <button @click="$router.push({ name: 'ComponentsTeleport' })">
    ComponentsTeleport
  </button>
  <button @click="$router.push({ name: 'ComponentsHttpRequest' })">
    ComponentsHttpRequest
  </button>
  <button @click="$router.push({ name: 'ComponentsRefs' })">
    ComponentsRefs
  </button>
  <button @click="$router.push({ name: 'ComponentsMixins' })">
    ComponentsMixins
  </button>
  <button @click="$router.push({ name: 'CompositionData' })">
    CompositionData
  </button>
  <button @click="$router.push({ name: 'CompositionMethods' })">
    CompositionMethods
  </button>
  <button @click="$router.push({ name: 'CompositionWatch' })">
    CompositionWatch
  </button>
  <button @click="$router.push({ name: 'RouterLink' })">RouterLink</button>

  <div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  // components: {
  //   HelloWorld
  // }
};
</script>

<style></style>
