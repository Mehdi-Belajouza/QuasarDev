<script setup>
import { defineComponent } from 'vue';
import  locStore  from "../composables/fromtolocal"

defineComponent ({ name: "FromLocal" });

const props = defineProps({
  id: {
    required: true,
    validator(value) {
      return ["A", "B"].includes(value);
    },
  },
});

const { sync } = locStore(props.id);

</script>


<template>
  <div>
    <q-btn
      class="btn-fixed-width"
      color="green"
      label="From local Storage"
      icon="upload"
      @click="sync"
      data-cy="btn-from-local"
    />
  </div>
</template>
