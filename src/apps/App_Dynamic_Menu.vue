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
  <button @click="currentMenu = 'CompositionWatch'">CompositionWatch</button>
  <button @click="currentMenu = 'CompositionLifecycle'">
    CompositionLifecycle
  </button>
  <button @click="currentMenu = 'CompositionLifecycle'">
    CompositionLifecycle
  </button>
  <button @click="currentMenu = 'CompositionReusability'">
    CompositionReusability
  </button>

  <div>
    currentMenu : {{ currentMenu }}
    <keep-alive>
      <component :is="currentMenu"></component>
    </keep-alive>
  </div>
</template>

<script>
import CompositionReusability from "./App_composition-reusability.vue";
import CompositionLifecycle from "./App_composition-lifecycle.vue";
import CompositionWatch from "./App_composition-watch.vue";
import CompositionMethods from "./App_composition-methods.vue";
import CompositionData from "./App_Composition-data.vue";
import ComponentsMixins from "./App_mixins.vue";
import ComponentsRefs from "./App_refs.vue";
import ComponentsHttpRequest from "./App_httpRequest.vue";
import ComponentsTeleport from "./App_teleport.vue";
import ComponentsSlot from "./App_slot.vue";
import ComponentsDynamic from "./App_components_dynamic.vue";
import ComponentsProvideInject from "./App_componets_provide_inject.vue";
import ComponentsEmit from "./App_componets_emit.vue";
import ComponentsProps from "./App_componets_props.vue";

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
    CompositionWatch,
    CompositionLifecycle,
    CompositionReusability,
  },
};
</script>

<style>
button {
  padding: 0.2rem;
  margin: 0.2rem;
}
</style>
