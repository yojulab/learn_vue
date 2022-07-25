import { defineComponent } from "vue";
import ComponentsEmit from "../apps/App_componets_emit.vue";

// lazy load components for better performance
const CompositionLifecycle = () => {
  return import("../apps/App_composition-lifecycle.vue");
};
const CompositionWatch = () => {
  return import("../apps/App_composition-watch.vue");
};
const CompositionMethods = () => {
  return import("../apps/App_composition-methods.vue");
};
const CompositionData = () => {
  return import("../apps/App_Composition-data.vue");
};
const ComponentsMixins = () => {
  return import("../apps/App_mixins.vue");
};
const ComponentsRefs = () => {
  return import("../apps/App_refs.vue");
};
const ComponentsHttpRequest = () => {
  return import("../apps/App_httpRequest.vue");
};
const ComponentsTeleport = () => {
  return import("../apps/App_teleport.vue");
};
const ComponentsSlot = () => {
  return import("../apps/App_slot.vue");
};
const ComponentsDynamic = () => {
  return import("../apps/App_components_dynamic.vue");
};
const ComponentsProvideInject = () => {
  return import("../apps/App_componets_provide_inject.vue");
};
const CompositionReusability = () => {
  return import("../apps/App_composition-reusability.vue");
};
const ComponentsProps = () => {
  return import("../apps/App_componets_props.vue");
};

const NotFound = defineComponent({
  template: "<div>Not Found</div>",
});
const routes = [
  { path: "/:pathMatch(.*)*", name: "NotFound", component: NotFound },
  { path: "/", redirect: "/components-props" },
  {
    path: "/composition-reusability",
    component: CompositionReusability,
    name: "CompositionReusability",
  },
  {
    path: "/composition-lifecycle",
    component: CompositionLifecycle,
    name: "CompositionLifecycle",
  },
  {
    path: "/composition-watch",
    component: CompositionWatch,
    name: "CompositionWatch",
  },
  {
    path: "/composition-methods",
    component: CompositionMethods,
    name: "CompositionMethods",
  },
  {
    path: "/composition-data",
    component: CompositionData,
    name: "CompositionData",
  },
  {
    path: "/components-mixins",
    component: ComponentsMixins,
    name: "ComponentsMixins",
  },
  {
    path: "/components-refs",
    component: ComponentsRefs,
    name: "ComponentsRefs",
  },
  {
    path: "/components-httpRequest",
    component: ComponentsHttpRequest,
    name: "ComponentsHttpRequest",
  },
  {
    path: "/components-teleport",
    component: ComponentsTeleport,
    name: "ComponentsTeleport",
  },
  {
    path: "/components-slot",
    component: ComponentsSlot,
    name: "ComponentsSlot",
  },
  {
    path: "/components-dynamic",
    component: ComponentsDynamic,
    name: "ComponentsDynamic",
  },
  {
    path: "/components-provide-inject",
    component: ComponentsProvideInject,
    name: "ComponentsProvideInject",
  },
  {
    path: "/components-emit",
    component: ComponentsEmit,
    name: "ComponentsEmit",
  },
  {
    path: "/components-props",
    component: ComponentsProps,
    name: "ComponentsProps",
  },
];

export default routes;
