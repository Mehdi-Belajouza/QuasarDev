import { state } from "../stores/countersState";

export default function totest(id) {
  const saving = async () => {
    let value = state.getVal(id);
    localStorage.setItem("counter" + id, value);
  };

  const sync = async () => {
    let value = localStorage.getItem("counter" + id);
    if (value) {
      state.setVal(id, parseInt(value));
    } else {
      state.setVal(id, 0);
    }
  };

  return {
    saving,
    sync,
  };
}
