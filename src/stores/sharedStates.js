import { reactive, readonly } from "vue";

const states = reactive({
  isLoading: false,
  people: {
    name: "",
    description: "",
  },
});

export default { states };
