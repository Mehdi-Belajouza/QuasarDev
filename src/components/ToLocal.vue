<script setup>
import { defineComponent } from "vue";
import locStore from "../composables/fromtolocal";

defineComponent({ name: "ToLocal" });

const props = defineProps({
  id: {
    required: true,
    validator(value) {
      return ["A", "B"].includes(value);
    },
  },
});

const { saving } = locStore(props.id);
</script>

<template>
  <div>
    <q-btn
      class="btn-fixed-width"
      color="green"
      label="To local Storage"
      icon="download"
      @click="saving"
      data-cy="btn-to-local"
    />
  </div>
</template>
