import { useSubmit } from "react-router-dom";

export { useCustomSubmit };

function useCustomSubmit() {
  const submit = useSubmit();
  return function (target, options = {}) {
    if (target instanceof URLSearchParams) {
      target.sort();
    }
    submit(target, options);
  };
}
