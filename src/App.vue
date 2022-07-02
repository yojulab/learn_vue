<template>
  <keep-alive>
    <component :is="currentApp"></component>
  </keep-alive>
</template>

<script>
import ComponentsDynamic from "./apps/App_components_dynamic.vue";
import ComponentsProvideInject from "./apps/App_componets_provide_inject.vue";
import ComponentsEmit from "./apps/App_componets_emit.vue";
import ComponentsProps from "./apps/App_componets_props.vue";

export default {
  name: "App",
  data() {
    return {
      currentApp: "ComponentsDynamic",
    };
  },
  components: {
    ComponentsDynamic,
    ComponentsProvideInject,
    ComponentsEmit,
    ComponentsProps,
  },
};
</script>

<style></style>
