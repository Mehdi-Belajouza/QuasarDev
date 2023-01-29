<script setup>
import { defineComponent, toRef } from "vue";
import { state } from "../stores/countersState";
import useAuthUser from "src/composables/UseAuthUser";
import useAPI from "src/composables/UseApi";
import DisableButton from "../components/DisableButton.vue";
import ToLocal from "./ToLocal.vue";
import FromLocal from "./FromLocal.vue";

defineComponent({ name: "CounterComponent" });

const { isSignedIn } = useAuthUser();

const props = defineProps({
  id: {
    required: true,
    validator(value) {
      return ["A", "B"].includes(value);
    },
  },
});

const { syncFromServer, syncToServer } = useAPI(props.id);

const counterValue = toRef(state, "counter" + props.id);
const CounterState = toRef(state, "Disable" + props.id);
</script>
<!-- :disabled="!isSignedIn", -->
<template lang="pug">
.column.justify-evenly(:id="'counter_' + id")
  p.q-ma-md.text-h5.text-purple-9.self-center Counter {{ id }}
  .row.justify-center.items-end
    q-btn.q-ma-md.col-1(rounded, color="cyan", @click="state.incr(id);state.incrTooltip(id)", data-cy="btn-up" , :disable="CounterState")
      q-tooltip(anchor="top left" data-cy="btn-tool-up").bg-teal {{toRef(state,"incr"+props.id)}}
      q-icon(name="arrow_drop_up", size="md")
    q-input.col-8(
      v-model.number="counterValue",
      placeholder="Enter number",
      error-message = "Input must be a number",
      outlined,
      dense,
      rounded,
      input-class=" text-h5 text-center text-cyan",
      :rules="[val => (Number.isFinite(val)) || 'error']",
      :disable="CounterState"
      data-cy="input"
      )
      q-tooltip(anchor="bottom middle").bg-teal Enter number
    q-btn.q-ma-md.col-1(rounded, color="cyan", @click="state.decr(id);state.decrTooltip(id)", data-cy="btn-dn", :disable="CounterState")
      q-tooltip(anchor="top right" data-cy="btn-tool-dn").bg-teal {{toRef(state,"decr"+props.id)}}
      q-icon(name="arrow_drop_down", size="md")
  .row.justify-center
    .column.col-4
      q-btn.q-ma-xs.bg-teal-13(
        rounded,
        dense,
        no-caps,
        size="0.9em",
        icon="cloud_upload",
        label="Sync to Server",
        @click = "syncToServer"
        )
        q-tooltip(anchor="bottom left").bg-teal update server values
    .column.col-5
      q-btn.q-ma-xs.bg-teal-13(
        rounded,
        dense,
        no-caps,
        size="0.9em",
        icon="cloud_download",
        label="Sync from Server",
        @click = "syncFromServer"
        )
        q-tooltip(anchor="bottom right").bg-teal update local values from server
  .row.justify-center
    .column.col-1
    .column.col-3
      ToLocal(:id="id")
    .column.col-4
      q-btn.q-ma-md(@click="state.reset(id)",color="blue",label="Reset" data-cy="btn-res")
    .column.col-3
      FromLocal(:id="id")
    .column.col-1
  .row.justify-center
    .column.col-3
    .column.col-7
      DisableButton.q-ma-md(:id="id")
      DeleteButton.q-ma-md(:id="id")
</template>
