<template>
  <keep-alive>
    <component :is="currentApp"></component>
  </keep-alive>
</template>

<script>
import ComponentsMixins from "./apps/App_mixins.vue";
import ComponentsRefs from "./apps/App_refs.vue";
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
      currentApp: "ComponentsMixins",
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
    ComponentsRefs,
    ComponentsMixins,
  },
};
</script>

<style></style>
