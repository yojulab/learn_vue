import { defineComponent } from "vue";
import CompositionReusability from "../apps/App_composition-reusability.vue";
import CompositionLifecycle from "../apps/App_composition-lifecycle.vue";
import CompositionWatch from "../apps/App_composition-watch.vue";
import CompositionMethods from "../apps/App_composition-methods.vue";
import CompositionData from "../apps/App_Composition-data.vue";
import ComponentsMixins from "../apps/App_mixins.vue";
import ComponentsRefs from "../apps/App_refs.vue";
import ComponentsHttpRequest from "../apps/App_httpRequest.vue";
import ComponentsTeleport from "../apps/App_teleport.vue";
import ComponentsSlot from "../apps/App_slot.vue";
import ComponentsDynamic from "../apps/App_components_dynamic.vue";
import ComponentsProvideInject from "../apps/App_componets_provide_inject.vue";
import ComponentsEmit from "../apps/App_componets_emit.vue";
import ComponentsProps from "../apps/App_componets_props.vue";

const NotFound = defineComponent({
  template: "<div>Not Found</div>",
});
const routes = [
  {
    path: "/composition-reusability",
    component: CompositionReusability,
    name: "composition-reusability",
  },
  {
    path: "/composition-lifecycle",
    component: CompositionLifecycle,
    name: "composition-lifecycle",
  },
  {
    path: "/composition-watch",
    component: CompositionWatch,
    name: "composition-watch",
  },
  {
    path: "/composition-methods",
    component: CompositionMethods,
    name: "composition-methods",
  },
  {
    path: "/composition-data",
    component: CompositionData,
    name: "composition-data",
  },
  {
    path: "/components-mixins",
    component: ComponentsMixins,
    name: "components-mixins",
  },
  {
    path: "/components-refs",
    component: ComponentsRefs,
    name: "components-refs",
  },
  {
    path: "/components-httpRequest",
    component: ComponentsHttpRequest,
    name: "components-httpRequest",
  },
  {
    path: "/components-teleport",
    component: ComponentsTeleport,
    name: "components-teleport",
  },
  {
    path: "/components-slot",
    component: ComponentsSlot,
    name: "components-slot",
  },
  {
    path: "/components-dynamic",
    component: ComponentsDynamic,
    name: "components-dynamic",
  },
  {
    path: "/components-provide-inject",
    component: ComponentsProvideInject,
    name: "components-provide-inject",
  },
  {
    path: "/components-emit",
    component: ComponentsEmit,
    name: "components-emit",
  },
  {
    path: "/components-props",
    component: ComponentsProps,
    name: "components-props",
  },
  { path: "/", redirect: "/composition-reusability" },
  { path: "*", component: NotFound },
];

export default routes;
