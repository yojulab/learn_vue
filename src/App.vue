<template>
  <keep-alive>
    <component :is="currentApp"></component>
  </keep-alive>
</template>

<script>
import ComponentsHttpRequest from "./apps/App_httpRequest.vue";
import ComponentsTeleport from "./apps/App_teleport.vue";
import ComponentsSlot from "./apps/App_slot.vue";
import ComponentsDynamic from "./apps/App_components_dynamic.vue";
import ComponentsProvideInject from "./apps/App_componets_provide_inject.vue";
import ComponentsEmit from "./apps/App_componets_emit.vue";
import ComponentsProps from "./apps/App_componets_props.vue";

export default {
  name: "App",
  data() {
    return {
      currentApp: "ComponentsHttpRequest",
    };
  },
  components: {
    ComponentsProps,
    ComponentsEmit,
    ComponentsProvideInject,
    ComponentsDynamic,
    ComponentsSlot,
    ComponentsTeleport,
    ComponentsHttpRequest,
  },
};
</script>

<style></style>
