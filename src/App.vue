<template>
  <h2>Main App Vue</h2>
  <button @click="currentMenu = 'ComponentsProps'">ComponentsProps</button>
  <button @click="currentMenu = 'ComponentsEmit'">ComponentsEmit</button>
  <button @click="currentMenu = 'ComponentsProvideInject'">
    ComponentsProvideInject
  </button>
  <button @click="currentMenu = 'ComponentsDynamic'">ComponentsDynamic</button>
  <button @click="currentMenu = 'ComponentsSlot'">ComponentsSlot</button>
  <button @click="currentMenu = 'ComponentsTeleport'">
    ComponentsTeleport
  </button>
  <button @click="currentMenu = 'ComponentsHttpRequest'">
    ComponentsHttpRequest
  </button>
  <button @click="currentMenu = 'ComponentsRefs'">ComponentsRefs</button>
  <button @click="currentMenu = 'ComponentsMixins'">ComponentsMixins</button>
  <button @click="currentMenu = 'CompositionData'">CompositionData</button>
  <button @click="currentMenu = 'CompositionMethods'">
    CompositionMethods
  </button>
  <button @click="currentMenu = 'CompositionWait'">CompositionWatch</button>
  <button @click="currentMenu = 'CompositionLifecycle'">
    CompositionLifecycle
  </button>
  <div>
    currentMenu : {{ currentMenu }}
    <keep-alive>
      <component :is="currentMenu"></component>
    </keep-alive>
  </div>
</template>

<script>
import CompositionLifecycle from "./apps/App_composition-lifecycle.vue";
import CompositionWait from "./apps/App_composition-wait.vue";
import CompositionMethods from "./apps/App_composition-methods.vue";
import CompositionData from "./apps/App_Composition-data.vue";
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
      currentMenu: "",
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
    CompositionData,
    CompositionMethods,
    CompositionWait,
    CompositionLifecycle,
  },
};
</script>

<style>
button {
  padding: 0.2rem;
  margin: 0.2rem;
}
</style>
