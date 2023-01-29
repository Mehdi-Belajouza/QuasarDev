import { reactive } from "vue"

export const state = reactive({
  counterA: 0,
  counterB: 0,
  DisableA: false,
  DisableB: false,
  incrA: 0,
  incrB: 0,
  decrA: 0,
  decrB: 0,

  getVal(id) {
    if (id === "A") {
      return this.counterA;
    } else if (id === "B") {
      return this.counterB;
    } else {
      console.log("Attempting to get a non-existing counter");
      return 0;
    }
  },

  setVal(id, value) {
    if (id === "A") {
      this.counterA = value
      return this.counterA
    } else if (id === "B") {
      this.counterB = value
      return this.counterB
    } else {
      console.log("Attempting to set a non-existing counter");
      return 0;
    }
  },

  incr(id) {
    if (id === "A") {
      this.counterA++;
    } else if (id === "B") {
      this.counterB++;
    } else console.log("Attempting to increment a non-existing counter");
  },

  decr(id) {
    if (id === "A") {
      this.counterA--;
    } else if (id === "B") {
      this.counterB--;
    } else console.log("Attempting to decrement a non-existing counter");
  },

  reset(id){
    if (id === "A") {
      this.counterA=0;
    } else if (id === "B") {
      this.counterB=0;
    } else {
      console.log("Attempting to reset a non-existing counter")
    }
  },

  dis(id){
    if (id === "A") {
      this.DisableA = !this.DisableA;
    } else if (id === "B") {
      this.DisableB = !this.DisableB;
    } else {
      console.log("Attempting to disable/enable a non-existing counter");
    }
  },

  incrTooltip(id){
    if (id === "A"){
      this.incrA++;
    } else if (id === "B") {
      this.incrB++;
    } else {
      console.log("Attempting to calculate clicks a non-existing counter");
    }
  },

  decrTooltip(id){
    if (id === "A"){
      this.decrA++;
    } else if (id === "B") {
      this.decrB++;
    } else {
      console.log("Attempting to calculate clicks a non-existing counter");
    }
  },
})
