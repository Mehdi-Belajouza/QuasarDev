<script setup>
import { defineComponent, toRef } from "vue";
import { state } from "../stores/countersState";

defineComponent({ name: "DisableButton" });

const props = defineProps({
  id: {
    required: true,
    validator(value) {
      return ["A", "B"].includes(value);
    },
  },
});

const counterDisabled = toRef(state, "Disable" + props.id);
</script>

<template>
  <div>
    <q-btn
      class="btn-fixed-width"
      :color="counterDisabled ? 'accent' : 'yellow'"
      :label="counterDisabled ? 'Enable' : 'Disable'"
      :icon="counterDisabled ? 'toggle_on' : 'toggle_off'"
      @click="state.dis(id)"
      data-cy="btn-disable"
    />
  </div>
</template>
